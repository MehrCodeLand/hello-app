import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [DataService]
})
export class EmpInfoComponent implements OnInit {


  infoRecived1: string[] = [];
  // infoRecived2: string[] = [];
  // infoRecived3: string[] = [];

  getInfoFormService1(){
    this.infoRecived1 = this.rservices.getInfo1()
  }

  updateInfo(frm:any){
    this.rservices.addInfo(frm.value.location)
  }
  constructor(private rservices: DataService) { }

  ngOnInit(): void {}
}
