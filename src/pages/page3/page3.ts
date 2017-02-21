import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../page0/authService';

import { Workshop } from '../../components/workshop';

import { User } from '../../components/user';

import { Page4 } from '../page4/page4';

import { Page5 } from '../page5/page5';

import { WorkshopService } from './workshopService';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  user:User;
  workshops: Array<Workshop>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, private works: WorkshopService) {
    this.user = auth.getUserInfo();
    works.findAll().subscribe(data => this.workshops = data.map(function(work){
          return new Workshop(work.id,work.nom,work.theme,work.date,work.description,work.prerequis,work.salle,work.places);
        }));
  }

  itemTapped(event, item) {
    console.log('Voir atelier ', item.id);
    this.navCtrl.push(Page5, {item:item, user:this.user});
  }

  create(event){
    console.log('Create new workshop');
    this.navCtrl.push(Page4, {user:this.user, workshops: this.workshops});
  }
}
