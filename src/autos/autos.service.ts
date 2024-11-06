import { Injectable } from '@nestjs/common';
import { AutosDatosEntrada } from './dto/auto.input.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AutosModel } from './autos.model';
import { Model } from 'mongoose';

@Injectable()
export class AutosService {
  constructor(@InjectModel(AutosModel.name) private readonly autosCollection: Model<AutosModel>) {}
  registrarAutos(datosEntrada: AutosDatosEntrada) {
    const datosParaGuardar = new this.autosCollection({
      Marca: datosEntrada.Marca,
      Modelo: datosEntrada.Modelo,
      Año: datosEntrada.Año,
      Color: datosEntrada.Color,
      Estado: datosEntrada.Estado,
    });
    const resultado = datosParaGuardar.save();
    return resultado;
  }

  listarAutos() {
    const listarAutos = this.autosCollection.find();
    return listarAutos;
  }

  async actualizarAutos(id: string) {
    console.log(id);
    const autoencontrado = await this.autosCollection.findById(id);
    if (autoencontrado) {
      return this.autosCollection.updateOne({ _id: id }, autoencontrado).exec();
    } else {
      throw new Error('Auto no encontrado');
    }
  }

  eliminarAutos(id: string) {
    const autoencontrado = this.autosCollection.findById(id);
    if (autoencontrado) {
      return this.autosCollection.deleteOne({ id }).exec();
    } else {
      throw new Error('Auto no encontrado');
    }
  }
}
