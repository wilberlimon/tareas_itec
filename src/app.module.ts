import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AutosModule } from './autos/autos.module';

@Module({
  imports: [ConfigModule.forRoot(), AutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
