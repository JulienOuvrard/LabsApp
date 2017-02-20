import { Component } from '@angular/core';

import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Workshop } from '../../components/workshop';

import { CommentModal } from './page5Modal';

import { GradeModal } from './page5Modal2';

@Component({
    selector: 'page-page5',
    templateUrl: 'page5.html'
})
export class Page5 {
    selectedWorkshop: Workshop;
    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
        this.selectedWorkshop = navParams.get('item');
        console.log(this.selectedWorkshop);
    }

    commentWorkshop() {
        let modal = this.modalCtrl.create(CommentModal, { some: this.selectedWorkshop });
        modal.onDidDismiss(comment => {
            if(Object.keys(comment).length === 0 && comment.constructor === Object) {
                console.log('ANNULE');
            } else {
                console.log('Ajout du commentaire',comment);
                this.selectedWorkshop.addComment(comment)
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
            }
        });
        modal.present();
    }

    participateWorkshop(){
        console.log()
        this.navCtrl.pop();
    }
}
