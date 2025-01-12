import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryColumn()
    id: number;

    @Column() 
    firstName: string;

    @Column()
    lastName: string;

    @Column({default:true})
    isActive:boolean;
}