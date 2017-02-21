import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
    selector: 'workshopDetail-CommentModal',
    templateUrl: 'workshopDetailPage_CommentModal.html'
})
export class CommentModal {

    title:String;
    content:String;

    constructor(public viewCtrl: ViewController) {
        this.title = "";
        this.content = ""
    }

    dismiss() {
        this.viewCtrl.dismiss({});
    }

    validate() {
        let comment = { 'titre': this.title, 'contenu': this.content };
        this.viewCtrl.dismiss(comment);
    }

}