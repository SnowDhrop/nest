import { IsInt, IsString, Length, Max, Min } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @Length(1, 10)
  readonly name: string;

  @IsInt()
  @Min(1)
  @Max(30)
  readonly age: number;

  @IsString()
  @Length(1,20)
  readonly breed: string;
}
