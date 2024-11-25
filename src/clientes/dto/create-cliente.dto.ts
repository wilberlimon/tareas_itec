import { ApiProperty } from '@nestjs/swagger';
import { SexoEnum } from '../clientes.model';
import { IsString, IsOptional, IsEnum, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty({ description: 'Primer nombre del cliente', required: true })
  @IsString()
  @IsNotEmpty({ message: 'El primer nombre es obligatorio' })
  nombre1: string;

  @ApiProperty({ description: 'Segundo nombre del cliente', required: false })
  @IsString()
  @IsOptional()
  nombre2?: string;

  @ApiProperty({ description: 'Apellido paterno del cliente', required: false })
  @IsString()
  @IsOptional()
  apellidoPaterno?: string;

  @ApiProperty({ description: 'Apellido materno del cliente', required: false })
  @IsString()
  @IsOptional()
  apellidoMaterno?: string;

  @ApiProperty({ description: 'Fecha de nacimiento del cliente', required: true })
  fechaNacimiento: Date;

  @ApiProperty({ description: 'Sexo del cliente', enum: SexoEnum, required: true })
  @IsEnum(SexoEnum, { message: 'El sexo debe ser masculino o femenino' })
  @IsNotEmpty({ message: 'El sexo es obligatorio' })
  sexo: SexoEnum;

  @ApiProperty({ description: 'Cédula de identidad del cliente', required: true })
  @IsString()
  @IsNotEmpty({ message: 'La cédula de identidad es obligatoria' })
  cedulaIdentidad: string;

  @ApiProperty({ description: 'Dirección del cliente', required: true })
  @IsString()
  @IsNotEmpty({ message: 'La dirección es obligatoria' })
  direccion: string;

  @ApiProperty({ description: 'Teléfono del cliente', required: false })
  @IsString()
  @IsOptional() // El campo sigue siendo opcional
  telefono?: string; // Se asegura que el tipo sea string para insertarlo correctamente

  @ApiProperty({ description: 'Correo electrónico del cliente', required: true })
  @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
  email: string;
}
