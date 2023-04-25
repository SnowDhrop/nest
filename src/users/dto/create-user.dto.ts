import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(1,10)
  readonly pseudo: string;

  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @Length(1, 10)
  readonly password: string;
}
