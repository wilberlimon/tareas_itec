import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum SexoEnum {
  masculino = 'M',
  femenino = 'F',
}

export type ClienteDocument = HydratedDocument<Cliente>;
@Schema()
export class Cliente {
  @Prop()
  nombre1: string;

  @Prop()
  nombre2: string;

  @Prop()
  apellidoPaterno: string;

  @Prop()
  apellidoMaterno: string;

  @Prop()
  fechaNacimiento: Date;

  @Prop()
  sexo: SexoEnum;

  @Prop()
  cedulaIdentidad: string;

  @Prop()
  direccion: string;

  @Prop()
  telefono: string;

  @Prop({ unique: true })
  email: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
