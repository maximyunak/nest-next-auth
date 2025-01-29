import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

class Post {
	id: number
	title: string
	content: string
}

@ApiTags('Posts')
@Controller('posts')
export class PostController {
	@ApiOperation({ summary: 'Получить всех пользователей' })
	@ApiResponse({
		status: 200,
		description: 'Список пользователей',
		type: Post
	})
	@Get()
	getAllPosts(): string {
		return 'Все посты'
	}
}
