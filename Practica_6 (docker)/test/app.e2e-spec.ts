// test/carrera.e2e-spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('CarreraController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/carrera (POST)', async () => {
    const newCarrera = {
      name: 'Maratón de la Ciudad',
      C_kilometers: 42.195,
      adiccional_details: 'Prueba de maratón en la ciudad',
      fecha: '2024-07-01',
      hora: '08:00',
    };

    const response = await request(app.getHttpServer())
      .post('/carrera')
      .send(newCarrera)
      .expect(201);

    // Verifica que la respuesta contenga los datos esperados
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toEqual(newCarrera.name);
    expect(response.body.C_kilometers).toEqual(newCarrera.C_kilometers);
    expect(response.body.adiccional_details).toEqual(newCarrera.adiccional_details);
    expect(response.body.fecha).toEqual(newCarrera.fecha);
    expect(response.body.hora).toEqual(newCarrera.hora);
  });
});
