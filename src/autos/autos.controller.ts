import { Body, Controller, Get, Post } from '@nestjs/common';
import { AutosDatosEntrada } from './dto/auto.input.dto';
import { AutosService } from './autos.service';

@Controller('autos')
export class AutosController {
  constructor(private readonly serviceAut: AutosService) {}

  @Post('')
  crear(@Body() datosEntrada: AutosDatosEntrada) {
    const respuesta = this.serviceAut.registrarAutos(datosEntrada);
    return respuesta;
  }

  @Get()
  listar() {
    return [];
  }
}
