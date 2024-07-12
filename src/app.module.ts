import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarreraModule } from './carreras/module/carrera.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://diego:<diego>@practica9.gns9qvl.mongodb.net/practica9?retryWrites=true&w=majority',
      useUnifiedTopology: true,
      synchronize: true,
      autoLoadEntities: true,
    }),
    CarreraModule,
  ],
})
export class AppModule {}
