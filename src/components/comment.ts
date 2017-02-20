export class Comment implements IComment{
    titre:String;
    contenu:String;
    date:Date;

    constructor(titre:String, contenu:String){
        this.titre = titre;
        this.contenu = contenu;
        this.date = new Date();
    }
}