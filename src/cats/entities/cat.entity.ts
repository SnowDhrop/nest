import { ApiProperty } from '@nestjs/swagger';

export class Cat {
  name: string;

  @ApiProperty({ example: 1, description: 'Age of the Cat' })
  age: number;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  breed: string;
}
