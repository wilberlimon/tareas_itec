import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { Ventas, VentasSchema } from './venta.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ventas.name, schema: VentasSchema }]), // Registrar el esquema de Ventas
  ],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
