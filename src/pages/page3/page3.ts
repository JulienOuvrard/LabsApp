import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Workshop } from '../../components/workshop';

import { Page4 } from '../page4/page4';

import { Page5 } from '../page5/page5';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  selectedItem: any;
  icons: string[];
  workshops: Array<Workshop>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.workshops = [];
    var worksReq = new XMLHttpRequest();
    worksReq.open('GET','../../data/workshops.json',false);
    worksReq.send(null);
      if(worksReq.status == 200){
        this.workshops = JSON.parse(worksReq.responseText).map(function(work){
          return new Workshop(work.id,work.nom,work.theme,work.date,work.description,work.prerequis,work.salle,work.places);
        });
      }

  }

  itemTapped(event, item) {
    console.log('Voir atelier ', item.id);
    this.navCtrl.push(Page5, {item:item});
  }

  create(event){
    console.log('Create new workshop')
    this.navCtrl.push(Page4);
  }
}
