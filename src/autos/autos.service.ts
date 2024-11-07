import { Injectable } from '@nestjs/common';
import { AutosDatosEntrada, AutosDatosEntradaActualizar } from './dto/auto.input.dto';
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
      Placa: datosEntrada.Placa,
    });
    const resultado = datosParaGuardar.save();
    return resultado;
  }

  listarAutos() {
    const listarAutos = this.autosCollection.find();
    return listarAutos;
  }

  async actualizarAutos(id: string, datosEntradaaupdate: AutosDatosEntradaActualizar) {
    const autoEncontrado = await this.autosCollection.findById(id);

    if (autoEncontrado) {
      console.log(datosEntradaaupdate);

      // Actualizamos el documento directamente en la colección
      const autoActualizado = await this.autosCollection
        .findOneAndUpdate(
          { _id: id }, // El criterio de búsqueda
          {
            // Los campos a actualizar
            Marca: datosEntradaaupdate.Marca,
            Modelo: datosEntradaaupdate.Modelo,
            Año: datosEntradaaupdate.Año,
            Color: datosEntradaaupdate.Color,
            Estado: datosEntradaaupdate.Estado,
            Placa: datosEntradaaupdate.Placa,
          },
          { new: true }, // Esto hace que se devuelva el documento actualizado
        )
        .exec();

      console.log('auto actualizado correctamente');
      return autoActualizado;
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
