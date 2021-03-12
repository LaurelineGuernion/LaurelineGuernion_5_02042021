//////// RÉCUPÉRATION ID DE L'URL
const recuperationId = window.location.search;

//////// AFFICHAGE ID SEUL SANS ?id=
const leId = recuperationId.slice(4);

//////// AFFICHAGE PRODUIT DANS LA PAGE
let monProduit = document.getElementById("monproduit");

let idArticle = document.getElementById("id_article");
let imgProduit = document.getElementById("imgproduit");
let nameArticle = document.getElementById("name_article");
let descriptionArticle = document.getElementById("description_article");
let priceArticle = document.getElementById("price_article");

const recupDonneesArticle = async () => {
await fetch(`http://localhost:3000/api/cameras/${leId}`)

  .then((response) => {
    const idData = response.json();
    idData.then((arrayId) => {
      imgProduit.src = arrayId.imageUrl;
      idArticle.innerHTML = "Réf : " + leId;
      nameArticle.innerHTML = arrayId.name;
      descriptionArticle.innerHTML = arrayId.description;
      priceArticle.innerHTML = arrayId.price + " €";
    })
  })
  .catch((error) => console.log(error));
};

recupDonneesArticle();