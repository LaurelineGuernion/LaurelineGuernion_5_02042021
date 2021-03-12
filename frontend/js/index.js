//////// AJOUT DES ARTICLES SUR LA PAGE D'ACCUEIL

let mesProduits = document.getElementById("mesproduits");

const ajoutArticles = async() => {
  let tousLesArticles = await Promise.all([getCamera()]);
  
  tousLesArticles.forEach((articles) =>  {
    articles.forEach((article) => {
      let colonneArticle = document.createElement("div");
      colonneArticle.className = "col-lg-4 d-flex align-items-stretch";
      mesProduits.appendChild(colonneArticle);

      let unArticle = document.createElement("div");
      unArticle.className = "card mb-5 px-2";
      colonneArticle.appendChild(unArticle);

      let imgArticle = document.createElement("img");
      imgArticle.className = "card-img-top mt-3";
      imgArticle.alt = "Card image article";
      imgArticle.src = article.imageUrl;
      unArticle.appendChild(imgArticle);

      let cardBody = document.createElement("div");
      cardBody.className = "card-body";
      unArticle.appendChild(cardBody);

      let titreH3 = document.createElement("h3");
      titreH3.className = "card-title h4 text-center";
      titreH3.innerHTML = article.name;
      cardBody.appendChild(titreH3);

      let titrePriceH4 = document.createElement("h4");
      titrePriceH4.className = "card-title h5 text-center";
      titrePriceH4.innerHTML = article.price + " €";
      cardBody.appendChild(titrePriceH4);

      let articleDescription = document.createElement("p");
      articleDescription.className = "card-text text-justify";
      articleDescription.innerHTML = article.description;
      cardBody.appendChild(articleDescription);

      let articleBtn = document.createElement("a");
      articleBtn.className = "btn btn-primary mb-2";
      articleBtn.innerHTML = "Voir le produit";
      unArticle.appendChild(articleBtn);

      //////// CLIQUER SUR LE PRODUIT ET AFFICHAGE DU PRODUIT SUR " PAGE PRODUIT "
      articleBtn.addEventListener("click", function(event) {
        const urlParametre = window.location;
        const articleId = article._id;
        let pageProduit = location.href = "html/produit.html" + "?id=" + article._id;
      })

    })
  })
};
  // Lancer la fonction
  ajoutArticles();