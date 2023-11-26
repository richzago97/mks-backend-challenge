import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  MinLength,
  MaxLength,
  IsDate,
} from 'class-validator';

export class CreateMovieValidation {
  @Transform(({ value }: TransformFnParams) => value.toString())
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  @MaxLength(100, { message: 'Title cannot be longer than 100 characters' })
  title: string;

  @IsNotEmpty({ message: 'Duration is required' })
  @IsNumber({}, { message: 'Duration must be a number' })
  duration: number;

  @IsNotEmpty({ message: 'Synopsis is required' })
  @IsString({ message: 'Synopsis must be a string' })
  @MinLength(10, { message: 'Synopsis must be at least 10 characters' })
  synopsis: string;

  @IsNotEmpty({ message: 'Director is required' })
  @IsString({ message: 'Director must be a string' })
  director: string;
}
