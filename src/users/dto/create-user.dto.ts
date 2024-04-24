import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    codPessoa:number;

    @ApiProperty()
    nome:string;

    @ApiProperty()
    sobrenome:string;

    @ApiProperty()
    CPF:number;

    @ApiProperty()
    email:string;
}
