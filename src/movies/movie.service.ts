import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieModel } from './entities/movie.entity';
import { CreateMovieValidation } from './validations/createMovie.validation';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieModel)
    private movieRepository: Repository<MovieModel>,
  ) {}

  async createMovie(movieData: CreateMovieValidation): Promise<MovieModel> {
    return this.movieRepository.save(movieData);
  }

  async getMovieById(id: number): Promise<MovieModel> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException(`Movie ${id} not found`);
    }
    return movie;
  }

  async getAllMovies(): Promise<{ data: MovieModel[] }> {
    const movies = await this.movieRepository.find();
    return { data: movies };
  }

  async updateMovie(id: number, updateData: Partial<MovieModel>): Promise<MovieModel> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException(`Movie ${id} not found`);
    }

    Object.assign(movie, updateData);

    await this.movieRepository.save(movie);
    return movie;
  }
  
  async deleteMovie(id: number): Promise<void> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException(`Movie ${id} not found`);
    }

    await this.movieRepository.delete(id);
  }
  
}
