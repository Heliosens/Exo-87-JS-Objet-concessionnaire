let voiture = {
    Nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    Couleur : "Marron",
    Constructeur : "Citroen",
    Carburant : "Solaire",
    nombrePortes : 3,
    Autonomie : "450km",
    vitesseMaxi : "120km/h"
};

let title = document.createElement('h1');
title.innerHTML = voiture.Nom;

let frame = document.createElement("img");
frame.src = voiture.imgUrl;

document.body.style.textAlign ='center';
document.body.style.fontSize = '2rem';
document.body.appendChild(title);
document.body.appendChild(frame);

line(voiture.nombresRoues, "Nombre de roues : ");
line(voiture.Couleur, "Couleur : ");
line(voiture.Constructeur, "Constructeur : ");
line(voiture.Carburant, "Carburant : ");
line(voiture.nombrePortes, "Nombre de porte : ");
line(voiture.Autonomie, "Autonomie : ");
line(voiture.vitesseMaxi, "Vitesse max : ");

function line (item, text){
    let p = document.createElement('p');
    p.innerHTML = text + item;
    document.body.appendChild(p);
}
