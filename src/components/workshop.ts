import { Rooms } from './rooms'
import { IWorkshop } from '../interfaces/IWorkshop'

export class Workshop implements IWorkshop{
    id:Number;
    nom:String;
    theme:String;
    date:Date;
    description:String;  
    prerequis:String;
    salle:Rooms;
    places:Number;

    comments:IComment[];
    participations:IParticipation[];
    users:IUser[];
    remainsPlaces: number;

    constructor(id:Number, nom:String, theme:String, date:Date, description:String, prerequis:String, salle:Rooms, places:Number){
        this.id = id;
        this.nom = nom;
        this.theme = theme;
        this.date = date;
        this.description = description;
        this.prerequis = prerequis;
        this.salle = salle;
        this.places = places;
        this.remainsPlaces = places.valueOf();
        this.users = [];
    }

    addComment(comment:IComment){
        this.comments.push(comment);
    }

    addParticipation(participation:IParticipation){
        this.participations.push(participation);
    }

    addPlace(user:IUser){
        if(this.remainsPlaces < this.places){
            this.remainsPlaces++;
            if(this.present(user)){
                delete this.users[this.users.indexOf(user)];
            }
        }
    }

    removePlace(user:IUser){
        if(this.remainsPlaces >= this.places){
            this.remainsPlaces--;
            this.users.push(user);
        }
    }

    present(user:IUser){
        return this.users.indexOf(user) !== -1;
    }
}