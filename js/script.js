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
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player.',
    }
];


// bersagliamo lo slider
const sliderElement = document.getElementById("slider");
const thumbnailsElement = document.getElementById("thumbnails")


// tramite un ciclo for prendiamo ogni indirizzo delle immagini dall'array
images.forEach(function (currentImage, index) {

    // inserisco l'elemento html dentro lo slider
    sliderElement.innerHTML += `
    <section class="slide">

    <img src="./${currentImage.image}" alt="immagine ${index + 1}">

    <div class="details">

        <h3 class="title">
            ${currentImage.title}
        </h3>

        <div class="text">
            ${currentImage.text}
        </div>

    </div>
    
    </section>
    `;

    // inserisco l'anteprima dentro l'elemento thumbnails
    thumbnailsElement.innerHTML += `
    <img src="./${currentImage.image}" alt="immagine ${index + 1}">`
})

showSlide(1);

// -  salvo un contatore della slide
let slideNumber = 1;

// -  QUANDO premo la freccia GIÙ
document.querySelector("#down-arrow").addEventListener("click", function () {

    if (slideNumber < images.length) {

        // - aumento il contatore di 1
        slideNumber++;

        showSlide(slideNumber);


    } else {

        slideNumber = 1;

        showSlide(slideNumber);
    }

});

document.querySelector("#up-arrow").addEventListener("click", function () {


    if (slideNumber > 1) {

        slideNumber--;

        showSlide(slideNumber);


    } else {

        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = images.length;

        showSlide(slideNumber);
    }

});

// gestisco click delle thumbnail aggiungendo l'addEventListener

// ripesco dal document tutte le thumbnail
const thumbnailsElements = document.querySelectorAll("#thumbnails img");

thumbnailsElements.forEach(((currentThumbnail, index) => {

    currentThumbnail.addEventListener("click", () => {

        slideNumber = index + 1;

        showSlide(slideNumber);

    })

}))


function thumbnailClick(currentThumbnail, index) {

    // !IMPORTANTE! il this nelle arrow function è sempre la window

    // rimuovo la classe active dall'ultimo elemento attivo
    document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("active");

    document.querySelector(`#thumbnails img:nth-of-type(${slideNumber})`).classList.remove("active");

    // aggiornare slidenumber
    slideNumber = index + 1;

    // do alla slide corrispondente la classe active
    document.querySelector(`.slide:nth-of-type(${index + 1})`).classList.add("active");

    document.querySelector(`#thumbnails img:nth-of-type(${index + 1})`).classList.add("active");

}

function showSlide(number) {
    // number -> slide da mostrare e anteprima collegata

    //rimuoviamo la classe active da tutte le slide
    const slides = document.querySelectorAll(".slide");
    slides.forEach(currentSlide => {
        currentSlide.classList.remove("active");

    })

    // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
    document.querySelector(`#slider .slide:nth-of-type(${number})`).classList.add("active");

    // prendo tutte le anteprime e rimuovo la classe active
    const thumbs = document.querySelectorAll("#thumbnails img");
    thumbs.forEach(img => {
        img.classList.remove("active");
    })

    document.querySelector(`#thumbnails img:nth-of-type(${number})`).classList.add("active");
}