import { Injectable } from '@nestjs/common';
import csvToJson from 'convert-csv-to-json';
import { readFileSync } from 'fs';
import { readFile } from 'fs/promises';
import * as csv2json from 'csv2json';
import * as converter from 'json-2-csv';
import csv from 'csvtojson';

@Injectable()
export class DataService {
  async convertData(file): Promise<any> {
    const csvFile = readFileSync(`files/${file.filename}`);
    const csvData = csvFile.toString().split('\n');
    const header = csvData[0].split(',');
    console.log(header[0], csvData.length);
    for (let i = 1; i <= csvData.length; i++) {
      const str = csvData[i];
      console.log(str);
    }

    // console.log(csvData[0].split(','));
    // const result = [];
    // const headers = csvData[0].split(', ');
    // for (let i = 1; i < csvData.length - 1; i++) {
    //   let obj = {};
    // }
    // console.log(headers);

    // const csvPath = `file/${file.filename}`;
    // csv()
    //   .fromFile(csvPath)
    //   .then((jsonObj) => {
    //     console.log(jsonObj);
    //   });
    // const jsonArray = await csv().fromFile(csvPath);
    // console.log(jsonArray);

    // const lines = csvData.split('/n');
    // const keys = lines[0].split(',');
    // console.log(keys);

    // const json = csvToJson.getJsonFromCsv('myInputFile.csv');
    // for (let i = 0; i < json.length; i++) {
    //   console.log(json[i]);
    // }
  }
  async checkData(data: string) {
    const result = await converter.csv2jsonAsync(data);
    console.log(result);
  }
}
