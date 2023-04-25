import { Module } from '@nestjs/common';
import { RaceService } from './race.service';
import { RaceController } from './race.controller';
import { raceProviders } from './race.providers';
import { DatabaseModule } from 'src/database/database.module';


@Module({
  imports: [DatabaseModule],
  controllers: [RaceController],
  providers: [
    RaceService,
    ...raceProviders,
  ],
  exports: [ ...raceProviders]
})
export class RaceModule {}
