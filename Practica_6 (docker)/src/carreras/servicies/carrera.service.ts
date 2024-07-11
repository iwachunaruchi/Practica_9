import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Carrera } from "../entities/carrera.entity";
import { CreateCarreraDto } from "../dto/create-carrera.dto";

@Injectable()
export class CarreraService{
    constructor(
        @InjectRepository(Carrera)
        private readonly carreraRepository: Repository<Carrera>,
    ){}
    create(createCarreraDto: CreateCarreraDto): Promise<Carrera>{
        const carrera = this.carreraRepository.create(createCarreraDto);
        return this.carreraRepository.save(carrera);
    }
    findAll(): Promise<Carrera[]>{
        return this.carreraRepository.find();
    }
    findOne(id: any): Promise<Carrera>{
        return this.carreraRepository.findOne(id);
    }
    async remove(id: string): Promise<void> {
        await this.carreraRepository.delete(id);
    }
    
}