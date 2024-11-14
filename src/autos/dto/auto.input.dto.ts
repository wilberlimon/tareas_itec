import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class AutosDatosEntrada {
  @IsNotEmpty({ message: 'Marca es requerido' })
  @ApiProperty()
  Marca: string;

  @IsNotEmpty({ message: 'Modelo es requerido' })
  @ApiProperty()
  Modelo: string;

  @IsNotEmpty({ message: 'Año es requerido' })
  @ApiProperty()
  Anio: number;
  @IsOptional({ message: 'el color es requerido' })
  @ApiProperty({ required: false, description: 'por seguridad seria bueno que introduzcas un color' })
  Color: string;

  @IsNotEmpty({ message: 'Tipo es requerido' })
  @ApiProperty()
  Tipo?: string;

  @IsOptional({ message: 'Chasis es Requerido' })
  @ApiProperty({ required: false })
  Chasis: string;

  @IsOptional({ message: 'Vin es Requerido' })
  @ApiProperty({ required: false })
  Vin: string;

  @IsOptional({ message: 'Placa es requerido' })
  @ApiProperty({ required: false })
  OtrasCaracteristicas?: string;
}

export class AutosDatosEntradaActualizar extends PartialType(AutosDatosEntrada) {}
