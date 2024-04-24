import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Livros {
  @PrimaryGeneratedColumn('increment')
  codLivro: number;
  
  @Column()
  titulo: string;

  @Column()
  edicao: string;

  @Column()
  ano: number;

  @Column()
  ISBN: number;

  @Column()
  quantidade: number;
}
