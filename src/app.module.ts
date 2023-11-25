import { Module, NestModule } from '@nestjs/common';
import { MovieModule } from './movies/modules/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import "dotenv/config"



@Module({
  imports: [MovieModule, TypeOrmModule.forRoot({
    
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_DB_PORT!),
    username: process.env.POSTGRES_USER,
    password: String(process.env.POSTGRES_PASSWORD),
    database: process.env.POSTGRES_DB_NAME,
    entities: ["dist/**/*.entity.js"],
    synchronize: true,
  }), AuthModule],
  providers: [
    {
      provide: APP_GUARD, 
      useClass: JwtAuthGuard
    }
  ]
})


export class AppModule  {}
