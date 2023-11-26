import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export class MovieModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  duration: number;

  @Column()
  synopsis: string;

  @Column()
  director: string;
}
