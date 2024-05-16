// Demander à l'utilisateur le nombre d'étages
let nombreEtages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// Convertir l'entrée utilisateur en nombre entier
let n = parseInt(nombreEtages);

// Vérifier si l'entrée utilisateur est un nombre valide
if (!isNaN(n) && n > 0) {
    // Construire la pyramide
    let pyramide = "";
    for (let i = 1; i <= n; i++) {
        // Ajouter des espaces avant les #
        for (let j = 0; j < n - i; j++) {
            pyramide += " ";
        }
        // Ajouter des # pour former la pyramide
        for (let k = 0; k < i; k++) {
            pyramide += "#";
        }
        // Ajouter un saut de ligne à la fin de chaque étage
        pyramide += "\n";
    }
    // Afficher la pyramide
    console.log(pyramide);
} else {
    console.log("Veuillez entrer un nombre d'étages valide (entier positif).");
}
