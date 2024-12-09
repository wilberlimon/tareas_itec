import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type VentasDocument = HydratedDocument<Ventas>;
@Schema()
export class Ventas {
  @Prop()
  FechaVenta: Date;

  @Prop({ type: Types.ObjectId, ref: 'Cliente', required: true })
  Cliente: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'AutosModel', required: true })
  Autos: Types.ObjectId;

  @Prop()
  Costo: string;

  @Prop()
  TiempoDeEntrega: string;

  @Prop()
  Garantia: string;
}

export const VentasSchema = SchemaFactory.createForClass(Ventas);
