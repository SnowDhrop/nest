import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RaceModule } from './race/race.module';
import { NameModule } from './name/name.module';

@Module({
  imports: [CatsModule, UsersModule, AuthModule, RaceModule, NameModule],
})
export class AppModule {}
