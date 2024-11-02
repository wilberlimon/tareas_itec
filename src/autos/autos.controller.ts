import { Controller, Get, Post } from '@nestjs/common';

@Controller('autos')
export class AutosController {
  constructor() {}

  @Get()
  listar() {
    return [];
  }

  @Post()
  Crear() {
    return [];
  }
}
