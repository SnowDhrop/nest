import { Connection } from 'mongoose';
import { NameSchema } from './schemas/name.schema';

export const nameProviders = [
  {
    provide: 'NAME_MODEL',
    useFactory: (connection: Connection) => connection.model('Name', NameSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];