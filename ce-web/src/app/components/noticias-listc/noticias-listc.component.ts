import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../clases/noticia/noticia';
import { DataStorageService } from '../../service/dataStorage/data-storage.service'
import notic from '../../../assets/json/noticia.json'

@Component({
  selector: 'app-noticias-listc',
  templateUrl: './noticias-listc.component.html',
  styleUrls: ['./noticias-listc.component.css']
})
export class NoticiasListcComponent implements OnInit {
  //st:string[]=["../../../assets/images/img1.png","../../../assets/images/img2.jpg","../../../assets/images/img3.png","../../../assets/images/img1.png","../../../assets/images/img2.jpg","../../../assets/images/img3.png"]
  public listaNoticias:Noticia[]=notic;
  constructor( 
    private _dataStorageService:DataStorageService) 
    {
      //jo.setObjectValue("noticias","notic");
      
      //listaNoticias=jo.getObjectValue("noticias");
     }

  ngOnInit() {
  }

}
