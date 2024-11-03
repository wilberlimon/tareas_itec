import { Module } from '@nestjs/common';
import { AutosService } from './autos.service';
import { AutosController } from './autos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AutosModel, AutosSchema } from './autos.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: AutosModel.name, schema: AutosSchema }])],
  providers: [AutosService],
  controllers: [AutosController],
})
export class AutosModule {}
