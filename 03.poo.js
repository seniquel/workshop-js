var l = console.log;

//Fonction constructeur
function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = () => "Nom = " + this.nom + ", Prenom = " + this.prenom + ", Pseudo = " + this.pseudo;
}
var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");

function afficherPersonne(personne) {
    l(personne.nom);
    l(personne.prenom);
    l(personne.pseudo);
    l(personne.getNomComplet());
}
afficherPersonne(jules);
afficherPersonne(paul);

//Modifier un objet
jules.pseudo = "jules44";
l(jules.getNomComplet());

//Ajouter une propriété à Personne
l(jules.age);
Personne.prototype.age = "NON RENSEIGNE";
l(jules.age);
jules.age = 30;
l(jules.age);

//Ajouter une méthode à Personne
Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0);
}
l(jules.getInitiales());

//Objet sans fonction constructeur
var robert = {
    prenom: "Robert", nom: "LEPREFET", pseudo: "robert77",
    getNomComplet: function () {
        return "Nom = " + this.nom + ", Prenom = " + this.prenom + ", Pseudo = " + this.pseudo;
    }
}
afficherPersonne(robert);

//Héritage via une fonction constructeur
function Client(nom, prenom, pseudo, numero) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numero;
    this.getInfos = () => "Numero = " + this.numeroClient + ", Nom = " + this.nom + ", Prenom = " + this.prenom;
}
var steve = new Client("LUCAS", "Steve", "Steve44", "A01");
afficherPersonne(steve);
l("Numero client = ",steve.numeroClient);
l(steve.getInfos());