import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { catsProviders } from './cats.providers';
import { DatabaseModule } from '../database/database.module';
import { RaceModule } from 'src/race/race.module';
import { NameModule } from 'src/name/name.module';

@Module({
  imports: [DatabaseModule, RaceModule, NameModule],
  controllers: [CatsController],
  providers: [
    CatsService,
    ...catsProviders,
  ],
})
export class CatsModule {}
