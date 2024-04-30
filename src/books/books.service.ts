import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Livros } from './entities/book.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Livros)
    private bookRepository: Repository<Livros>,
  ){}

  create(createBookDto: CreateBookDto) {
    return this.bookRepository.save([createBookDto]);

  }

  findAll() {
    return this.bookRepository.find();
  }
  count() {
    return this.bookRepository.count();
  }

  findOne(codLivro: number) {
    return this.bookRepository.findOneBy({ codLivro:codLivro});
  }

  update(codLivro: number, updateBookDto: UpdateBookDto) {
    return this.bookRepository.update(codLivro,updateBookDto);
  }

  remove(codLivro: number) {
    return this.bookRepository.delete({ codLivro:codLivro});
  }
}
