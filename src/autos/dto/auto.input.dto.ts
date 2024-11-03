import { ApiProperty } from '@nestjs/swagger';
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
  Año: number;
  @IsOptional({ message: 'el color es requerido' })
  @ApiProperty({ required: false, description: 'por seguridad seria bueno que introduzcas un color' })
  Color?: string;

  @IsNotEmpty({ message: 'Estado es requerido' })
  @ApiProperty()
  Estado?: string;
}
