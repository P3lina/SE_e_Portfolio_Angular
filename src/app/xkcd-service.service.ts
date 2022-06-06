import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class XkcdServiceService {

  constructor(private http: HttpClient) { }

  image: any

  getXkcdCartoon() {
    return this.http.get('/info.0.json').pipe(map((res:any) =>{return res.img}))
  }

}
