import { Rooms } from '../components/rooms';

 export interface IWorkshop {
    id:Number;
    nom:String,
    theme:String,
    date:Date,
    description:String,
    prerequis:String,
    salle:Rooms,
    places:Number
}