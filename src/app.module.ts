import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AutosModule } from './autos/autos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot(), AutosModule, MongooseModule.forRoot('mongodb://localhost:27017/autosdb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
