let box = document.querySelector("#box");

function creaNav() {

    // NAV
    let nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg navbar-light bg-light fixed-top";
    box.append(nav);

    // CONTAINER
    let container = document.createElement("div");
    container.className = "container-lg";
    nav.append(container);

    // LOGO (LINK)
    let logo = document.createElement("a");
    logo.className = "navbar-brand d-flex align-items-center";
    logo.setAttribute("href", "index.html");

    // IMG DEL LOGO
    let logoImg = document.createElement("img");
    logoImg.setAttribute("src", "img/logo-VisualAir.png");
    logoImg.setAttribute("alt", "Logo VisualAir");
    logoImg.className = "img-fluid";
    logoImg.style.height = "100px"; 

    logo.append(logoImg);
    container.append(logo);

    // TOGGLER
    let btn = document.createElement("button");
    btn.className = "navbar-toggler";
    btn.setAttribute("type", "button");
    btn.setAttribute("data-bs-toggle", "collapse");
    btn.setAttribute("data-bs-target", "#navheader");
    container.append(btn);

    let icon = document.createElement("span");
    icon.className = "navbar-toggler-icon";
    btn.append(icon);

    // COLLAPSE
    let collapseDiv = document.createElement("div");
    collapseDiv.className = "collapse navbar-collapse";
    collapseDiv.setAttribute("id", "navheader");
    container.append(collapseDiv);

    // UL
    let ulTag = document.createElement("ul");
    ulTag.className = "navbar-nav ms-auto mb-2 mb-lg-0";
    collapseDiv.append(ulTag);

    const vociNav = [
        { class: "nav-link", href: "index.html", testo: "Home" },
        { class: "nav-link", href: "modelli.html", testo: "Modelli" },
        { class: "nav-link", href: "materiali.html", testo: "Materiali" },
        { class: "nav-link", href: "caratteristiche.html", testo: "Caratteristiche" },
        { class: "nav-link", href: "chi-siamo.html", testo: "Chi Siamo" }
    ];

    // CREAZIONE NAV ITEMS
    for (let objNav of vociNav) {

        let liTag = document.createElement("li");
        liTag.className = "nav-item";
        ulTag.append(liTag);

        let aTag = document.createElement("a");
        liTag.append(aTag);

        for (let key in objNav) {
            if (key == "testo") {
                aTag.textContent = objNav[key];
            } else {
                aTag.setAttribute(key, objNav[key]);
            }

            let pagina = window.location.pathname.split("/").pop();
            if (pagina == objNav["href"]) {
                aTag.classList.add("active");
            }
        }
    }

    // BOTTONE CONTATTI
    let liBtn = document.createElement("li");
    liBtn.className = "nav-item ms-3";
    ulTag.append(liBtn);

    let btnCont = document.createElement("a");
    btnCont.className = "btn btn-primary";
    btnCont.setAttribute("href", "contatti.html");
    btnCont.textContent = "Contattaci";
    liBtn.append(btnCont);

    // 🔥 EFFETTO SCROLL - NAVBAR CHE SI RIMPICCIOLISCE
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.classList.add("navbar-small");
        } else {
            nav.classList.remove("navbar-small");
        }
    });
}



let footerBox = document.querySelector("#footer");

function creaFooter() {

    // FOOTER BASE
    let footer = document.createElement("footer");
    footer.className = "container-fluid py-5 bg-colour text-white mt-5 border-top";
    footerBox.append(footer);

    // CONTAINER
    let container = document.createElement("div");
    container.className = "container";
    footer.append(container);

    // ROW 
    let row = document.createElement("div");
    row.className = "row justify-content-between align-items-start gy-5";
    container.append(row);

    // COLONNA LOGO + DESCRIZIONE
    let col1 = document.createElement("div");
    col1.className = "col-12 col-md-5 col-lg-4";
    row.append(col1);

    let logoBox = document.createElement("div");
    logoBox.className = "d-flex align-items-center gap-3 mb-3";
    col1.append(logoBox);

    // LOGO 
    let logoImg = document.createElement("img");
    logoImg.src = "img/logo-VisualAir.png"; 
    logoImg.alt = "Logo VisionAir";
    logoImg.style.height = "70px";
    logoImg.style.objectFit = "contain";
    logoBox.append(logoImg);

    let brandName = document.createElement("p");
    brandName.className = "fw-bold fs-5 m-0";
    brandName.textContent = "VisionAir Smart Glasses";
    logoBox.append(brandName);

    let desc = document.createElement("p");
    desc.className = "text-white-50 mt-2";
    desc.textContent = "Tecnologia che migliora il quotidiano.";
    col1.append(desc);


    // COLONNE LINK

    const columns = [
        {
            title: "Prodotto",
            links: [
                { text: "Modelli", href: "modelli.html" },
                { text: "Materiali", href: "materiali.html" },
                { text: "Caratteristiche", href: "caratteristiche.html" }
            ]
        },
        {
            title: "Azienda",
            links: [
                { text: "Chi Siamo", href: "chi-siamo.html" },
                { text: "Contatti", href: "contatti.html" }
            ]
        }
    ];

    for (let col of columns) {
        let colDiv = document.createElement("div");
        colDiv.className = "col-6 col-md-3 col-lg-2";
        row.append(colDiv);

        let title = document.createElement("p");
        title.className = "fw-bold mb-3";
        title.textContent = col.title;
        colDiv.append(title);

        for (let linkObj of col.links) {
            let link = document.createElement("a");
            link.className = "d-block text-white-50 mb-2";
            link.textContent = linkObj.text;
            link.href = linkObj.href;
            colDiv.append(link);
        }
    }

    // COLONNA CONTATTACI A DESTRA
    let colBtn = document.createElement("div");
    colBtn.className = "col-12 col-md-3 text-md-end";
    row.append(colBtn);

    let contattaciBtn = document.createElement("a");
    contattaciBtn.href = "contatti.html";
    contattaciBtn.className = "btn btn-primary btn-lg fw-bold px-4";
    contattaciBtn.textContent = "Contattaci";
    colBtn.append(contattaciBtn);

    // SOCIAL ICONS

    let socialRow = document.createElement("div");
    socialRow.className = "d-flex gap-4 mt-5 fs-4";
    container.append(socialRow);

    const socials = [
        { icon: "fa-instagram", url: "#" },
        { icon: "fa-twitter", url: "#" },
        { icon: "fa-facebook", url: "#" },
        { icon: "fa-youtube", url: "#" },
    ];

    for (let s of socials) {
        let a = document.createElement("a");
        a.href = s.url;
        a.className = "text-white-50";
        a.innerHTML = `<i class="fa-brands ${s.icon}"></i>`;
        socialRow.append(a);
    }

    // COPYRIGHT
    let copy = document.createElement("p");
    copy.className = "text-white-50 mt-4";
    copy.textContent = "© 2025 VisionAir Smart Glasses. Tutti i diritti riservati.";
    container.append(copy);
}

window.addEventListener("DOMContentLoaded", creaFooter);
window.addEventListener("DOMContentLoaded", creaNav);
