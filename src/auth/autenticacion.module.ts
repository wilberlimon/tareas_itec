import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { PermisosModule } from './permisos/permisos.module';

@Module({
  imports: [UsuariosModule, RolesModule, PermisosModule],
})
export class AutenticacionModule {}
