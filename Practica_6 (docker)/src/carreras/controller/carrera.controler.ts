import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { CarreraService } from "../servicies/carrera.service";
import { CreateCarreraDto } from "../dto/create-carrera.dto";

@Controller('carrera')
export class CarreraControler{
    constructor(private readonly carreraService: CarreraService){}

    @Post()
    create(@Body() createCarreraDto: CreateCarreraDto){
        return this.carreraService.create(createCarreraDto);
    }

    @Get()
    findAll(){
        return this.carreraService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.carreraService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.carreraService.remove(id);
    }
}