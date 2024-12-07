import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Ventas } from './venta.model';

@Injectable()
export class VentasService {
  constructor(@InjectModel(Ventas.name) private ventasModel: Model<Ventas>) {}

  // Crear una nueva venta
  async create(createVentaDto: CreateVentaDto) {
    const newVenta = new this.ventasModel(createVentaDto);
    return await newVenta.save();
  }

  // Obtener todas las ventas
  async findAll() {
    return await this.ventasModel
      .find()
      .populate('Cliente', 'id nombre1 nombre2 apellidoPaterno apellidoMaterno cedulaIdentidad')
      .populate('Auto', 'id Marca Color Modelo Anio')
      .exec();
  }

  // Obtener una venta por ID
  async findOne(id: string) {
    return await this.ventasModel
      .findById(id)
      .populate('Cliente', 'id nombre1 nombre2 apellidoPaterno apellidoMaterno cedulaIdentidad')
      .populate('Auto', 'id Marca Color Modelo Anio')
      .exec();
  }

  // Actualizar una venta por ID
  async update(id: string, updateVentaDto: UpdateVentaDto) {
    return await this.ventasModel.findByIdAndUpdate(id, updateVentaDto, {
      new: true, // Devuelve el objeto actualizado
    });
  }

  // Eliminar una venta por ID
  async remove(id: string) {
    return await this.ventasModel.findByIdAndDelete(id);
  }
}
