import { Component } from '@angular/core';

import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Workshop } from '../../components/workshop';

import { User } from '../../components/user';

import { CommentModal } from './page5Modal';

import { GradeModal } from './page5Modal2';

@Component({
    selector: 'page-page5',
    templateUrl: 'page5.html'
})
export class Page5 {
    selectedWorkshop: Workshop;
    user: User;
    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
        this.selectedWorkshop = navParams.get('item');
        this.user = navParams.get('user');
        console.log(this.selectedWorkshop);
    }

    commentWorkshop() {
        let modal = this.modalCtrl.create(CommentModal, { some: this.selectedWorkshop });
        modal.onDidDismiss(comment => {
            if(Object.keys(comment).length === 0 && comment.constructor === Object) {
                console.log('ANNULE');
            } else {
                console.log('Ajout du commentaire',comment);
                this.user.commenter(this.selectedWorkshop,comment.titre,comment.contenu);
            }
        });
        modal.present();
    }

    gradeWorkshop() {
        let modal = this.modalCtrl.create(GradeModal, { some: this.selectedWorkshop });
        modal.onDidDismiss(data => {
            if(Object.keys(data).length === 0 && data.constructor === Object) {
                console.log('ANNULE');
            } else {
                console.log('Ajout de la note', data);
                this.user.noter(this.selectedWorkshop,data.note)
            }
        });
        modal.present();
    }

    participateWorkshop(){
        console.log("PARTICIPATE");
        this.user.participer(this.selectedWorkshop);
        this.navCtrl.pop();
    }
}
