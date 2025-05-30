import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import {
	endOfDay,
	endOfWeek,
	isWithinInterval,
	startOfDay,
	startOfWeek
} from 'date-fns'
import {
	IGithubProfile,
	IGoogleProfile
} from '@/auth/social-media/social-media-auth.types'
import type { User } from '@prisma/client'
import { AuthDto } from '@/auth/dto/auth.dto'
import { hash } from 'argon2'

@Injectable()
export class UserRepository {
	constructor(private prisma: PrismaService) {}

	async getUsers() {
		return this.prisma.user.findMany({
			include: {
				ownTasks: true
			}
		})
	}

	async getCurrentUser(id: string) {
		const user = await this.getById(id)
		if (user) {
			delete user.password
		}

		return user
	}


	async getProfile(id: string) {
		const user = await this.getById(id)
		if (user) {
			delete user.password
		}

		return user
	}

	async getById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id
			},
			include: {
				ownTasks: true
			}
		})
	}

	async getByEmail(email: string) {
		try {
			return this.prisma.user.findUnique({
				where: {
					email
				},
				include: {
					ownTasks: true
				}
			})
		} catch (e) {
			return e
		}
	}

	async findOrCreateSocialUser(profile: IGoogleProfile | IGithubProfile) {
		let user = await this.getByEmail(profile.email)
		if (!user) {
			user = await this._createSocialUser(profile)
		}
		return user
	}

	private async _createSocialUser(
		profile: IGoogleProfile | IGithubProfile
	): Promise<User> {
		const email = profile.email
		const name =
			'firstName' in profile
				? `${profile.firstName} ${profile.lastName}`
				: profile.username
		const picture = profile.picture || ''

		return this.prisma.user.create({
			data: {
				email,
				name,
				password: '',
				verificationToken: null,
				avatarPath: picture
			}
		})
	}

	async create(dto: AuthDto) {
		const data = {
			...dto
		}
		if (dto.password) {
			data.password = await hash(dto.password)
		} else {
			data.password = ''
		}
		const user = await this.prisma.user.create({ data })
		if (user) {
			delete user.password
		}
		return user
	}

	async patch(id: string, data: Partial<User>) {
		if (data.password) {
			data.password = await hash(data.password)
		}
		const user = await this.prisma.user.update({
			where: {
				id
			},
			data
		})
		if (user) {
			delete user.password
		}
		return user
	}
}
