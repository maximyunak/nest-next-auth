import {
	IsEmail,
	IsNotEmpty,
	IsString,
	MinLength,
	Validate
} from 'class-validator'

import { IsPasswordsMatchingConstraint } from '@/libs/common/decorators/is-password-matching-constraint.decorator'

export class RegisterDto {
	@IsString({ message: 'Имя должно быть строкой.' })
	@IsNotEmpty({ message: 'Имя обязательно для заполнения' })
	name: string

	@IsString({ message: 'Email должно быть строкой.' })
	@IsEmail({}, { message: 'Некорректный формат email.' })
	@IsNotEmpty({ message: 'Email обязателен для заполнения' })
	email: string

	@IsString({ message: 'Пароль должно быть строкой.' })
	@MinLength(6, {
		message: 'Пароль должен содержать минимум 6 символов.'
	})
	@IsNotEmpty({ message: 'Пароль обязателен для заполнения' })
	password: string

	@IsString({ message: 'Пароль подтверждения должен быть строкой.' })
	@MinLength(6, {
		message: 'Пароль подтверждения должен содержать минимум 6 символов.'
	})
	@IsNotEmpty({ message: 'Пароль подтверждения обязателен для заполнения' })
	@Validate(IsPasswordsMatchingConstraint, {
		message: 'Пароли не совпадают'
	})
	passwordRepeat: string
}
