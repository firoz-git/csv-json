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
import { csvToJson } from 'convert-csv-to-json';
import { FileInterceptor } from '@nestjs/platform-express';
import { CsvToJsonDto } from './csv.dto';
import { diskStorage } from 'multer';
import csv from 'csvtojson';

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
    // const csvPath = `files/${file.filename}`;

    // console.log(result);
    // res.send(result);
  }
  @Post('/check')
  async checkData(@Req() { csv }: CsvToJsonDto) {
    console.log(csv);

    // return await this.dataService.checkData(csv);
  }
  // @Post('/simple')
  // async simpleTest(): Promise<any> {
  //   const csvPath = `files/${files}`;
  //   const jsonArray = await csv().fromFile();
  // }
}
