import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { endOfDay, endOfWeek, isWithinInterval, startOfDay, startOfWeek } from 'date-fns'
import { IGithubProfile, IGoogleProfile } from '@/auth/social-media/social-media-auth.types'
import type { User } from '@prisma/client'
import { AuthDto } from '@/auth/dto/auth.dto'
import { hash } from 'argon2'


@Injectable()
export class UserRepository {
	constructor(private prisma: PrismaService) {}
	async getUsers() {
		return this.prisma.user.findMany({
			include: {
				tasks: true,
			},
		});
	}

	async getProfile(id: string) {
		const user = await this.getById(id);
		if (user) {
			delete user.password;
		}

		const userTasks = user.tasks || [];
		const totalTasks = userTasks.length;
		const completedTasks = userTasks.filter(({ isCompleted }) => isCompleted);

		const date = new Date();

		const todayStart = startOfDay(date);
		const todayEnd = endOfDay(date);
		const weekStart = startOfWeek(date);
		const weekEnd = endOfWeek(date);

		const todayTasks = userTasks
			.filter(task => isWithinInterval(
				task.createdAt, { start: todayStart, end: todayEnd },
			));

		const weekTasks = userTasks
			.filter(task => isWithinInterval(
				task.createdAt, { start: weekStart, end: weekEnd },
			));


		return {
			user,
			statistics: [
				{ label: 'Total', value: totalTasks },
				{ label: 'Completed tasks', value: completedTasks },
				{ label: 'Today tasks', value: todayTasks },
				{ label: 'Week tasks', value: weekTasks },
			],
		};
	}

	async getById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id,
			},
			include: {
				tasks: true,
			},
		});
	}

	async getByEmail(email: string) {
		try {
			return this.prisma.user.findUnique({
				where: {
					email,
				},
				include: {
					tasks: true,
				},
			});
		} catch (e) {
			return e;
		}
	}

	async findOrCreateSocialUser(profile: IGoogleProfile | IGithubProfile) {
		let user = await this.getByEmail(profile.email);
		if (!user) {
			user = await this._createSocialUser(profile);
		}
		return user;
	}

	private async _createSocialUser(
		profile: IGoogleProfile | IGithubProfile,
	): Promise<User> {
		const email = profile.email;
		const name =
			'firstName' in profile
				? `${profile.firstName} ${profile.lastName}`
				: profile.username;
		const picture = profile.picture || '';

		return this.prisma.user.create({
			data: {
				email,
				name,
				password: '',
				verificationToken: null,
				avatarPath: picture,
			},
		});
	}

	async create(dto: AuthDto) {
		return this.prisma.user.create({
			data: {
				...dto,
				password: await hash(dto.password),
			},
		});
	}

	async update(id: string, data: Partial<User>) {
		const user = await this.prisma.user.update({
			where: {
				id,
			},
			data,
		});
		if(user){
			delete user.password
		}
		return user
	}
}