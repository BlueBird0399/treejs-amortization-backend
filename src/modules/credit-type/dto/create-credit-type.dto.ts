import { UppercaseTransform } from "@commons";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateCreditTypeDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @UppercaseTransform()
  name: string;

  @ApiProperty()
  @IsPositive()
  interestRate: number;

  @ApiProperty()
  @IsPositive()
  maxTime: number;

  @ApiProperty()
  @IsPositive()
  minTime: number;
}
