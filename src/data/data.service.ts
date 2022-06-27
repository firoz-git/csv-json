import { Injectable } from '@nestjs/common';
import csvToJson from 'convert-csv-to-json';
import { readFileSync } from 'fs';
import { readFile } from 'fs/promises';
import * as csv2json from 'csv2json';
import * as converter from 'json-2-csv';

@Injectable()
export class DataService {
  async convertData(file): Promise<any> {
    // console.log(data);
    const csvFile = readFileSync(`files/${file.filename}`);
    const csvData = csvFile.toString();
    console.log(csvData, csvData.length);
    const json = csvToJson.getJsonFromCsv('myInputFile.csv');
    for (let i = 0; i < json.length; i++) {
      console.log(json[i]);
    }
  }
  async checkData(data: string) {
    const result = await converter.csv2jsonAsync(data);
    console.log(result);
  }
}
