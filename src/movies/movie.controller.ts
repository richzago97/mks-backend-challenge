import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateMovieValidation } from './validations/createMovie.validation';
import { MovieService } from './movie.service';
import { MovieModel } from './entities/movie.entity';

@Controller('/movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  public async create(@Body() body: CreateMovieValidation): Promise<MovieModel> {
    return this.movieService.createMovie(body);
  }

  @Get(':id')
  public async getOne(@Param('id', ParseIntPipe) id: number): Promise<MovieModel> {
    return this.movieService.getMovieById(id);
  }

  @Get()
  public async getAll(): Promise<MovieModel[]> {
    return this.movieService.getAllMovies();
  }

  @Patch(':id')
  public async update(@Param('id', ParseIntPipe) id: number, @Body() body): Promise<MovieModel> {
    return this.movieService.updateMovie(id, body);
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.movieService.deleteMovie(id);
  }

}
