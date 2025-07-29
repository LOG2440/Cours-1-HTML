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
  - le lien [./attributes.html](./attributes.html) qui est un chemin relatif vers le document [attributes.html](./attributes.html) démontrant l'utilisation et les impacts des attributs HTML, notamment l'attribut `type` de la balise `<input>`.

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

## Requête HTTP avec JS

Il est possible d'envoyer des requêtes `HTTP` à travers le code disponible dans la balise `<script>` du document `page2.html`. Cette page présente un exemple de la technique AJAX (_Asynchronous JavaScript and XML_) où une requête HTTP est envoyée par le code vers un serveur et la page est modifiée en fonction de la réponse reçue sans avoir à recharger la page. L'envoi de requête est _asynchrone_, c'est-à-dire que la page n'est bloquée en attendant la réponse du serveur.

La page communique avec l'API (_Application Programming Interface_) [swapi](https://swapi.tech/) : un service qui donne accès à des informations de l'univers de _Star Wars_. 
Dans cet exemple, l'interface permet de récupérer l'information de la population d'une planète en fonction de son identifiant et l'afficher à l'écran. _Note_ : certaines planètes n'ont pas cette information et la valeur `unkown` est alors affichée. La valeur maximale du champs de saisi, `61`, ne correspond à aucune planète.

La valeur de l'identifiant est récupérée de la page et envoyée au serveur à travers la méthode `fetch` :

```js
const input = document.getElementById("planet-input");
const serverResponse = await fetch(`https://swapi.tech/api/planets/${input.value}`);
```
Si le code de retour est `404` (Not Found), un message est affiché à l'écran. Sinon, le corps de la réponse est transformé en objet `JSON` (JavaScript Object Notation) et ses attributs `name` et `populations` sont affichés à l'écran :

```js
const messageField = document.getElementById("planet-result");
if (serverResponse.status === 404) {
  messageField.textContent = "Aucune planète trouvée";
} else {
  const jsonInfo = (await serverResponse.json()).result.properties;
  messageField.textContent = `La planette ${jsonInfo.name} a une population de ${jsonInfo.population}`;
}
```

À titre d'exemple :
- L'identifiant `1` retournera `La planette Tatooine a une population de 200000`.
- L'identifiant `61` retournera `Aucune planète trouvée`.


## Attributs HTML

Les attributs HTML sont des informations supplémentaires que l'on peut ajouter à une balise pour modifier son comportement ou son apparence. Certains attributs sont globaux et peuvent être utilisés sur n'importe quelle balise, tandis que d'autres sont spécifiques à une balise en particulier. Par exemple, l'attribut `id` est un attribut global qui peut être utilisé sur n'importe quelle balise, tandis que l'attribut `type` de la balise `<input>` est spécifique à cette balise.

Les attributs peuvent avoir un grand impact sur le rendu et le comportement d'une balise. Par exemple, l'attribut `type` de la balise `<input>` peut changer le type de champ de saisie affiché à l'écran et son comportement. À noter que l'affichage et le comportement des attributs peuvent varier d'un navigateur à l'autre : ouvrez la page dans différents navigateurs (ex : `Chrome` et `Firefox`) pour observer les différences.

Certains attributs peuvent avoir n'importe quelle valeur, tandis que d'autres ont des valeurs prédéfinies. Par exemple, l'attribut `type` de la balise `<input>` a des valeurs prédéfinies telles que `text`, `password`, `checkbox`, etc. Contrairement, l'attribut `id` peut avoir n'importe quelle valeur, mais celle-ci doit être unique dans le document. L'attribut `class` peut avoir plusieurs valeurs séparées par des espaces et ses valeurs peuvent se retrouver sur plusieurs éléments.