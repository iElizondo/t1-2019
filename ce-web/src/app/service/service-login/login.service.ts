import { Injectable } from '@angular/core';
import { DataStorageService } from '../dataStorage/data-storage.service'
import { from } from 'rxjs';
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  dataStorageService: DataStorageService = new DataStorageService();
  llave:boolean=false;
  usuario:any;
  constructor() {}

  logearUsuario(usuario, contrasena){
    this.dataStorageService.setObjectValue("usuario",usuario);
  }
  logeado():boolean{
    this.usuario = this.dataStorageService.getObjectValue("usuario");
    if (this.usuario){
      this.llave = true;
    }else{
      this.llave = false;
    }
    return this.llave
  }

  borraUsuario(){
    this.dataStorageService.setObjectValue("usuario",null);
  }
}
