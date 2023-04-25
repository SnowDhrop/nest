import { ApiProperty } from '@nestjs/swagger';

export class Name {
    @ApiProperty({ example: 1, description: 'Name of the Cat' })
    name: string
  }