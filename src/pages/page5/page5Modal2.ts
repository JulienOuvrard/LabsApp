import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
    selector: 'page5-modal2',
    templateUrl: 'page5Modal2.html'
})
export class GradeModal {

    note;

    constructor(public viewCtrl: ViewController) {
        this.note = 0;
    }

    dismiss() {
        this.viewCtrl.dismiss({});
    }

    validate(){
        let data = {'note': this.note };
        this.viewCtrl.dismiss(data);
    }

}