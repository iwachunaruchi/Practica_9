import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from "mongodb";

@Entity()
export class Carrera{
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    name: String;

    @Column()
    C_kilometers: number;

    @Column()
    adiccional_details: string;

    @Column()
    fecha: string;
    
    @Column()
    hora: string;


}