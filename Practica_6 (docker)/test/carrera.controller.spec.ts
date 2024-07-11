import { Test, TestingModule } from '@nestjs/testing';
import { CarreraControler } from 'src/carreras/controller/carrera.controler';
import { CarreraService } from 'src/carreras/servicies/carrera.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from 'src/carreras/entities/carrera.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
describe('CarreraController', () => {
    let controller: CarreraControler;
    let service: CarreraService;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports: [TypeOrmModule.forFeature([Carrera])],
        controllers: [CarreraControler],
        providers: [
          CarreraService,
          {
            provide: getRepositoryToken(Carrera),
            useClass: Repository,
          },
        ],
      }).compile();
  
      controller = module.get<CarreraControler>(CarreraControler);
      service = module.get<CarreraService>(CarreraService);
    });
  
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  
    // Add more tests for each method in CarreraController
  });