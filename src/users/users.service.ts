import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Pessoas } from './entities/user.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Pessoas)
    private userRepository: Repository<Pessoas>,
  ){}

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }
  count() {
    return this.userRepository.count();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ codPessoa:id});
  }

  findOneByName(nome: string) {
    return this.userRepository.findBy({nome:nome});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id,updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete({ codPessoa:id});
  }
}
