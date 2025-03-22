import { Auth } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';
import { Body, Controller, Get, HttpCode, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Access } from '@prisma/client';
import { UserService } from './user.service';
import { UserDto } from '@/user/dto/user.dto';
import { UserModel } from '@/user/db/User.model'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Auth()
  @Get('profile')
  async getProfile(@CurrentUser('id') id: string) {
    return this.userService.getProfile(id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put()
  @Auth()
  async updateProfile(@CurrentUser('id') id: string, @Body() dto: UserDto) {
    Object.keys(dto).forEach(key => {
      if (dto[key] !== undefined && key in UserModel) {
        UserModel[key] = dto[key];
      }
    });
    return this.userService.update(id, dto)
  }

  @Auth()
  @Get('list')
  async getList() {
    return this.userService.getUsers();
  }
}
