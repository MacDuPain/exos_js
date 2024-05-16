// Table de correspondance entre les codons et les acides aminés
const codonToAminoAcid = {
  UCU: 'Sérine',
  UCC: 'Sérine',
  UCA: 'Sérine',
  UCG: 'Sérine',
  AGU: 'Sérine',
  AGC: 'Sérine',
  CCU: 'Proline',
  CCC: 'Proline',
  CCA: 'Proline',
  CCG: 'Proline',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UUU: 'Phénylalanine',
  UUC: 'Phénylalanine',
  CGU: 'Arginine',
  CGC: 'Arginine',
  CGA: 'Arginine',
  CGG: 'Arginine',
  AGA: 'Arginine',
  AGG: 'Arginine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
};

// Fonction pour traduire une séquence d'ARN en acides aminés
function traduireARN(seqARN) {
  // Découper la séquence d'ARN en codons
  const codons = seqARN.match(/.{1,3}/g);
  let result = '';

  // Parcourir les codons et traduire chacun en acide aminé
  codons.forEach(codon => {
    // Vérifier si le codon existe dans la table de correspondance
    if (codonToAminoAcid.hasOwnProperty(codon)) {
      // Ajouter l'acide aminé correspondant au résultat
      result += codonToAminoAcid[codon] + ' ';
    } else {
      // Si le codon n'est pas trouvé, ajouter une indication d'erreur au résultat
      result += 'Erreur ';
    }
  });

  return result.trim(); // Supprimer l'espace à la fin du résultat
}

// Demander à l'utilisateur de saisir une séquence d'ARN
const seqARN = prompt('Veuillez saisir une séquence d\'ARN :');
// Traduire la séquence d'ARN en acides aminés
const resultat = traduireARN(seqARN);
// Afficher le résultat dans la console
console.log(resultat);
