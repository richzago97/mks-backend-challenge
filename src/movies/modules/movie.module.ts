import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieModel } from "../entities/movie.entity";
import { MovieController } from "../movie.controller";

@Module({
    imports: [TypeOrmModule.forFeature([MovieModel])],
    controllers: [MovieController],
    providers: [
        MovieModel
    ]
})
export class MovieModule{}