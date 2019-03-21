import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/service/dataStorage/data-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  lastUpdate:Date
  data:string;
  constructor(private _dataStorage:DataStorageService) {
    this.lastUpdate=new Date();
    _dataStorage.setObjectValue("prueba","prueba");
    this.data = _dataStorage.getObjectValue("prueba");
    console.log(this.data);
   }

  ngOnInit() {
  }

}
