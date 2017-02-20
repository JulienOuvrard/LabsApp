export class Participation implements IParticipation{
    note:Number;
    present:Boolean;

    constructor(note:Number, present:Boolean){
        this.note = note;
        this.present = present;
    }
}