import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente, ClienteDocument } from './clientes.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ClientesService {
  constructor(@InjectModel(Cliente.name) private readonly clientesCollection: Model<ClienteDocument>) {}

  // Crear un cliente
  async create(CreateClienteDto: CreateClienteDto) {
    console.log(CreateClienteDto);

    const clienteACrear = new this.clientesCollection({
      nombre1: CreateClienteDto.nombre1,
      nombre2: CreateClienteDto.nombre2,
      apellidoPaterno: CreateClienteDto.apellidoPaterno,
      apellidoMaterno: CreateClienteDto.apellidoMaterno,
      fechaNacimiento: CreateClienteDto.fechaNacimiento,
      sexo: CreateClienteDto.sexo,
      cedulaIdentidad: CreateClienteDto.cedulaIdentidad,
      direccion: CreateClienteDto.direccion,
      telefono: CreateClienteDto.telefono,
      email: CreateClienteDto.email,
    });

    return await clienteACrear.save();
  }

  // Listar todos los clientes
  async findAll() {
    return await this.clientesCollection.find();
  }

  // Buscar un cliente por su cédula de identidad
  async findOneByCedula(cedulaIdentidad: string) {
    const cliente = await this.clientesCollection.findOne({ cedulaIdentidad });
    if (!cliente) {
      throw new NotFoundException(`Cliente con cédula de identidad ${cedulaIdentidad} no encontrado`);
    }
    return cliente;
  }

  // Actualizar un cliente
  async update(id: string, updateClienteDto: UpdateClienteDto) {
    const clienteExistente = await this.clientesCollection.findById(id);
    if (!clienteExistente) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }

    // Actualizar el cliente
    const clienteActualizado = await this.clientesCollection.findByIdAndUpdate(id, updateClienteDto, {
      new: true, // Devuelve el cliente actualizado
      runValidators: true, // Aplica validadores del modelo
    });
    return clienteActualizado;
  }

  // Eliminar un cliente
  async remove(id: string) {
    const clienteExistente = await this.clientesCollection.findById(id);
    if (!clienteExistente) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }

    // Eliminar el cliente
    await this.clientesCollection.findByIdAndDelete(id);
    return { message: `Cliente con ID ${id} eliminado exitosamente` };
  }
}
