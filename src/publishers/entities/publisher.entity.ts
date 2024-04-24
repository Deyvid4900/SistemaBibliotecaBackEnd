import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Editoras {
    
    @PrimaryGeneratedColumn('increment')
    codEditora: number;
    
    @Column()
    cnpj: string;
    
    @Column()
    nomeEditora: string;
}
