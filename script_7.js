// Fonction pour gérer la conversation avec le bot
function botConversation(message) {
    if (message.endsWith("?")) {
        return "Ouais Ouais...";
    } else if (message === message.toUpperCase() && message.trim().length > 0) {
        return "Pwa, calme-toi...";
    } else if (message.includes("Fortnite")) {
        return "on s' fait une partie soum-soum ?";
    } else if (message.trim().length === 0) {
        return "t'es en PLS ?";
    } else {
        return "balek.";
    }
}

// Ouvrir une fenêtre de prompt pour saisir un message
const uInput = prompt("Entrez votre message au bot :");

// Obtenir la réponse du bot en utilisant la fonction de conversation
const botResponse = botConversation(uInput);

// Afficher la réponse du bot dans la console
console.log(botResponse);
