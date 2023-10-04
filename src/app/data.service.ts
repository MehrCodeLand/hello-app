import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  info1: string[] = ['mehrshad' , 'i12312ds' , 'asadi']

  getInfo1():string[]{
    return this.info1
  }

  addInfo(info: any){
    this.info1.push(info);

    return this.info1 ;
  }
  constructor() { }
}
