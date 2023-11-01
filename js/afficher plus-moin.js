const afficherPlus = document.getElementById('afficher-plus');
const listeProduits = document.querySelector('.liste-produits');

const nouveauxProduits = [
    '<li class="boite-produit">Nouveau produit 1</li>',
    '<li class="boite-produit">Nouveau produit 2</li>',
    '<li class="boite-produit">Nouveau produit 3</li>'
];

// Fonction pour masquer les articles actuels
function masquerArticlesActuels() {
    const articlesActuels = listeProduits.querySelectorAll('.boite-produit');
    articlesActuels.forEach((article) => {
        article.style.display = 'none';
    });
}

// Fonction pour afficher les nouveaux articles
function afficherNouveauxArticles() {
    nouveauxProduits.forEach((nouvelArticle) => {
        listeProduits.insertAdjacentHTML('beforeend', nouvelArticle);
    });
}

afficherPlus.addEventListener('click', () => {
    masquerArticlesActuels();
    afficherNouveauxArticles();
});
