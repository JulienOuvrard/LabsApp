import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
    selector: 'page5-modal',
    templateUrl: 'page5Modal.html'
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