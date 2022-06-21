# HTML

Ce projet est un exemple de base d'un site web composé de `HTML`, `CSS` et `JavaScript`.

Le site peut être accédé en ouvrant le fichier [index.html](./index.html) directement dans un navigateur.

Le site peut également être accédé à travers la version déployée sur [GitHub](https://log2440.github.io/Cours-1-HTML/)

## Page principale

Le contenu de la page principale est décrit dans le fichier [index.html](./index.html). 
La page fait référence à plusieurs ressources externes : 
  - le fichier [styles.css](./styles.css) qui contient les règles CSS à appliquer aux éléments HTML
  - le fichier [script.js](./script.js) qui contient le code JavaScript qui sera exécuté lors des interactions avec la page.
  - le fichier [logo.png](logo.png) qui contient une image à charger et afficher.


La page contient également des liens vers d'autres pages à travers des balises `<a>` (anchor). 
  - le lien [./page2.html](./page2.html) qui est un chemin relatif vers le document [page2.html](./page2.html) (page secondaire)
  - le lien [https://polymtl.ca](https://polymtl.ca) qui est un chemin absolu vers le site web de Polytechnique Montréal.
    - l'attribut et sa valeur `target="_blank"` indiquent que le lien sera ouvert dans un nouvel onglet. 

## Manipulation du DOM avec JS

Il est possible de manipuler la page à travers le code disponible dans `script.js`

Lors du chargement du script, la fonction `domManipulation()` est attachée au gestionnaire de l'événement `click` sur l'élément `<button id="domManipulator">`. 
Cette fonction est exécutée à chaque clic du bouton et effectue plusieurs manipulations du DOM de la page, notamment :
  - récupérer un élément et parcourir l'arbre du DOM à travers les manipulations suivantes : 
  ```js
  const description = document.getElementById("description");
  const textNode = description.children[0];
  const button = textNode.nextElementSibling;
  ```
  - créer et rajouter un nouvel élément HTML au DOM à travers les manipulations suivantes :
  ```js
  textNode.textContent = "Cours 1 - HTML";
  const newElement = document.createElement("p");
  newElement.textContent = "Modifier le DOM avec JS!";
  document.body.appendChild(newElement);
  ```

La gestion de l'événement `click` du premier bouton de la page est faite directement dans le code HTML à travers `onclick="window.print()"`. Même si cette méthode est fonctionnelle, il est déconseillé de l'utiliser pour éviter d'alourdir le HTML et est donnée seulement à des fins de démonstration ici.
