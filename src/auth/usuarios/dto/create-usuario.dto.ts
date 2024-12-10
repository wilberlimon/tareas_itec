import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsEmail({}, { message: 'El correo no es valido' })
  @IsString({ message: 'El correo debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El correo es requerido y no puede estar vacio' })
  @ApiProperty()
  email: string;

  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @MaxLength(50, { message: 'La contraseña debe tener como maximo 50 caracteres' })
  @Matches(/(?=.*[A-Z])/, { message: 'La contraseña debe contener al menos una letra mayúscula' })
  @Matches(/(?=.*[!@#$%^&*(),.?":{}|<>])/, { message: 'La contraseña debe contener al menos un carácter especial' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La contraseña es requerida y no puede estar vacia' })
  @ApiProperty()
  password: string;

  @Matches(/(?=.*[A-Z])/, { message: 'La contraseña debe contener al menos una letra mayúscula' })
  @Matches(/(?=.*[!@#$%^&*(),.?":{}|<>])/, { message: 'La contraseña debe contener al menos un carácter especial' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La contraseña es requerida y no puede estar vacia' })
  @ApiProperty()
  passwordConfirm: string;

  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre es requerido y no puede estar vacio' })
  @ApiProperty()
  firstName: string;

  @IsOptional()
  @IsString({ message: 'El apellido debe ser una cadena de texto' })
  @ApiProperty({ required: false })
  lastName: string;
}
