import { Rooms } from './rooms'
import { IWorkshop } from '../interfaces/IWorkshop'

export class Workshop implements IWorkshop {
    id: Number;
    nom: String;
    theme: String;
    date: Date;
    description: String;
    prerequis: String;
    salle: Rooms;
    places: Number;

    dateString: String;
    comments: IComment[];
    participations: IParticipation[];
    users: IUser[];
    remainsPlaces: number;

    constructor(id: Number, nom: String, theme: String, date: Date, description: String, prerequis: String, salle: Rooms, places: Number) {
        this.id = id;
        this.nom = nom;
        this.theme = theme;
        this.date = new Date(date);
        this.description = description;
        this.prerequis = prerequis;
        this.salle = salle;
        this.places = places;
        this.remainsPlaces = places.valueOf();
        this.users = [];
        this.comments = [];
        this.participations = [];
        this.dateString = this.transformDate(date);
    }

    transformDate(date:Date) {
        date = new Date(date);
        var d =('0' + date.getDate()).slice(-2);
        var m = ('0' + (date.getMonth()+1)).slice(-2);
        var y = date.getFullYear();
        return [d, m, y].join('/');
    }

    addComment(comment: IComment) {
        this.comments.push(comment);
    }

    addParticipation(participation: IParticipation) {
        this.participations.push(participation);
    }

    addPlace(user: IUser) {
        if (this.remainsPlaces < this.places) {
            this.remainsPlaces++;
            if (this.present(user)) {
                delete this.users[this.users.indexOf(user)];
            }
        }
    }

    removePlace(user: IUser) {
        if (this.remainsPlaces >= this.places) {
            this.remainsPlaces--;
            this.users.push(user);
        }
    }

    present(user: IUser) {
        return this.users.indexOf(user) !== -1;
    }
}