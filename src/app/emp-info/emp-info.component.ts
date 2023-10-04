import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService]
})
export class EmpInfoComponent implements OnInit {


  infoRec1: string[] = [];
  infoRec2: string[] = [];
  infoRec3: string[] = [];
  time : string = this.rservices.sayTime().toString();
  hiValue: string = this.rservices.sayHi();

  getInfo1(){
    this.infoRec1 = this.rservices.getInfo1()
  }
  
  SayHi(){
    this.hiValue = this.rservices.sayHi()
  }

  SayTime(){
    this.time = this.rservices.sayTime().toString()
  }
  constructor(private rservices: RecordsService) { }

  ngOnInit(): void {}
}
