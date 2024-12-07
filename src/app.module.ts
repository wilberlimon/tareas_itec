import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AutosModule } from './autos/autos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesModule } from './clientes/clientes.module';
import { VentasModule } from './ventas/ventas.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AutosModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/autosdb'),
    ClientesModule,
    VentasModule, // Asegúrate de que el módulo de Ventas esté importado
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
