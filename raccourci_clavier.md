<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Raccourcis Claviers V3</title>
  <!-- <base target="_blank"></base> -->
</head>
<body>

# Mémorandum : ⌨️<br/><span class="courier">Raccourci clavier</span>

<div class="noPrint">

- [Vocabulaire]
- [Raccourcis de navigation communs]
- [Raccourcis de sélection communs]
- [Raccourcis de manipulation communs]
- [Raccourcis de manipulation de texte]
- [Excel]
    + [Déplacement]
    + [Sélection]
    + [Édition de cellules]
- [Navigateur internet]
- [Manipulation des fenêtres et bureaux]
    + [Gestion des bureaux virtuels]
- [Explorateur Windows : Gestionnaire de fichier]
- [Divers dans le système]
- [Écrire tous les symboles]

</div>

## Vocabulaire

Pointeur
:c'est la souris <!--🖱️🐭--> <svg width="8.0" height="14.5" viewBox="-3 -5 80 145"><polygon points="0,0 0,100 24.41,90.02 41.25,132.92 64.82,123.15 46.6,80.7 70.71,70.71" style="fill:white;stroke:black;stroke-width:5;"/></svg>

Curseur
:c'est <span class="blink">|</span> , ou <span class="blink">_</span> clignotant ou autre selon l'application

Fenêtre
:le cadre avec les boutons &nbsp; -- &nbsp;&#9744;&nbsp;&#10005; (ou <svg height=8 width=8><circle cx="4" cy="4" r="3.5" stroke="black" stroke-width=".4" fill="red" /></svg>&nbsp;<svg height=8 width=8><circle cx="4" cy="4" r="3.5" stroke="black" stroke-width=".4" fill="orange" /></svg>&nbsp;<svg height=8 width=8><circle cx="4" cy="4" r="3.5" stroke="black" stroke-width=".4" fill="lightgreen" /></svg>)

Onglet
:souvent en haut, parfois en bas ou sur le côté, qui permet d'avoir plusieurs vues dans une même fenêtre

Application
:ensemble cohérent d'outils qui permet d'effectuer une tâche

Logiciel
:Ensemble d'applications souvent installées sur un poste/PC

Serveur
:Application qui attend la connexion d'un client pour fournir un service

Presse papier
:espace mémoire contenant les éléments copiés

<key>ALT</key> et <key>ALT GR</key> n'ont pas le même comportement ni les mêmes fonctionnalités

> Dans ce document les touches majuscules sont représentées : <key class="tab">&#8679;</key>  
> Les touches entourées de deux flèches &darr;<key>ALT</key>&darr; sont à appuyer et maintenir tout le temps de la manipulation  
> Les touches à presser **simultanément** sont séparer par `+`  
> Les touches à presser **successivement** sont séparer par `,`

## Raccourcis de navigation communs

>  Excel ne suit pas la même logique pour les déplacements, cf. : chapitre Excel

- Début <key>&nwarr;</key> : déplace le curseur au début de la ligne (<key>Pos1</key>, <key>Début</key>, <key>Home</key>, <key>Origine</key>)
- Fin <key>FIN</key> : déplace le curseur à la fin de la ligne
- <key>&#9651;</key> **ou** <key>&#9661;</key> **ou** <key>&#9665;</key> **ou** <key>&#9655;</key> (= **touches directionnelles**) : déplace le curseur d'un caractère ou d'une ligne
- <key>&#8670;</key> **ou** <key>&#8671;</key> : déplace le curseur d'une hauteur d'écran, de fenêtre ou de vu (<key>PgUp</key>, <key>PgDn</key> **ou** <kbd>Pg&nbsp;AR</kbd>, <kbd>Pg&nbsp;AV</kbd>)
- <key>CTRL</key> + <key>&#9665;</key> __ou__ <key>&#9655;</key> : déplace le curseur d'un mot
- <key class="tab">&#x2B7E;</key> __ou__ <key>F6</key> : déplace le curseur parmi les éléments de la fenêtre

## Raccourcis de sélection communs

 - <key>CTRL</key> + <key>A</key> : sélectionner tout
 - <key class="tab">&#8679;</key> + [raccourci de navigation] : sélectionne entre le point d'origine et la nouvelle position du curseur
 - <key>CTRL</key> + [raccourci de navigation] : déplace le curseur sans sélectionner
 - <key>CTRL</key> + <key class="tab">ESPACE</key> : sélectionne/désélectionne l’élément sous le curseur

