import { Test, TestingModule } from '@nestjs/testing';
import { CarreraService } from 'src/carreras/servicies/carrera.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from 'src/carreras/entities/carrera.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('CarreraService', () => {
    let service: CarreraService;
    let repository: Repository<Carrera>;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports: [TypeOrmModule.forFeature([Carrera])],
        providers: [
          CarreraService,
          {
            provide: getRepositoryToken(Carrera),
            useClass: Repository,
          },
        ],
      }).compile();
  
      service = module.get<CarreraService>(CarreraService);
      repository = module.get<Repository<Carrera>>(getRepositoryToken(Carrera));
    });
  
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  
    // Add more tests for each method in CarreraService
  });