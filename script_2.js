// Demander à l'utilisateur d'entrer un numéro
let userInput = prompt("Entrez un numéro pour calculer sa factorielle :");

// Convertir l'entrée utilisateur en nombre entier
let number = parseInt(userInput);

// Vérifier si l'entrée utilisateur est un nombre valide
if (!isNaN(number)) {
    // Calculer la factorielle
    let result = factorial(number);
    console.log("La factorielle de " + number + " est : " + result);
} else {
    console.log("Veuillez entrer un numéro valide.");
}

// Fonction pour calculer la factorielle
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
