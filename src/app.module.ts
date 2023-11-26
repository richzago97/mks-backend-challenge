import "dotenv/config"
import { Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { UserModule } from './user/user.module';
import { MovieModule } from "./movies/movie.module";



@Module({
  imports: [TypeOrmModule.forRoot({   
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_DB_PORT!),
    username: process.env.POSTGRES_USER,
    password: String(process.env.POSTGRES_PASSWORD),
    database: process.env.POSTGRES_DB_NAME,
    entities: ["dist/**/*.entity.js"],
    synchronize: true,
  }), AuthModule, MovieModule, UserModule],
  providers: [
    {
      provide: APP_GUARD, 
      useClass: JwtAuthGuard
    }
  ]
})


export class AppModule  {}
