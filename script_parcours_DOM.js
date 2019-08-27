// Question 1 :
// Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
p = document.getElementsByTagName("p");
nbP = p.length;
console.log(`Le nombre d'éléments <p> présents dans la page HTML est:`+nbP);

// Question 2 :
// Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
texteCoucou = document.getElementById('coucou');
console.log(texteCoucou.textContent);

// Question 3 :
// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console
a = document.getElementsByTagName('a');
console.log(a[2].href);

// Question 4 :
// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
element = document.querySelectorAll(".compte-moi");
console.log(`Le nombre d'éléments portant la classe compte-moi:`+element.length);

// Question 5 :
// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
element = document.querySelectorAll("li.compte-moi");
console.log(`Le nombre d'éléments <li> portant la classe compte-moi:`+element.length);

// Question 6 :
// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
element = document.querySelectorAll("ol>li.compte-moi");
console.log(`Le nombre d'éléments <li> et situés dans une liste ordonnée et portant la classe compte-moi:`+element.length);

// Question 7 :
// Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…

element = document.querySelector("div:not([class])>ul:nth-of-type(2)>li").textContent;
// element = document.getElementsByTagName('div')[80].childNodes[11].childNodes[1].textContent;
console.log(element);