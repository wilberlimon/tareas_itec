import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { usuario, UsuarioDocument } from './usuario.model';
import { Model } from 'mongoose';
// import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(usuario.name) private readonly usuariosCollection: Model<UsuarioDocument>) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    if (createUsuarioDto.password !== createUsuarioDto.passwordConfirm) throw new Error('Las contraseñas no coinciden');

    const usuarioACrear = new this.usuariosCollection({
      email: createUsuarioDto.email,
      password: createUsuarioDto.password,
      firstName: createUsuarioDto.firstName,
      lastName: createUsuarioDto.lastName,
      isActive: true,
    });
    return await usuarioACrear.save();
  }

  async findAll() {
    return await this.usuariosCollection.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} usuario`;
  // }

  // update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
  //   return `This action updates a #${id} usuario`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} usuario`;
  // }
}
