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

  async actualizarAutos(_id: string) {
    const autoEncontrado = await this.autosCollection.findOne({ _id });
    if (autoEncontrado) {
      autoEncontrado.Marca = autoEncontrado.Marca + ' (Se actualizo por Nissan)';
      console.log('auto actualizado correctamente');
      return this.autosCollection.updateOne({ _id }, autoEncontrado);
    } else {
      throw new Error('Auto no encontrado');
    }
  }

  eliminarAutos(id) {
    return this.autosCollection
      .deleteOne({ _id: id })
      .then((result) => {
        if (result.deletedCount === 0) {
          throw new Error('Auto no encontrado');
        }
        return result;
      })
      .catch((error) => {
        throw new Error(`Error eliminando auto: ${error.message}`);
      });
  }
}
