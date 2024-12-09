import { Controller, Get, Post, Body, Patch, Query, Delete, NotFoundException, Param } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  // Crear un cliente
  @Post('registrar') // Ruta para registrar un cliente
  async create(@Body() createClienteDto: CreateClienteDto) {
    console.log(createClienteDto);
    return await this.clientesService.create(createClienteDto);
  }

  // Obtener todos los clientes
  @Get('Listar')
  async findAll() {
    return await this.clientesService.findAll();
  }

  // Buscar un cliente por su cédula de identidad
  @Get('buscar')
  async findOneByCedula(@Query('cedulaIdentidad') cedulaIdentidad: string) {
    try {
      return await this.clientesService.findOneByCedula(cedulaIdentidad);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // Actualizar un cliente por su ID
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    try {
      return await this.clientesService.update(id, updateClienteDto);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // Eliminar un cliente por su ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.clientesService.remove(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
