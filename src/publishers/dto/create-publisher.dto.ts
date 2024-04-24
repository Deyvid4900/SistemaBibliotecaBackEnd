import { ApiProperty } from '@nestjs/swagger';

export class CreatePublisherDto {
    @ApiProperty()
    codEditora:number;

    @ApiProperty()
    cnpj:string;

    @ApiProperty()
    nomeEditora:string;


}
