import { Component, OnInit } from '@angular/core';
import {XkcdServiceService} from "../xkcd-service.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-xkcd-cartoon',
  templateUrl: './xkcd-cartoon.component.html',
  styleUrls: ['./xkcd-cartoon.component.sass']
})
export class XkcdCartoonComponent implements OnInit {
  srcUrl: Observable<any> | undefined;

  constructor(private service: XkcdServiceService) { }

  async ngOnInit() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.srcUrl = this.service.getXkcdCartoon()
  }

  showImage() {
    //this.service.getXkcdCartoon().subscribe(res=>{this.srcUrl = res})
  }
}
