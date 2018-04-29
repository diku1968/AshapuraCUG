import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   public myCuglists;
  constructor(public http: HttpClient, public navCtrl: NavController) {
  this.myCuglists = this.http.get("http://182.19.82.186:94/api/mobtrans");
  }
  
}
