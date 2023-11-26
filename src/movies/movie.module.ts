import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieController } from "./movie.controller";
import { MovieModel } from "./entities/movie.entity";
import { MovieService } from "./movie.service";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [TypeOrmModule.forFeature([MovieModel])],
    controllers: [MovieController],
    providers: [MovieService],
    exports: [MovieService]
})
export class MovieModule{}