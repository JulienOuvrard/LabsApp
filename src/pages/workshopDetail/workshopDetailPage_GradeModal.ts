import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
    selector: 'workshopDetail-GradeModal',
    templateUrl: 'workshopDetailPage_GradeModal.html'
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