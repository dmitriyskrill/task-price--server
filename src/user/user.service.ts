import { AuthDto } from '@/auth/dto/auth.dto';
import {
  IGithubProfile,
  IGoogleProfile,
} from '@/auth/social-media/social-media-auth.types';
import { Injectable } from '@nestjs/common';
import { UserRepository} from '@/user/db/repository/user.repository'
import { UserModel } from '@/user/db/User.model'

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {
  }

  async getUsers(): Promise<UserModel[]> {
    return this.userRepository.getUsers();
  }

  async getProfile(id: string) {
    return this.userRepository.getProfile(id);
  }

  async getById(id: string) {
    return this.userRepository.getById(id)
  }

  async getByEmail(email: string) {
    return this.userRepository.getByEmail(email);
  }

  async findOrCreateSocialUser(profile: IGoogleProfile | IGithubProfile) {
    return this.userRepository.findOrCreateSocialUser(profile)
  }

  async create(dto: AuthDto) {
    return this.userRepository.create(dto);
  }

	async patch(id: string, data: Partial<UserModel>) {
		return this.userRepository.patch(id, data)
	}
}
