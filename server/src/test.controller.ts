import { Controller, Get } from '@nestjs/common'

@Controller('posts')
export class PostController {
	@Get()
	getAllPosts(): string {
		return 'Все посты'
	}
}
