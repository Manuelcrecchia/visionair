
// LISTA FUNZIONALITA 

const funzioniList = [
    {
        id: "pov",
        iconClass: "fa-solid fa-camera",
        title: "Registrazione POV",
        text: "Cattura video e foto dal tuo punto di vista con una fotocamera integrata da 12MP."
    },
    {
        id: "audio",
        iconClass: "fa-solid fa-headphones",
        title: "Audio Open-Ear",
        text: "Ascolta musica, podcast e chiamate con altoparlanti direzionali che mantengono la tua privacy."
    },
    {
        id: "ai",
        iconClass: "fa-solid fa-robot",
        title: "AI Assistant",
        text: "Il tuo assistente personale sempre con te. Risposte istantanee a comandi vocali."
    },
    {
        id: "ar",
        iconClass: "fa-solid fa-glasses",
        title: "Mini-Display AR",
        text: "Notifiche, navigazione e informazioni contestuali proiettate direttamente nel tuo campo visivo."
    }
];

// CREAZIONE CARD FUNZIONALITA

function creaFunzioni() {

    let funzioni = document.querySelector("#funzioni");

    let row = document.createElement("div");
    row.className = "row g-4";
    funzioni.append(row);

    for (let obj of funzioniList) {

        let col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-3";
        row.append(col);

        let card = document.createElement("div");
        card.className = "p-4 rounded-4 bg-dark h-100 text-center";
        col.append(card);

        let icona = document.createElement("i");
        icona.className = obj.iconClass + " mb-3";
        icona.style.fontSize = "45px";
        icona.style.color = "#00d2ff";
        card.append(icona);

        let titolo = document.createElement("p");
        titolo.className = "fw-bold fs-4 mb-2";
        titolo.textContent = obj.title;
        card.append(titolo);

        let testo = document.createElement("p");
        testo.className = "text-white-50";
        testo.textContent = obj.text;
        card.append(testo);
    }
}

// LISTA MODELLI 

const modelliList = [
    {
        id: "classic",
        title: "VisionAir Velocity XR",
        imageSrc: "img/occhiale-1.jpg", 
        features: ["fa-camera", "fa-headphones", "fa-bolt"],
        btnText: "Info"
    },
    {
        id: "sport",
        title: "VisionAir Smart Glasses",
        imageSrc: "img/occhiale-2.jpg", 
        features: ["fa-camera", "fa-headphones", "fa-bolt"],
        btnText: "Info"
    },
    {
        id: "aviator",
        title: " VisionAir Woman Elegance",
        imageSrc: "img/occhiale-4.jpg", 
        features: ["fa-camera", "fa-headphones", "fa-bolt"],
        btnText: "Info"
    }
];

// CREAZIONE CARD MODELLI


function creaModelli() {

    let modelli = document.querySelector("#modelli");

    let row = document.createElement("div");
    row.className = "row g-4";
    modelli.append(row);

    for (let model of modelliList) {

        let col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-4";
        row.append(col);

        let card = document.createElement("div");
        card.className = "p-4 rounded-4 bg-dark h-100";
        col.append(card);

        // IMMAGINE 
        let img = document.createElement("img");
        img.src = model.imageSrc;
        img.alt = model.imageText;
        img.className = "img-fluid rounded mb-3";
        img.style.height = "230px";
        img.style.objectFit = "cover";
        img.style.width = "100%";
        card.append(img);

        // TITOLO MODELLO
        let titolo = document.createElement("p");
        titolo.className = "fw-bold fs-4 mt-2";
        titolo.textContent = model.title;
        card.append(titolo);

        // FEATURE ICONS
        let feats = document.createElement("div");
        feats.className = "d-flex gap-3 mb-4";
        card.append(feats);

        for (let ft of model.features) {

            let featBox = document.createElement("div");
            featBox.className = "d-flex align-items-center gap-2 text-white-50";

            let icona = document.createElement("i");
            icona.className = "fa-solid " + ft;

            let label = document.createElement("span");
            if (ft.includes("camera")) label.textContent = "Camera";
            if (ft.includes("headphones")) label.textContent = "Audio";
            if (ft.includes("bolt")) label.textContent = "AI";

            featBox.append(icona, label);
            feats.append(featBox);
        }

        // BOTTONE
        let button = document.createElement("button");
        button.className = "btn btn-primary w-100 fw-bold mt-auto";
        button.textContent = model.btnText;
        card.append(button);
    }
}



// NEWSLETTER

let boxNewsletter = document.querySelector("#newsletterBox");
let userEmail = document.querySelector("#newsletterEmail");
let btnNewsletter = document.querySelector("#newsletterBtn");

btnNewsletter.addEventListener("click", validaEmail);
userEmail.addEventListener("input", validaEmail);

function validaEmail() {

    // Rimuove messaggi precedenti
    let spanMsg = boxNewsletter.querySelectorAll("span.msg-email");
    for (let elem of spanMsg) elem.remove();

    let tagSpan = document.createElement("span");
    tagSpan.classList.add("msg-email");

    let value = userEmail.value.trim();

    // Regex email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let Valido = emailRegex.test(value);

    // CONTROLLI
    if (value == "") {
        tagSpan.className = "invalid-feedback d-block msg-email";
        tagSpan.textContent = "L'email è obbligatoria";
        userEmail.classList.add("is-invalid");
        userEmail.classList.remove("is-valid");
    }
    else if (!Valido) {
        tagSpan.className = "invalid-feedback d-block msg-email";
        tagSpan.textContent = "Inserisci un'email valida";
        userEmail.classList.add("is-invalid");
        userEmail.classList.remove("is-valid");
    }
    else {
        tagSpan.className = "valid-feedback d-block msg-email";
        tagSpan.textContent = "Email valida!";
        userEmail.classList.add("is-valid");
        userEmail.classList.remove("is-invalid");
    }


    boxNewsletter.append(tagSpan);
}




// AVVIO FUNZIONI
window.addEventListener("DOMContentLoaded", creaModelli);
window.addEventListener("DOMContentLoaded", creaFunzioni);
