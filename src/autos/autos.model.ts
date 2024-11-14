import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AutosDocument = HydratedDocument<AutosModel>;

@Schema()
export class AutosModel {
  @Prop() //es para aue guarde en la base de datos
  Marca: string;

  @Prop()
  Modelo: string;

  @Prop()
  Anio: number;

  @Prop()
  Color?: string;

  @Prop()
  Tipo?: string;

  @Prop()
  Chasis: string;

  @Prop()
  Vin: string;

  @Prop()
  OtrasCaracteristicas?: string;

  @Prop()
  FechaIngreso: Date;
}

export const AutosSchema = SchemaFactory.createForClass(AutosModel);
