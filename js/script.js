/*
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, la nuova immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva in automatico.
BONUS 3:
Aggiungere bottoni di start / stop e di inversione del meccanismo di autoplay.
*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images);


// bersagliamo lo slider
const sliderElement = document.getElementById("slider");
const thumbnailsElement = document.getElementById("thumbnails");

// tramite il metodo foreach prendo ogni indirizzo delle immagini dall'array
images.forEach(currentEl => {

    // creo un elemento div in cui inserire  i testi
    let currentSlide = document.createElement("div");
    currentSlide.classList.add("slide-item");

    sliderElement.innerHTML += `<img src="./${currentEl.image}" alt="${currentEl.title}" class="slider-image"></img>`;


    // creo un elemento strong per visualizzare il titolo
    let sliderTitle = document.createElement("h4");
    sliderTitle.textContent = currentEl.title;
    currentSlide.appendChild(sliderTitle);

    // creo un elemento p per visualizzare il testo
    let sliderText = document.createElement("p");
    sliderText.textContent = currentEl.text;
    currentSlide.appendChild(sliderText);

    sliderElement.appendChild(currentSlide);

});

document.querySelector("#slider img:nth-of-type(1)").className = "active";

// ripeto lo stesso per le miniature
images.forEach(currentEl => {
    thumbnailsElement.innerHTML += `<img src="./${currentEl.image}" alt="${currentEl.title}" class="thumbnail"></img>`;
});


document.querySelector("#thumbnails img:nth-of-type(1)").className = "active";


// -  salvo un contatore della slide
let slideNumber = 1;

// -  QUANDO premo la freccia SU
document.querySelector("#down-arrow").addEventListener("click", function () {


    if (slideNumber < images.length) {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        document.querySelector(`#thumbnails img:nth-of-type(${slideNumber})`).classList.remove("active");

        // - aumento il contatore di 1
        slideNumber++;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        document.querySelector(`#thumbnails img:nth-of-type(${slideNumber})`).classList.add("active");


        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        document.querySelector(`#thumbnails img:nth-of-type(${slideNumber})`).classList.remove("active");

        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        document.querySelector(`#thumbnails img:nth-of-type(${slideNumber})`).classList.add("active");

    }


});


document.querySelector("#up-arrow").addEventListener("click", function () {

    if (slideNumber > 1) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        document.querySelector(`#thumbnails img:nth-of-type(${slideNumber})`).classList.remove("active");

        // - diminuisco il contatore di 1
        slideNumber--;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        document.querySelector(`#thumbnails img:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        document.querySelector(`#thumbnails img:nth-of-type(${slideNumber})`).classList.remove("active");

        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = images.length;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        document.querySelector(`#thumbnails img:nth-of-type(${slideNumber})`).classList.add("active")

    }



});