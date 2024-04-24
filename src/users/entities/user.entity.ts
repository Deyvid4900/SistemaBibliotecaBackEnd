import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pessoas {
    @PrimaryGeneratedColumn('increment')
    codPessoa:number;

    @Column()
    nome:string;

    @Column()
    sobrenome:string;

    @Column()
    CPF:number;

    @Column()
    email:string;

    
}