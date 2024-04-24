import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { Editoras } from 'src/publishers/entities/publisher.entity';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    titulo?: string;
    edicao?: string;
    ano?: number;
    ISBN?: number;
    quantidade?: number;
    codEditora?: Editoras; // Adicionando o campo codEditora
}
