import { IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @IsMobilePhone('ko-KR')
  readonly phone_number: string;
}
