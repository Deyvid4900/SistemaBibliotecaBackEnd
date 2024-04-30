import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('pessoas')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
   
  @Get("/count")
  count() {
    return this.usersService.count();
  }

  @Get(':codPessoa')
  findOne(@Param('codPessoa') codPessoa: string) {
    return this.usersService.findOne(+codPessoa);
  }
  @Get('/nome/:nome')
  findOneByName(@Param('nome') nome: string) {
    return this.usersService.findOneByName(nome);
  }

  @Patch(':codPessoa')
  update(@Param('codPessoa') codPessoa: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+codPessoa, updateUserDto);
  }

  @Delete(':codPessoa')
  remove(@Param('codPessoa') codPessoa: string) {
    return this.usersService.remove(+codPessoa);
  }
}
