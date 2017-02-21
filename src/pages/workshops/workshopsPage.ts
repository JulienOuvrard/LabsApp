import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../services/authService';

import { Workshop } from '../../components/workshop';

import { User } from '../../components/user';

import { CreateWorkshopPage } from '../createWorkshop/createWorkshopPage';

import { WorkshopDetailPage } from '../workshopDetail/workshopDetailPage';

import { WorkshopService } from '../../services/workshopService';

@Component({
  selector: 'page-workshops',
  templateUrl: 'workshopsPage.html'
})
export class WorkshopsPage {
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
    this.navCtrl.push(WorkshopDetailPage, {item:item, user:this.user});
  }

  create(event){
    console.log('Create new workshop');
    this.navCtrl.push(CreateWorkshopPage, {user:this.user, workshops: this.workshops});
  }
}
