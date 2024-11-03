import { Injectable } from '@nestjs/common';
import { AutosDatosEntrada } from './dto/auto.input.dto';

@Injectable()
export class AutosService {
  registrarAutos(datosEntrada: AutosDatosEntrada) {
    return datosEntrada;
  }

  listarAutos() {
    return [];
  }
}