<span class="pageBreak"></span>

## Raccourcis de manipulation communs

- <key>CTRL</key> + <key>Z</key> : annuler la dernière action
- Rétablir la dernière action annulée (selon l'application) :
    + <key>CTRL</key> + <key>Y</key>
    + <key>CTRL</key> + <key class="tab">&#8679;</key> + <key>Z</key>
- <key>CTRL</key> + <key>C</key> : copier (enregistre dans le presse-papier)
- <key>CTRL</key> + <key>X</key> : couper (enregistre dans le presse-papier, et supprime l'élément sélectionné)
- <key>CTRL</key> + <key>V</key> : coller (le 1^er élément du presse-papier)
- <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>V</key> : coller un des éléments de l'historique du presse-papier (À noter que l’on peut épingler un élément pour le coller plus tard, même après redémarrage)
- <key>CTRL</key> + <key>S</key> : enregistrer
- <key>CTRL</key> + <key>P</key> : imprimer <span class="noPrint">(cette page est imprimable 😉)</span>
- <key>CTRL</key> + <key class="tab">&#x2B7E;</key> : passe à l'onglet suivant
- <key>CTRL</key> + <key class="tab">&#8679;</key> + <key class="tab">&#x2B7E;</key> : passe à l'onglet précédent

## Raccourcis de manipulation de texte

> Sur une sélection ou sur la position actuelle du curseur

- <key>CTRL</key> + <key>U</key> : souligner ( **U**nderline)
- <key>CTRL</key> + <key>G</key> : mettre en gras
- <key>CTRL</key> + <key>I</key> : mettre en italique
- <key>CTRL</key> + <key>F</key> : Lance une recherche
- <key>CTRL</key> + <key>H</key> : Ouvre le menu de remplacement (certaines applications proposent une option nommée Regex ou `.*`, cf. : _[https://regex101.com]_ )

[https://regex101.com]:https://regex101.com "Dans un nouvel onglet" target="_blank"

## Excel

### Contrôle au clavier

<key>ALT</key> __ou__ <key class="tab">&#8679;</key> + <key>/</key> : déclenche l'affichage des raccourcis des fonctions  
les touches saisie permet d'accéder au fonctions, par exemple <key>L</key> permet d'accéder au bandeau "Accueil", puis <key>V</key> permet d'ouvrir le menu de collage.  
Une fois ces chemins appris, il est possible d'aller plus vite en déclenchant la suite de touches : &darr;<key>ALT</key>&darr; + <key>L</key>, <key>V</key>, <key>V</key> réalise un coller valeur. (**ou** <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>V</kbd>, <kbd>V</kbd>, <kbd class="enter">&ldsh;</kbd>)

- <kbd class="tab">&#8679;</kbd> + <kbd>F11</kbd> : Insert une nouvelle feuille de calcul.
- <kbd>CTRL</kbd> + <kbd>L</kbd> : Insérer un tableau
- <kbd>CTRL</kbd> + <kbd class="tab">&#8679;</kbd> + <kbd>&#8670;</kbd> : passer la feuille active vers la précédente
- <kbd>CTRL</kbd> + <kbd class="tab">&#8679;</kbd> + <kbd>&#8671;</kbd> : change la feuille active vers la suivante
- <kbd>CTRL</kbd> + (<kbd>F6</kbd> **ou** <kbd class="tab">&#x2B7E;</kbd>) : passer d'un classeur à un autre

<div class="pageBreak"></div>

### Déplacement

 - <key class="tab">&#x2B7E;</key> : déplace le curseur d'une case sur la droite (depuis la dernière cellule d'un tableau, va au début d'une nouvelle ligne).
 - <key class="tab">&#8679;</key> + <key class="tab">&#x2B7E;</key> : déplace le curseur d'une case sur la gauche
 - <key>CTRL</key> + <key class="tab">&#x2B7E;</key> : lorsque plusieurs fenêtres d'Excel sont ouvertes, permet de passer de l'une à l'autre.
 - <key class="enter">&ldsh;</key> : déplace le curseur d'une case en bas

> En se déplaçant avec tabulation, la touche <key class="enter">&ldsh;</key><!--⏎--> entrée permet d'accéder au début d'une nouvelle ligne de saisie

 - <key>CTRL</key> + [touche directionnelle] **ou** <kbd>Fin</kbd>, (touche directionnel) : saute jusqu’à la dernière valeur de la ligne ou de la colonne (!! s'arrête à la première case vide), puis jusqu'à la dernière case de la feuille

Tous ces déplacements sont utilisables avec <key class="tab">&#8679;</key> pour en faire une sélection

### Sélection

 - <key>CTRL</key> + <key>A</key> : tout sélectionner (le tableau, puis la feuille, puis toutes les lignes et colonnes)
 - <key>CTRL</key> + <key class="tab">ESPACE</key> : étend la sélection à la/aux colonne/s (de valeur du tableau, puis avec l'entête, puis toute/s la/les colonne/s)
 - <key class="tab">&#8679;</key> + <key class="tab">ESPACE</key> : étend la sélection à la/aux ligne/s (de valeur, puis avec l'entête, toute/s la/les ligne/s)
 - <key>CTRL</key> + <key class="tab">&#8679;</key> + <key class="tab">ESPACE</key> : équivalent de <key>CTRL</key> + <key>A</key>
 - <kbd>ALT</kbd> + <kbd>;</kbd> : sélectionne uniquement les cellules visibles
 
> Les sélections discontinus tout au clavier sont possible avec la touche <kbd>F8</kbd>, il m'a fallut et il vous faudra sans doute vous entraîner un peut pour utiliser cette fonction

- <kbd>F8</kbd> : passe en mode sélection étendu depuis la cellule active (équivalent au cliqué-glissé) (les modificateurs de déplacement sont utilisables)
- <kbd class="tab">&#8679;</kbd> + <kbd>F8</kbd> : Ajoute/supprime une sélection discontinu (permettant de déplacer le curseur en gardant la sélection précédente)
- <kbd class="tab">&#x2B7E;</kbd> : permet de déplacer le curseur de cellules en cellules sélectionné et de modifier les sélections précédentes.

### Édition de cellules

- <key>CTRL</key> + <key class="enter">&ldsh;</key> : permet de reproduire la saisie dans toutes les cellules sélectionnées.
- <key>F2</key> : ouvre la saisie rapide de la cellule sous le curseur, puis permet de changer de mode de saisi : Modifier/Entrer
- <key>F4</key> : lors de la saisi de coordonnée de cellule, permet de permuter entre relative, absolu, ligne absolu-colonne relative et ligne relative et colonne absolu (`A1 → $A$1 → A$1 → $A1 → A1` **ou** `LC → L1C1 → L1C → LC1 → LC`)
- <kbd>ALT</kbd> + <kbd class="enter">&ldsh;</kbd>  : valide la saisie sans quitter la cellule. 

> Tous les raccourcis clavier sur Excel : _[https://support.microsoft.com/fr-fr/office/raccourcis-clavier-dans-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f]_

[https://support.microsoft.com/fr-fr/office/raccourcis-clavier-dans-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f]:https://support.microsoft.com/fr-fr/office/raccourcis-clavier-dans-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f "Dans un nouvel onglet" target="_blank"

## Navigateur internet

 - <key>CTRL</key> + <key>T</key> : nouvel onglet (new tab)
 - <key>CTRL</key> + <key>N</key> : nouvelle fenêtre
 - <key>CTRL</key> + <key class="tab">&#8679;</key> + <key>T</key> : restaure le dernier onglet fermé
 - <key>CTRL</key> + <key class="tab">&#8679;</key> + <key>N</key> : restaure la dernière fenêtre fermé
 - <key>CTRL</key> + <key>+</key> : agrandir le texte et les images
 - <key>CTRL</key> + <key>-</key> : réduire le texte et les images
 - <key>CTRL</key> + <key>0</key> : rétablit la taille du texte et des images par défaut
 - <key>F5</key> __ou__ <key>CTRL</key> + <key>R</key> : recharge la page
 - <key>CTRL</key> + <key>F5</key> : supprime le cache et recharge la page

<div class="pageBreak"></div>

## Manipulation des fenêtres et bureaux

 - &darr;<key>ALT</key>&darr; + ( <key class="tab">&#x2B7E;</key> * N ) : navigue parmi les fenêtres ouvertes de gauche à droite
 - &darr;<key>ALT</key>&darr; + &darr;<key class="tab">&#8679;</key>&darr; + ( <key class="tab">&#x2B7E;</key> * N ) : Navigue parmi les fenêtres ouvertes de droite à gauche
 - <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd class="tab">&#x2B7E;</kbd> : ouvre le panneau des fenêtres ouvertes
 - <key>ALT</key> + <key>ÉCHAP</key> : place la fenêtre active derrière toutes les autres
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>M</key> : minimise toutes les fenêtres
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>D</key> : Montre ou cache le bureau
 - &darr;<key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key>&darr; + <key>,</key> : Montre le bureau tant que maintenu
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>&#9651;</key> **ou** <key>&#9661;</key> **ou** <key>&#9665;</key> **ou** <key>&#9655;</key> : déplace la fenêtre
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>ALT</key> + <key>&#9651;</key> **ou** <key>&#9661;</key> : (Windows 11 uniquement) dimensionne la fenêtre sur la partie supérieur **ou** inférieur de l'écran
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>Z</key> : (Windows 11 uniquement) affiche le menu de positionnement de la fenêtre active, puis entrer le nombre pour sélectionner la disposition, puis l'emplacement
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key class="tab">&#8679;</key> + (<key>&#9665;</key> **ou** <key>&#9655;</key>) : déplace la fenêtre d'écran en écran
  - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>1</key> **ou** <key>2</key> **ou** <key>3</key>**...** : équivaut à un clic sur l'icône correspondant dans la barre d'application (maintenir <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> et appuyer plusieurs fois sur le même nombre si plusieurs fenêtres d'une même application)
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>CTRL</key> + <key>1</key> **ou** <key>2</key> **ou** <key>3</key>**...** : Passe d'une fenêtre ouverte à l'autre (correspondant à l'emplacement sur la barre de tâche)
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>ALT</key> + <key>1</key> **ou** <key>2</key> **ou** <key>3</key>**...** : ouvre le menu (= clic droit) de l'application épinglé au numéro correspondant
  - (<kbd class="tab">&#8679;</kbd> + clique gauche) **ou** Clic molette, sur les icônes de la barre d'application : ouvre une nouvelle fenêtre
  - Clic molette sur l'aperçu de la barre d'application d'une fenêtre d'une application ferme la fenêtre
  - <kbd>CRTL</kbd> + <kbd class="tab">&#8679;</kbd> + (clique gauche **ou** <key class="enter">&ldsh;</key>), sur une application dans la barre de tâche, le menu démarrer, le gestionnaire de fichier ou le bureau : Ouvre l'application en tant qu'administrateur

### Gestion des bureaux virtuels

> Les bureaux virtuels peuvent avoir des font d'écran différent un nom personnalisé, une même fenêtre peut être présente sur tous les bureaux. Ces actions n'ont pas de contrôles au clavier, il faut donc les faire à la souris dans le gestionnaire de bureaux (un bouton est par défaut dans la barre de tâches)

 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key class="tab">&#x2B7E;</key> : Ouvre le gestionnaire de bureaux
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>CTRL</key> + <key>D</key> : Ajoute un bureau virtuel
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>CTRL</key> + <key>&#9665;</key> **ou** <key>&#9655;</key> : Change de bureau actif, à gauche ou à droite
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>CTRL</key> + <key>F4</key> : Ferme le bureau virtuel actuel

<span class="pageBreak"></span>

## Explorateur Windows : Gestionnaire de fichier

 - <key>CTRL</key> + <key class="tab">&#8679;</key> + <key>N</key> : crée un nouveau dossier
 - <key>CTRL</key> + <key>E</key> __ou__ <key>CTRL</key> + <key>F</key> **ou** <key>F3</key> : déplace le curseur dans le champ de recherche
 - <key>CTRL</key> + <key>T</key> : ouvre un nouvel onglet (Windows 11)
 - <key>CTRL</key> + <key>D</key> : Supprime le fichier sans mettre à la corbeille
 - <key>CTRL</key> + <key>W</key> : Ferme la fenêtre / l'onglet
 - <key>CTRL</key> + <key>N</key> : Ouvre une nouvelle fenêtre
 - <key>ALT</key> + <key>A</key> __ou__ <key>CTRL</key> + <key>L</key> : déplace le curseur dans le champ chemin
 - <key>ALT</key> + <key>E</key> : ouvre les options d'éditions, puis <key>I</key> permet d'inverser la sélection
 - <key>ALT</key> + <key>O</key> : ouvre les options des dossiers
 - <key>ALT</key> + <key>P</key> : Active/Désactive le panneau d'aperçu (P comme Preview)
 - <key>ALT</key> + <key class="tab">&#8679;</key> + <key>P</key> : Active/Désactive le panneau de détails
 - <key>ALT</key> + <key>F</key> : ouvre le menu déroulant (équivalent clic-droit) plus complet
 - <key>ALT</key> + <key>G</key> : ouvre les options d'affichages
 - <key class="tab">&#8679;</key> + clic sur la colonne "Nom" : avec tri actif met les dossiers en haut de la liste.
 
## Divers dans le système

 - <key class="tab">&#8679;</key> + <key>F10</key> : ouvre le menu déroulant à l'emplacement du curseur (= clic droit)
 - <key>F2</key> : renomme l'élément sous le curseur, en cas de sélection multiple : renomme tous éléments en ajoutant un numéro incrémenté selon l'ordre dans lequel ils sont affiché.
 - <kbd>ALT</kbd> : Fait apparaître et déplace le curseur dans le menu de l'application (Fichier, Édition, Aide...)
 - <key>ÉCHAP</key> : ferme le menu contextuel ouvert, annule la sélection en cours
 - <key>ALT</key> + <key class="tab">espace</key> : ouvre le menu de la fenêtre
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> **ou** <key>CTRL</key> + <key>ÉCHAP</key> : ouvre le menu démarrer, taper des lettres pour chercher une application
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key class="tab">&#8679;</key> + <key>S</key> : prendre une capture d'écran
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>L</key> : Verrouille la session
 - <key>CTRL</key> + <key class="tab">&#8679;</key> + <key>ÉCHAP</key> : ouvre le gestionnaire de tâche
 - <kbd style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></kbd> + <kbd>E</kbd> : Ouvre le gestionnaire de fichiers
 - <kbd style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></kbd> + <kbd>P</kbd> : ouvre le panneau "Projeter" pour changer l'affichage des écrans en dupliqué, étendu ou éteint
 - <kbd>ALT</kbd> + <kbd class="tab">&#8679;</kbd> + [touche directionnel], _dans le menu démarrer_ : déplace le raccourci sélectionné
 

> Toutes les raccourcis Windows sont ici : _[https://support.microsoft.com/fr-fr/windows/raccourcis-clavier-dans-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec]_

[https://support.microsoft.com/fr-fr/windows/raccourcis-clavier-dans-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec]: https://support.microsoft.com/fr-fr/windows/raccourcis-clavier-dans-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec "Dans un nouvel onglet" target="_blank"

<div class="pageBreak"></div>

## Écrire tous les symboles

> Avec Windows 10 et 11 un raccourci clavier à été ajouter ouvrant un pop-up :

<key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>;</key> (comme pour faire le smiley ;-) 😉) **ou** <key>.</key> : permettant la saisi des smiley, symboles et caractères spéciaux n'importe où.

> Avec la touche <key>ALT</key> maintenue enfoncé on tape le code du caractère sur le pavé numérique puis au relâchement de <key>ALT</key> apparaît le symbole désiré

* Les principaux
    - É : &darr;<key>ALT</key>&darr; + <key>0</key><key>2</key><key>0</key><key>1</key>
    - È : &darr;<key>ALT</key>&darr; + <key>0</key><key>2</key><key>0</key><key>0</key>
    - Ç : &darr;<key>ALT</key>&darr; + <key>0</key><key>1</key><key>9</key><key>9</key>
    - À : &darr;<key>ALT</key>&darr; + <key>0</key><key>1</key><key>9</key><key>2</key>
    - ↑/↓/→/← : &darr;<key>ALT</key>&darr; + <key>2</key><key>4</key> / <key>2</key><key>5</key> / <key>2</key><key>6</key> / <key>2</key><key>7</key>

* Autres méthodes pour les accents : ^ (circonflexe) et &grave; (grave)

    - La touche à coté de <key>P</key> &rarr; <key style="display:inline-flex;flex-direction:column;line-height:.7;transform:translateY(-0.3em);padding: 5px 5px 0"><span>¨</span><span>^</span></key> (ou <key>ALT GR</key> + <key>9</key>)
    - La touche <key>ALT GR</key> + <key  style="display:inline-flex;line-height:.7;flex-wrap:wrap;width:1em;transform:translateY(-0.3em);padding: 5px 5px 0"><span>7</span><span> </span><span>è</span><span>`</span></key>

* Pour tous les autres symboles voire cette fiche : _[https://usefulshortcuts.com/downloads/ALT-Codes.pdf]_

> Sous linux plusieurs combinaisons de clavier existes. Les plus répendus sont :

- &darr;<kbd>CTRL</kbd>&darr; + &darr;<kbd>&#8679;</kbd>&darr; + <kbd>U</kbd><kbd>2</kbd><kbd>0</kbd><kbd>3</kbd><kbd>D</kbd>

| Bonus | symbole |
|---|
|0x203D ou 0d8253 exclarrogatif | &#x203D;  
0x2E18 ou 0d11800 | &#x2E18;  
0x2049 ou 0d8265 | &#x2049;  
0x2048 ou 0d8264 | &#x2048;



[https://usefulshortcuts.com/downloads/ALT-Codes.pdf]: https://usefulshortcuts.com/downloads/ALT-Codes.pdf "Dans un nouvel onglet" target="_blank"

<style type="text/css">
key, kbd{
  border: 1px solid grey;
  border-radius: 3px;
  background-color: #000000bb;
  padding: 0 5px;
  color: white;
}
.tab{
  padding-right: 15px;
  padding-left: 15px;
}
.enter{
  height: 50px;
  width: 50px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%, 25% 50%, 0 50%)
}
body{
  -webkit-print-color-adjust: exact; /*chrome & webkit browsers*/
  color-adjust: exact; /*firefox & IE */
}
h1{
  text-align: center;
}
h2{
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image: linear-gradient(to right, #CCC, transparent) 1;
}
.courier{
  font-family: courier;
}
dl{
  columns: 2;
}
dl > dt:first-child{
  margin-top:0;
}
dt{
  /* break-before: always; */
  break-after: avoid;
}
@media screen {
  .mist{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: white;
    -webkit-mask-image: linear-gradient(to top, black 0, transparent 25%);
    mask-image: linear-gradient(to top, black 0, transparent 25%);
  }
}
</style>
<style type="text/css">
body {
  font-family: Helvetica, arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
  padding: 30px; }
body > *:first-child {
  margin-top: 0 !important; }
body > *:last-child {
  margin-bottom: 0 !important; }
a {
  color: #4183C4; }
a.absent {
  color: #cc0000; }
a.anchor {
  display: block;
  padding-left: 30px;
  margin-left: -30px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0; }
h1, h2, h3, h4, h5, h6 {
  margin: 20px 0 10px;
  padding: 0;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  cursor: text;
  position: relative; }
h1:hover a.anchor, h2:hover a.anchor, h3:hover a.anchor, h4:hover a.anchor, h5:hover a.anchor, h6:hover a.anchor {
  text-decoration: none; }
h1 tt, h1 code {
  font-size: inherit; }
h2 tt, h2 code {
  font-size: inherit; }
h3 tt, h3 code {
  font-size: inherit; }
h4 tt, h4 code {
  font-size: inherit; }
h5 tt, h5 code {
  font-size: inherit; }
h6 tt, h6 code {
  font-size: inherit; }
h1 {
  font-size: 28px;
  color: black; }
h2 {
  font-size: 24px;
  border-bottom: 1px solid #cccccc;
  color: black; }
h3 {
  font-size: 18px; }
h4 {
  font-size: 16px; }
h5 {
  font-size: 14px; }
h6 {
  color: #777777;
  font-size: 14px; }
p, blockquote, ul, ol, dl, li, table, pre {
  margin: 15px 0; }
hr {
  border: 0 none;
  color: #cccccc;
  height: 4px;
  padding: 0;
}
body > h2:first-child {
  margin-top: 0;
  padding-top: 0; }
body > h1:first-child {
  margin-top: 0;
  padding-top: 0; }
body > h1:first-child + h2 {
  margin-top: 0;
  padding-top: 0; }
body > h3:first-child, body > h4:first-child, body > h5:first-child, body > h6:first-child {
  margin-top: 0;
  padding-top: 0; }
a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {
  margin-top: 0;
  padding-top: 0; }
h1 p, h2 p, h3 p, h4 p, h5 p, h6 p {
  margin-top: 0; }
li p.first {
  display: inline-block; }
li {
  margin: 0; }
ul, ol {
  padding-left: 30px; }
ul :first-child, ol :first-child {
  margin-top: 0; }
dl {
  padding: 0; }
dl dt {
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  padding: 0;
  margin: 15px 0 5px; }
dl dt:first-child {
  padding: 0; }
dl dt > :first-child {
  margin-top: 0; }
dl dt > :last-child {
  margin-bottom: 0; }
dl dd {
  margin: 0 0 15px;
  padding: 0 15px; }
dl dd > :first-child {
  margin-top: 0; }
dl dd > :last-child {
  margin-bottom: 0; }
blockquote {
  border-left: 4px solid #dddddd;
  padding: 0 15px;
  color: #777777; }
blockquote > :first-child {
  margin-top: 0; }
blockquote > :last-child {
  margin-bottom: 0; }
table {
  padding: 0;border-collapse: collapse; }
table tr {
  border-top: 1px solid #cccccc;
  background-color: white;
  margin: 0;
  padding: 0; }
table tr:nth-child(2n) {
  background-color: #f8f8f8; }
table tr th {
  font-weight: bold;
  border: 1px solid #cccccc;
  margin: 0;
  padding: 6px 13px; }
table tr td {
  border: 1px solid #cccccc;
  margin: 0;
  padding: 6px 13px; }
table tr th :first-child, table tr td :first-child {
  margin-top: 0; }
table tr th :last-child, table tr td :last-child {
  margin-bottom: 0; }
img {
  max-width: 100%; }
span.frame {
  display: block;
  overflow: hidden; }
span.frame > span {
  border: 1px solid #dddddd;
  display: block;
  float: left;
  overflow: hidden;
  margin: 13px 0 0;
  padding: 7px;
  width: auto; }
span.frame span img {
  display: block;
  float: left; }
span.frame span span {
  clear: both;
  color: #333333;
  display: block;
  padding: 5px 0 0; }
span.align-center {
  display: block;
  overflow: hidden;
  clear: both; }
span.align-center > span {
  display: block;
  overflow: hidden;
  margin: 13px auto 0;
  text-align: center; }
span.align-center span img {
  margin: 0 auto;
  text-align: center; }
span.align-right {
  display: block;
  overflow: hidden;
  clear: both; }
span.align-right > span {
  display: block;
  overflow: hidden;
  margin: 13px 0 0;
  text-align: right; }
span.align-right span img {
  margin: 0;
  text-align: right; }
span.float-left {
  display: block;
  margin-right: 13px;
  overflow: hidden;
  float: left; }
span.float-left span {
  margin: 13px 0 0; }
span.float-right {
  display: block;
  margin-left: 13px;
  overflow: hidden;
  float: right; }
span.float-right > span {
  display: block;
  overflow: hidden;
  margin: 13px auto 0;
  text-align: right; }
code, tt {
  margin: 0 2px;
  padding: 0 5px;
  white-space: nowrap;
  border: 1px solid #eaeaea;
  background-color: #f8f8f8;
  border-radius: 3px; }
pre code {
  margin: 0;
  padding: 0;
  white-space: pre;
  border: none;
  background: transparent; }
.highlight pre {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  font-size: 13px;
  line-height: 19px;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px; }
pre {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  font-size: 13px;
  line-height: 19px;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px; }
pre code, pre tt {
  background-color: transparent;
  border: none; }
sup {
  font-size: 0.83em;
  vertical-align: super;
  line-height: 0;
}
* {
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}
.blink{
  animation:1s steps(2, start) infinite colblink;
}
@media screen and (min-width: 914px) {
  body {
  width: 854px;
  margin:0 auto;
  }
}
@media print {
  body{
    padding: 0;
  }
  table, pre {
    break-inside: avoid;
  }
  pre {
    word-wrap: break-word;
  }
  .noPrint{
    display:none;
  }
  h1, h2, h3, h4, h5, h6, dt{
    break-after: avoid;
  }
  p, blockquote, ul, ol, dl, li, table, pre{
    break-inside: avoid;
  }
  .pageBreak {
    break-after:page; /* page-break-before works too */
  }
  .blink{
    animation: none;
  }
}
@keyframes colblink{
  to{
    color:transparent;
  }
}
</style>
<div class="mist noPrint"></div>

<!--
La touche "Windows" <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> est représenté par son nom générique : <key>Super</key>
-->

<!--
╭─┬╮⭾ 0x2B7E
│ ││↹ 0x2189
├─┼┤
╰─┴╯
-->

<!--
traitement du fichier post-extraction :
//replace : \n\n -> \n
replace : i> <k -> i><k
//replace : </ul></li> -> </ul>\n</li>

all style lines : Edit->Line->Join Lines
replace / {2,}/ → / /
replace /\n+/ → //
-->
</body>
</html>