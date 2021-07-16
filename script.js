const description = document.getElementById("description") // <div> de description
const textNode = description.children[0] // obtenir l'élément <p>
const button = textNode.nextElementSibling // prochain élément : le bouton
button.click() // lancer l'événement de click sur le bouton
textNode.textContent = "Cours 1 - HTML" // modifie le contenu du texte
const newElement = document.createElement("p") // créer un nouveau élément
newElement.textContent = "Modifier le DOM avec JS!" // ajouter du texte
document.body.appendChild(newElement) // rajouter comme enfant à body