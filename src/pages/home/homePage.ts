import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AuthService } from '../../services/authService';

import {LoginPage} from '../login/loginPage';

@Component({
  selector: 'page-home',
  templateUrl: 'homePage.html'
})
export class HomePage {

  user:IUser;

  constructor(public navCtrl: NavController,private auth: AuthService) {
    this.user =  this.auth.getUserInfo();
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
        this.navCtrl.setRoot(LoginPage)
    });
  }
  
}
