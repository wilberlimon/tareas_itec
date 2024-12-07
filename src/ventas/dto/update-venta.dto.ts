import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDate, IsMongoId } from 'class-validator';

export class UpdateVentaDto {
  @ApiProperty({ description: 'Fecha de la venta', required: false })
  @IsDate()
  @IsOptional()
  FechaVenta?: Date;

  @ApiProperty({ description: 'ID del cliente', required: false })
  @IsMongoId()
  @IsOptional()
  Cliente?: string;

  @ApiProperty({ description: 'ID del auto', required: false })
  @IsMongoId()
  @IsOptional()
  Auto?: string;

  @ApiProperty({ description: 'Costo de la venta', required: false })
  @IsString()
  @IsOptional()
  Costo?: string;

  @ApiProperty({ description: 'Tiempo de entrega estimado', required: false })
  @IsString()
  @IsOptional()
  TiempoDeEntrega?: string;

  @ApiProperty({ description: 'Garantía de la venta', required: false })
  @IsString()
  @IsOptional()
  Garantia?: string;
}
