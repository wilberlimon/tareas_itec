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
      Anio: datosEntrada.Anio,
      Color: datosEntrada.Color,
      Tipo: datosEntrada.Tipo,
      Chasis: datosEntrada.Chasis,
      Vin: datosEntrada.Vin,
      OtrasCaracteristicas: datosEntrada.OtrasCaracteristicas,
    });
    const resultado = datosParaGuardar.save();
    return resultado;
  }

  listarAutos() {
    const listarAutos = this.autosCollection.find();
    return listarAutos;
  }

  async detalleAutos(id: string) {
    return await this.autosCollection.findById(id);
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
            Anio: datosEntradaaupdate.Anio,
            Color: datosEntradaaupdate.Color,
            Tipo: datosEntradaaupdate.Tipo,
            Chasis: datosEntradaaupdate.Chasis,
            Vin: datosEntradaaupdate.Vin,
            OtrasCaracteristicas: datosEntradaaupdate.OtrasCaracteristicas,
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
