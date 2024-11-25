import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
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

  @Get('buscar')
  buscar(@Query('Modelo') Modelo?: string, @Query('Marca') Marca?: string, @Query('Tipo') Tipo?: string) {
    return this.serviceAut.buscarAuto(Modelo, Marca, Tipo);
  }

  @Get()
  listar() {
    return this.serviceAut.listarAutos();
  }

  @Get(':identificador')
  detalle(@Param('identificador') id: string) {
    return this.serviceAut.detalleAutos(id);
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
