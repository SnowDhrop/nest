import * as dotenv from "dotenv"
import * as mongoose from 'mongoose';

dotenv.config()

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://' + process.env.DBUSER + ':' + process.env.DBPASS + '@cluster0.yhmekun.mongodb.net/?retryWrites=true&w=majority'),
  },
];
