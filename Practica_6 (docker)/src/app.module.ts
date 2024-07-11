import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarreraModule } from "./carreras/module/carrera.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'mongodb',
          url: 'mongodb://localhost:27017/nest',
          useUnifiedTopology: true,
          synchronize: true,
          autoLoadEntities: true,
        }),
        CarreraModule,
      ],
})
export class AppModule {}
