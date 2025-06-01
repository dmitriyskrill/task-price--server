import { Auth } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';
import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { UserService } from './user.service';
import { UserDto, CreateUserDto } from '@/user/dto/user.dto';
import { UserModel } from '@/user/db/User.model'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { IUser } from '@/domainTypes/User.interface'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'
import { generateSort } from '@/utils/generateSort'

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
    return this.userService.patch(id, dto)
  }

  @Auth()
  @Get('list')
  async getList() {
    return this.userService.getUsers();
  }

	@Auth()
	@Get(':id')
	async getById(@Param('id') id: string) {
		return this.userService.getById(id);
	}

	@HttpCode(200)
	@Auth()
	@Patch(':id')
	async patch(
		@Param('id') id: string,
		@Body() update: Partial<UserDto>,
		@CurrentUser('id') userId: string,
	) {
		const baseEntity: Partial<ITypicalFields> = {
			updatedById: userId,
		};
		return this.userService.patch(id, mapDtoToEntity(update, baseEntity));
	}

	@HttpCode(200)
	@Post()
	@Auth()
	async create(@Body() dto: CreateUserDto, @CurrentUser('id') userId: string) {
		const baseEntity: Partial<IUser> = {
			createdById: userId,
			updatedById: userId,
			sort: generateSort()
		}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.userService.create(newDto)
	}

}
