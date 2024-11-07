import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AutosDatosEntrada, AutosDatosEntradaActualizar } from './dto/auto.input.dto';
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

  @Patch(':id')
  actualizar(@Param('id') id: string, @Body() datosPaActualizar: AutosDatosEntradaActualizar) {
    const respuesta = this.serviceAut.actualizarAutos(id, datosPaActualizar);
    return respuesta;
  }

  @Delete(':identificador')
  eliminar(@Param('identificador') id: string) {
    const respuesta = this.serviceAut.eliminarAutos(id);
    return respuesta;
  }
}
