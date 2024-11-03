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
}
