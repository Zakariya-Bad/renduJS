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
// -ajouter dans le JS  la div hero-container, la div "card-avantages", la div "card-produits"
//  la div "card-services" et la div "card-temoignages" avec getelementbyID
// -dans la div logo créer un p et ajouter le logo "nomCommercial"
// -dans la div hero-container créer un h2 et ajouter "phraseAccroche" et un button avec "texteAppelAction"
// -dans la div "card-avantages" créer une card avec foreach qui contient un h3 avec  "avantagesClients"
// -dans  la div "card-produits"créer une card avec foreach qui contient une img "image-url" , un h2 "nom" et un p "description"
// -dans  la div "card-services"créer une card avec foreach qui contient un h2 "nom" et un p "description"
// -dans la div "card-temoignages"créer une card avec foreach qui contient un p  "prenom", un p "typeExperience", un p "commentaire" et un p "note"


const apiURL= "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json"
fetch(apiURL)
  .then(response => response.json())
  .then(data => { ;
    const herocontainer= document.getElementById("hero-container");
    const avantagescontainer= document.getElementById("card-avantages");
    const produitscontainer= document.getElementById("card-produits");
    const servicescontainer= document.getElementById("card-services");
    const temoignagescontainer= document.getElementById("card-temoignages");

    const accroche= document.createElement("h2");
    accroche.textContent= data.phraseAccroche;
    const button= document.createElement("button");
    button.textContent= data.texteAppelAction;
    herocontainer.appendChild(accroche);
    herocontainer.appendChild(button);

    data.avantagesClients.forEach(avantage => {
  const cardavantages = document.createElement("h3");
  cardavantages.textContent = avantage;
  avantagescontainer.appendChild(cardavantages);
});
    data.produits.forEach(produit => {
        const imgproduits= document.createElement("img")
        imgproduits.src= produit["image-url"];
        const nom= document.createElement("h2");
        nom.textContent= produit.nom;
        const description= document.createElement("p");
        description.textContent= produit.description;
        produitscontainer.appendChild(imgproduits);
        produitscontainer.appendChild(nom);
        produitscontainer.appendChild(description)
        imgproduits.classList.add("img-size");
    });
data.services.forEach(service => {
        const servicenom= document.createElement("h2");
        servicenom.textContent= service.nom;
        const servicedescription= document.createElement("p");
        servicedescription.textContent= service.description;
        servicescontainer.appendChild(servicenom);
        servicescontainer.appendChild(servicedescription)
    });
data.temoignages.forEach(temoignage=> {
        const prenom= document.createElement("p");
        prenom.textContent= temoignage.prenom;
        const type= document.createElement("p");
        type.textContent= temoignage.typeExperience;
        const commentaire= document.createElement("p");
        commentaire.textContent= temoignage.commentaire;
        const note= document.createElement("p");
        note.textContent= temoignage.note;
        temoignagescontainer.appendChild(prenom);
        temoignagescontainer.appendChild(type);
        temoignagescontainer.appendChild(commentaire);
        temoignagescontainer.appendChild(note);
    });

  });
