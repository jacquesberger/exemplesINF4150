Formulaires HTML
================

Le but de cet atelier est de vous familiariser avec le code HTML nécessaire pour
produire des formulaires. À l'heure actuelle, concentrez-vous sur
l'apprentissage du code. Le style viendra un peu plus tard.

Objectifs
---------

* Se familiariser avec les formulaires HTML.
* Manipuler différents types de contrôles.

Exercices
---------

1. Créez un formulaire d'admission à une association professionnelle
   d'informaticiennes et informaticiens. La page devrait commencer par un titre
   (`h1`) suivi d'un paragraphe explicatif (une documentation sur l'objectif du
   formulaire).

   Le formulaire devrait contenir les champs textes suivants :
   * nom (max 40 caractères);
   * prénom (max 50 caractères);
   * l'âge (max 2 caractères, avec un _placeholder_ montrant une valeur
     numérique attendue).

2. Ajoutez des champs pour permettre au candidat de spécifier son dernier
   diplôme obtenu. Les champs sont :
   * l'année de diplomation (max 4 caractères, avec un _placeholder_ montant le
     format attendu);
   * l'établissement (une liste déroulante contenant 8 universités canadiennes);
   * le nom du programme (champs texte, max 40 caractères).

3. Remplacez l'âge par une date de naissance (un _datepicker_).

4. Le candidat doit spécifier quel type d'admission il aimerait choisir (boutons
   radios, un seul choix possible) parmi les suivants :
   * Membre régulier;
   * Membre or;
   * Membre observateur;
   * Membre junior.

5. Ajoutez une zone de texte où le candidat sera invité à décrire son parcours
   professionnel. Invitez également le candidat à joindre son CV à sa
   candidature (_file dialog_).

6. Un bouton `Soumettre` doit apparaître au bas du formulaire.
