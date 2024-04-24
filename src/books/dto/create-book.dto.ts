import { Editoras } from "src/publishers/entities/publisher.entity";

export class CreateBookDto {
  titulo: string;
  edicao: string;
  ano: number;
  ISBN: number;
  quantidade: number;
  
}
