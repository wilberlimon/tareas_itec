import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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
    return this.serviceAut.listarAutos();
  }

  @Patch('')
  actualizar(@Param('id') id: string) {
    const respuesta = this.serviceAut.actualizarAutos(id);
    return respuesta;
  }

  @Delete('')
  eliminar(@Param('id') id: string) {
    const respuesta = this.serviceAut.eliminarAutos(id);
    return respuesta;
  }
}
