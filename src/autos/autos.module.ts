import { Module } from '@nestjs/common';
import { AutosService } from './autos.service';
import { AutosController } from './autos.controller';

@Module({
  providers: [AutosService],
  controllers: [AutosController]
})
export class AutosModule {}
