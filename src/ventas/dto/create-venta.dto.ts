import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateVentaDto {
  @ApiProperty({ description: 'Fecha de la venta' })
  @IsNotEmpty()
  FechaVenta: Date;

  @ApiProperty({ description: 'ID del cliente' })
  @IsMongoId()
  @IsNotEmpty()
  Cliente: string;

  @ApiProperty({ description: 'ID del auto' })
  @IsMongoId()
  @IsNotEmpty()
  Autos: string;

  @ApiProperty({ description: 'Costo de la venta' })
  @IsString()
  @IsNotEmpty()
  Costo: string;

  @ApiProperty({ description: 'Tiempo de entrega estimado' })
  @IsString()
  @IsNotEmpty()
  TiempoDeEntrega: string;

  @ApiProperty({ description: 'Garantía de la venta' })
  @IsString()
  @IsNotEmpty()
  Garantia: string;
}
