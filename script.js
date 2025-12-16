// Etape 1: HTML
// -faire le header et mettre une nav avec le logo ("nomCommercial") les sections ( acceuil,avantages...) et un bouton appeler le tout dans une div
// -dans le main ajouter une section hero qui va contenir les infos "phraseAccroche", "texteAppelAction"( bouton)
// -ajouter une section avantages qui va contenir des cards en js avec les infos "avantagesClients" (h2,p)
// -ajouter une section produits qui va contenir des cards en js avec les infos "produits" ( image ,h2,p)
// -ajouter une section services qui va contenir des cards en js avec les infos "services" (h2,p)
// -ajouter une section témoignages qui va contenir des cards en js avec les infos  "temoignages" (h2,3p)
// -faire le footer 

// Etape 2: JavaScript
// -faire un fetch
// -ajouter dans le JS la div logo, la div hero-container, la div "card-avantages", la div "card-produits"
//  la div "card-services" et la div "card-temoignages" avec getelementbyID

// -dans la div logo créer un p et ajouter le logo "nomCommercial"

// -dans la div hero-container créer un h2 et ajouter "phraseAccroche" et un button avec "texteAppelAction"

// -dans la div "card-avantages" créer une card avec foreach qui contient un h3 avec  "avantagesClients"
// -dans  la div "card-produits"créer une card avec foreach qui contient une img "image-url" , un h2 "nom" et un p "description"
// -dans  la div "card-services"créer une card avec foreach qui contient un h2 "nom" et un p "description"
// -dans la div "card-temoignages"créer une card qui contient un p  "prenom", un p "typeExperience", un p "commentaire" et un p "note"
// -ajouter ces éléments à la page


const apiURL= "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json"
fetch(apiURL)
  .then(response => response.json())
  .then(data => { 
    const logocontainer= document.getElementById("logo");
    const herocontainer= document.getElementById("hero-container");
    const avantagescontainer= document.getElementById("card-avantages");
    const produitscontainer= document.getElementById("card-produits");
    const servicescontainer= document.getElementById("card-services");
    const temoignagescontainer= document.getElementById("card-temoignages");

    const logo = document.createElement("p");
      logo.textContent = data.nomCommercial ;
      logocontainer.appendChild(logo);

    const accroche= document.createElement("h2");
    accroche.textContent= data.phraseAccroche;
    const button= document.createElement("button");
    button.textContent= data.texteAppelAction;
    herocontainer.appendChild(accroche);
    herocontainer.appendChild(button);

    const cardavantages= document.createElement("h3");
    cardavantages.textContent= data.avantagesClients;
    avantagescontainer.appendChild(cardavantages);

// //     // const imgproduits= document.createElement ("img")
// //     // imgproduits.src= data.produits.image_url;
//     const titleproduits= document.createElement ("h2");
//     titleproduits.textContent= data.produits;
// //     const description= document.createElement("p");
// //     description.textContent= data.produits.description;
// //     // produitscontainer.appendChild(imgproduits);
//     produitscontainer.appendChild(titleproduits);
// //     produitscontainer.appendChild(description);
  });
