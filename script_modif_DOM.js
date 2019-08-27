function changeTitles(){
	title = document.querySelector('h1.jumbotron-heading');
	title.textContent = "Ce que j'ai appris à THP";

	sous_titre = document.querySelector(".container > .lead");
	sous_titre.textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}

function changeCallToActions(){
	callButton = document.querySelector(".container>p>a:nth-of-type(1)");
	callButton.textContent = "OK je veux tester !";

	secondaryButton = document.querySelector(".container>p>a:nth-of-type(2)");
	secondaryButton.textContent = "Non Merci";
	secondaryButton.href = "https://www.pole-emploi.fr/accueil/";
}

function changeLogoName() {
	logo = document.querySelector('.navbar .container strong');
	logo.textContent = "The THP Experience";
	logo.style.fontSize = '2em';
}

function populateImages() {
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

	cardImages = document.querySelectorAll("div.album.py-5.bg-light div.container div.row div.col-md-4 img");

	cardImages.forEach(function(cardImages, index) {
		cardImages.src = imagesArray[index];
	});

}

function deleteLastCards() {
	cards = document.querySelectorAll("div.album.py-5.bg-light div.container div.row div.col-md-4");

	for (var i = 0; i < cards.length; i++) {
		if (i >= (cards.length - 3)) {
			cards[i].remove();
		}

		console.log(cards[i]);
	}
}

function changeCardsText() {
	let texte = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web","Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML","JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];

	paragraphes = document.querySelectorAll("div.container div.row div.col-md-4 div.card.mb-4.box-shadow div.card-body p.card-text");
	paragraphes.forEach( function(para, index) {
		if (index < 3 ) {
			para.textContent = texte[index];
		}
	});
}

function changeViewButtons() {
	boutons = document.querySelectorAll("div.btn-group button.btn.btn-sm.btn-outline-secondary:nth-of-type(1)");

	for (var i = 0; i < boutons.length; i++) {
		boutons[i].classList.remove('btn-outline-secondary');
		boutons[i].classList.add('btn-success');
	}
}

function addRow() {
	container = document.querySelector(".album > .container");
	row = document.createElement('row');
	container.appendChild(row);

	cards = document.querySelectorAll("div.album.py-5.bg-light div.container div.row div.col-md-4");
	card = cards[2];
	row.appendChild(card);
}

changeTitles();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText();
changeViewButtons();
addRow();