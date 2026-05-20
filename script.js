fetch("escape-game.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        // a ce niveau on devrait avoir dans la console les infos renvoyé par l’API

        console.log(data)
        afficheActivite(data.activites)
        afficheavantage(data.avantagesClients)
        affichetemoignage(data.temoignages)
        afficheHerotitre(data.nomCommercial)
        affichephraseaccroche(data.phraseAccroche)
        afficheherobtn(data.texteAppelAction)


    })





    //role afficher les cartes acrtivité dans la div activite container
// parametre tableau des activités
//return rien elle affiche


function afficheActivite(tableauActivite) {

    tableauActivite.forEach(Activite => {


        document.querySelector("#activitecontainer").innerHTML += `
            
             <div class="card">

                    <img src="${Activite.imageurl}" alt="" class="w100">

                    <div class="padding16">
                        <h2 class="padbottom20 bolder">${Activite.nom}</h2>
                        <p class="padbottom20">${Activite.description}
                        </p>
                        <button" class="btn ">Réserver</button>
                    </div>
                </div>
            
            `

    });

    // faire la même fonction pour chaque section 

}






//role afficher les avantage clients dans la div avantagescontainer
// parametre tableau avantages clients
//return rien elle affiche

function afficheavantage(tableauavantage) {
    tableauavantage.forEach(avantage => {

        document.querySelector("#avantagecontainer").innerHTML += `
            
            <p class="padbottom10 margbottom30 center">${avantage}</p>

            `

    });
}







//temoignage

//role afficher les temoignage client dans la div temoignagecontainer
// parametre tableau temoignage client
//return rien elle affiche

function affichetemoignage(tableautemoignage) {


    tableautemoignage.forEach(temoignage => {

        document.querySelector("#temoignagecontainer").innerHTML += `
    
     <div class="card flex aligncenter colunm">
                    <p class="padbottom20">${temoignage.prenom}</p>
                    <p class="padbottom20">${temoignage.typeExperience}</p>
                    <p class="padbottom20">${temoignage.commentaire}</p>
                    <p class="margbottom30">${etoiles(temoignage.note)}</p>
                </div>
             
    `

    });


}









//role repeter les etoile 
// parametre : nombre, le nombre d'etoiles a afficher
//return : les etoies (chaine de caractere)
//const repliq= <i class="ph ph-star"></i>

function etoiles(nombre) {
    return "★".repeat(nombre) + "☆".repeat(5 - nombre)
}









//hero
//role afficher le hero dans la div hero
// parametre : le nom de l'entreprise
//return rien elle affiche

function afficheHerotitre(nom) {

    document.querySelector("#hero").innerHTML += `
     <h1 class="padbottom20 bolder colorclair">${nom}</h1>
              
    `
}









//hero
//role afficher le hero dans la div hero
// parametre : la phrase d'accroche
//return rien elle affiche

function affichephraseaccroche(phrase) {

    document.querySelector("#hero").innerHTML += `
     <p class="padbottom20 bolder colorclair">${phrase}</p>
              
    `

}









//hero
//role afficher le bouton dans la div hero
// parametre : le bouton 
//return rien elle affiche


function afficheherobtn(bouton) {

    document.querySelector("#hero").innerHTML += `

<button class="btn margbottom30 btnsurvol">${bouton}</button>

`
}







//footer survol 
let survolcontact= document.getElementById("contact")

survolcontact.addEventListener("mouseover",

    function event (event){

        event.target.style.color = "orange";

        setTimeout(function()  {
            event.target.style.color="black"
        }, 300);
    },false,
)











//header ( survol )

let survolhead= document.getElementById("header")

survolhead.addEventListener("mouseover",

    function event (event){

        event.target.style.color = "orange";

        setTimeout(function()  {
            event.target.style.color="black"
        }, 300);
    },false,
)






