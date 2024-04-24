import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Livros } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Livros])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
