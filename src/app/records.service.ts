import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Adam Tylor" , "2eE" , "asadi"]
  info2: string[] = ["mehrshad" , "2esdE" , "milni"]
  info3: string[] = ["arya" , "2x2eE" , "tehrany"]


  getInfo1(): string[]{
    return this.info1
  }
  getInfo2(): string[]{
    return this.info2
  }
  getInfo3(): string[]{
    return this.info3
  }

  constructor() { }
}
