import { DataSourceOptions } from 'typeorm';
import { Pessoas } from './users/entities/user.entity';
import { Livros } from './books/entities/book.entity';

export const config: DataSourceOptions = {
  type: 'mysql',
  database: 'biblioteca',
  host:'localhost',
  port:3306,
  username:'root',
  password:'',
  synchronize: false, // Obs: use synchronize: true somente em desenvolvimento.
  entities: [__dirname + '/**/*.entity{.ts,.js}',Pessoas,Livros],
};