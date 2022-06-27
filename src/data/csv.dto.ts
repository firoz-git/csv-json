import { IsNotEmpty, IsString } from 'class-validator';

export class CsvToJsonDto {
  @IsString()
  @IsNotEmpty()
  csv: any;
}
