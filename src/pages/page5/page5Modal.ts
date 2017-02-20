import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { Comment } from '../../components/comment'

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
        //let data = { 'titre': this.title, 'contenu': this.content };
        let comment = new Comment(this.title, this.content)
        this.viewCtrl.dismiss(comment);
    }

}