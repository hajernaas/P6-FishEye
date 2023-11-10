# Formation Développeur d'application - JavaScript React

# Projet 6 : Créez un site accessible pour une plateforme de photographes

## Fonctionalités

Page d'acceuil :

- Liste de tous les photographes avec leur nom, leur slogan, leur localisation, leur prix/heure et une image miniature de leur choix.
- Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa page

Page de Photographe :

- Affiche une galerie des travaux du photographe.
- Chaque média comprend un titre et un nombre de likes.
- Lorsque l'utilisateur clique sur l'icône "Like", le nombre de likes
  affiché est incrémenté.
- Le nombre de likes total d’un photographe doit correspondre à la somme des likes de chacun
  de ses médias.
- Les médias peuvent être triés par popularité , par titre et par date .
- Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une lightbox
- Les touches fléchées du clavier permettent également de naviguer entre les médias dans la lightbox.
- Le formulaire de contact est une modale qui s'affiche par-dessus le reste.

## Accessibilité

- L'utilisation d'un lecteur d'éran
- L'ajout des attributs ARIA lorsque on doit créer un élément personnalisé,
- Les images doivent présenter un attribut “alt”.
- Toute la gestion des événements (par exemple, les clics et les pressions au
  clavier) doit être configurée (utilisez KeyboardEvent.key ou KeyboardEvent.code.)

## Technologies

- HTML
- CSS
- Javascript

## Compétences évaluées

- Assurer l'accessibilité d'un site web
- Développer une application web modulaire avec des design patterns
- Ecrire du code JavaScript maintenable
- Gérer les évènements d'un site avec JavaScript

## Outils

- [AChecker](https://achecker.ca/)- Évaluation de l'accessibilité du site Web.
- [ESLint] - Utilisé (avec les paramètres par défaut) pour garantir que le code est robuste.-
- Utilisation de [Narrateur ] pour faire une idée de ce que représente  
  l'utilisation du site pour une personne malvoyante.
- [W3C Validator](https://validator.w3.org/)

## Tester le projet

- Pour consulter directement le projet , veuillez voir ce lien :( https://hajernaas.github.io/P6-FishEye/)
  Sinon, clonez le projet
  git clone https://github.com/hajernaas/P6-FishEye.git

- Ouvrez le projet avec live server.
- Testez eslint avec : npm run lint
