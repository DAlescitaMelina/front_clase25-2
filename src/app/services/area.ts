import { Injectable } from '@angular/core';
import { environments } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
const base_url= environments.base;
@Injectable({
  providedIn: 'root'
})
export class Area {
  //accede a todas las rutas de area
  private url=`${base_url}/areas`;

  constructor(private http:HttpClient) { }
    //llamar a listar 
    list(){
      return this.http.get<Area[]>(this.url)
    }
  }

