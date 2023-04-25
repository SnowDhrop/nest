import { ApiProperty } from '@nestjs/swagger';

export class Race {
    @ApiProperty({ example: 1, description: 'Race of the Cat' })
    race: string
  }