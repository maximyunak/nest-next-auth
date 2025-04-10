import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class LoginDto {
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
}
