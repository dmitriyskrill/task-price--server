import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

export interface IUser extends ITypicalFields {
	surname: string
	patronymic: string

	email: string
	login: string
	password: string
	verificationToken: string
	avatarPath: string
}
