import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({description: "Pseudo of user"})
  pseudo: string;

  @ApiProperty({ example: 1, description: 'Email of user' })
  email: string;

  @ApiProperty({
    description: 'Password of user',
  })
  password: string;
}
