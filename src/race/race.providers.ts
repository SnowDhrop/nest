import { Connection } from 'mongoose';
import { RaceSchema } from './schemas/race.schema';

export const raceProviders = [
  {
    provide: 'RACE_MODEL',
    useFactory: (connection: Connection) => connection.model('Race', RaceSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];