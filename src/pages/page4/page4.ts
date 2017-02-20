import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Rooms } from '../../components/rooms';

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class Page4 {

    name:String;
    theme:String;
    places:Number;
    date:Date;
    dateDisplay:String;
    description:String;
    prerequis:String;
    room: String;
    roomDisplay:Object[];
    selectedRoom: Number;
    

    constructor(public navCtrl: NavController) {
      this.name = "";
      this.theme = "";
      this.places = 0;
      this.date = new Date();
      this.dateDisplay =  this.date.toISOString();
      this.description = "";
      this.prerequis = "";
      this.selectedRoom = 0;
      this.roomDisplay = [
        {
          value:'ALABAMA',
          key:Rooms.ALABAMA
        },
        {
          value:'SAN FRANCISCO',
          key:Rooms.SAN_FRANCISCO
        },
        {
          value:'CALIFORNIA',
          key:Rooms.CALIFORNIA
        }
      ];
    }

    createWorkshop(){
        console.log(this)
    }
}