import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Rooms } from '../../components/rooms';

import { User } from '../../components/user';

import { Workshop } from '../../components/workshop';

@Component({
  selector: 'page-createWorkshop',
  templateUrl: 'createWorkshopPage.html'
})
export class CreateWorkshopPage {

    user:User;
    id: Number;
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

    workshops:Workshop[];
    

    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.workshops = navParams.get('workshops');
      this.user = navParams.get('user');
      this.id = this.workshops.length +1;
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
        var salle = this.roomDisplay[this.selectedRoom.valueOf()]['value'];
        this.workshops.push(this.user.organiser(this.id,this.name,this.theme,this.date,this.description,this.prerequis,salle,this.places));
        this.navCtrl.pop();
    }
}