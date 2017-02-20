import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AuthService } from '../page0/authService';
import {Page0} from '../page0/page0';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  user:IUser;

  constructor(public navCtrl: NavController,private auth: AuthService) {
    this.user =  this.auth.getUserInfo();
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
        this.navCtrl.setRoot(Page0)
    });
  }
}
