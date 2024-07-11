import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Carrera } from "../entities/carrera.entity";
import { CarreraControler } from "../controller/carrera.controler";
import { CarreraService } from "../servicies/carrera.service";

@Module({
    imports: [TypeOrmModule.forFeature([Carrera])],
    controllers: [CarreraControler],
    providers: [CarreraService],
})
export class CarreraModule {}
