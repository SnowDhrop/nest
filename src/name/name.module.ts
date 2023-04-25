import { Module } from '@nestjs/common';
import { NameService } from './name.service';
import { NameController } from './name.controller';
import { DatabaseModule } from 'src/database/database.module';
import { nameProviders } from './name.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [NameController],
  providers: [
    NameService,
    ...nameProviders,
  ],
  exports: [ ...nameProviders]
})
export class NameModule {}
