import {
  Body,
  Controller,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { DataService } from './data.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CsvToJsonDto } from './csv.dto';
import { diskStorage } from 'multer';

@Controller('data')
export class DataController {
  constructor(private dataService: DataService) {}

  @Post('/convert')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({ destination: './files' }),
    }),
  )
  async convertData(@Req() req, @Query() query: any, @UploadedFile() file) {
    console.log(file);
    return await this.dataService.convertData(file);
  }
}
