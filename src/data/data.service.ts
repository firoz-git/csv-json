import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class DataService {
  async convertData(file): Promise<any> {
    const csvFile = readFileSync(`files/${file.filename}`);
    const csvData = csvFile.toString().split('\n');
    const header = csvData[0].split(',');
    console.log(header);

    const jsonObj: any[] = [];
    for (let i = 1; i < csvData.length; i++) {
      const str = csvData[i].split(',');
      console.log(str, str.length, 'here iam');

      const obj = {};
      for (let j = 0; j < str.length; j++) {
        obj[header[j].trim()] = str[j].trim();
      }
      jsonObj.push(obj);
    }
    JSON.stringify(jsonObj);
    return await jsonObj;
    console.log(jsonObj, 'iam jsonobj');
  }
}
