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
  Año: number;

  @Prop()
  Color?: string;

  @Prop()
  Estado?: string;

  @Prop()
  Placa?: string;
}

export const AutosSchema = SchemaFactory.createForClass(AutosModel);
