import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from './auth/auth.module'
import { IS_DEV_ENV } from './libs/common/utils/is-dev.util'
import { PrismaModule } from './prisma/prisma.module'
import { PostController } from './test.controller'
import { UserModule } from './user/user.module'
import { ProviderModule } from './provider/provider.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true
		}),
		PrismaModule,
		AuthModule,
		UserModule,
		ProviderModule
	],
	controllers: [PostController]
})
export class AppModule {}
