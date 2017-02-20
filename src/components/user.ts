import {Workshop} from './workshop';
import {Comment} from './comment';
import {Participation} from './participation';
import {Rooms} from './rooms';

export class User implements IUser{
    nom:String;
    prenom:String;
    mail:String;
    password:String;


    constructor(nom:String,prenom:String,mail:String,password:String){
        this.nom = nom;
        this.prenom = prenom
        this.mail = mail;
        this.password = password;
    }

    getCredentials(){
        return {"email":this.mail,"password":this.password};
    }

    commenter(atelier:Workshop,titre:String,contenu:String){
        var comment = new Comment(titre,contenu);
        atelier.addComment(comment)
    }

    organiser(id:Number, nom:String, theme:String, date:Date, description:String, prerequis:String, salle:Rooms, places:Number){
        return new Workshop(id, nom, theme, date, description, prerequis, salle, places);
    }

    noter(atelier:Workshop,note:Number){
        var presence = atelier.present(this);
        var participation = new Participation(note,presence);
        atelier.addParticipation(participation);
    }

    participer(atelier:Workshop){
        atelier.removePlace(this);
    }

    desinscrire(atelier:Workshop){
        atelier.addPlace(this);
    }
}