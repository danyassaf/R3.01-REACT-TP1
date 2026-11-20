import { injectElements, renewTag, createElement } from "./functions/dom.js";

const wrapper = document.querySelector('#controle')

const btnStart = document.querySelector('#start');

btnStart.innerText = "Calculer";

const labelSaisie = createElement('label', { for: 'saisie' });
labelSaisie.innerText = "Combien de tasses de café ? ";

const saisie = createElement('input', {
    type: 'number',
    id: 'saisie'
});

wrapper.prepend(labelSaisie, saisie);
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

function calculer() {
    const nbTasses = Number(saisie.value);
    const resultats = [
        { title: `Pour ${nbTasses} tasses de café, il faut :`, duree: 200 },
        { title: `${nbTasses * 200} ml d'eau`, duree: 200 },
        { title: `${nbTasses * 50} ml de lait`, duree: 200 },
        { title: `${nbTasses * 15} g de grains de café`, duree: 200 }
    ];

    const laListe = renewTag('ul');
    wrapper.append(laListe);
    injectElements(resultats, laListe);
}

btnStart.addEventListener('click', calculer);

