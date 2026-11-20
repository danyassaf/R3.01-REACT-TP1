import {injectElements, renewTag} from "./functions/dom.js";

const wrapper = document.querySelector('#controle')

function start() {

    const etapes = [
        { title: "Commence à faire le café", duree: 1000 },
        { title: "Mouds les grains de café", duree: 2000 },
        { title: "Fait chauffer l'eau", duree: 3000 },
        { title: "Infuse les grains de café moulus", duree: 2500 },
        { title: "Verse le café dans une tasse", duree: 1500 },
        { title: "Ajoute un peu de lait dans la tasse", duree: 1000 },
        { title: "Le café est terminé.", duree: 500 }
    ];
    const laListe = renewTag('ul');
    wrapper.append(laListe)

    injectElements(etapes, laListe)

}

document.querySelector('#start').addEventListener('click', start)


