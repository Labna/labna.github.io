<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Raccourcis Claviers</title>
  <meta name="description" content="Last modified 2024-07-05">
  <meta name="author" content="Labna">
  <!-- <base target="_blank"></base> -->
</head>
<body>

# Mémorandum&nbsp;: ⌨️<br/><span class="courier">Raccourci clavier</span>

<div class="noPrint">

- [Vocabulaire]
- [Raccourcis de navigation communs]
- [Raccourcis de sélection communs]
- [Raccourcis de manipulation communs]
- [Raccourcis de manipulation de texte]
- [Excel]
    + [Contrôle au clavier]
    + [Déplacement]
    + [Sélection]
    + [Édition de cellules]
- [Word]
    + [Publipostage]
- [Navigateur internet]
- [Manipulation des fenêtres et bureaux]
    + [Gestion des bureaux virtuels]
- [Explorateur Windows&nbsp;: Gestionnaire de fichier]
- [Résoudre un problème]
- [Divers dans le système]
- [Écrire tous les symboles]

</div>

## Vocabulaire

Pointeur
:c'est la souris <!--🖱️🐭--> <svg width="8.0" height="14.5" viewBox="-3 -5 80 145"><polygon points="0,0 0,100 24.41,90.02 41.25,132.92 64.82,123.15 46.6,80.7 70.71,70.71" style="fill:white;stroke:black;stroke-width:5;"/></svg>.

Curseur
:c'est <span class="blink">|</span> , ou <span class="blink">_</span> clignotant ou autre selon l'application.

Fenêtre
:le cadre avec les boutons &nbsp; -- &nbsp;&#9744;&nbsp;&#10005; (ou <svg height=8 width=8><circle cx="4" cy="4" r="3.5" stroke="black" stroke-width=".4" fill="red" /></svg>&nbsp;<svg height=8 width=8><circle cx="4" cy="4" r="3.5" stroke="black" stroke-width=".4" fill="orange" /></svg>&nbsp;<svg height=8 width=8><circle cx="4" cy="4" r="3.5" stroke="black" stroke-width=".4" fill="lightgreen" /></svg>)

Onglet
:souvent en haut, parfois en bas ou sur le côté, qui permet d'avoir plusieurs vues dans une même fenêtre.

Application
:ensemble cohérent d'outils qui permet d'effectuer une tâche.

Logiciel
:Ensemble d'applications souvent installées sur un poste/PC.

Serveur
:Application qui attend la connexion d'un client pour fournir un service.

Presse papier
:espace mémoire contenant les éléments copiés.

<key>ALT</key> et <key>ALT GR</key> n'ont pas le même comportement ni les mêmes fonctionnalités.

> Dans ce document les touches majuscules sont représentées&nbsp;: <key class="tab maj">&#8679;</key>  
> Les touches entourées de deux flèches &darr;<key>ALT</key>&darr; sont à appuyer et maintenir tout le temps de la manipulation  
> Les touches à presser **simultanément** sont séparer par `+`  
> Les touches à presser **successivement** sont séparer par `,`

## Raccourcis de navigation communs

>  Excel ne suit pas la même logique pour les déplacements, cf.&nbsp;: chapitre Excel.

- Début <key>&nwarr;</key>&nbsp;: déplace le curseur au début de la ligne (<key>Pos1</key>, <key>Début</key>, <key>Home</key>, <key>Origine</key>)
- Fin <key>FIN</key>&nbsp;: déplace le curseur à la fin de la ligne.
- <key>&#9651;</key> **ou** <key>&#9661;</key> **ou** <key>&#9665;</key> **ou** <key>&#9655;</key> (= **touches directionnelles**)&nbsp;: déplace le curseur d'un caractère ou d'une ligne.
- <key>&#8670;</key> **ou** <key>&#8671;</key>&nbsp;: déplace le curseur d'une hauteur d'écran, de fenêtre ou de vu (<key>PgUp</key>, <key>PgDn</key> **ou** <kbd>Pg&nbsp;AR</kbd>, <kbd>Pg&nbsp;AV</kbd>)
- <key>CTRL</key> + <key>&#9665;</key> __ou__ <key>&#9655;</key>&nbsp;: déplace le curseur d'un mot.
- <key class="tab">&#x2B7E;</key> __ou__ <key>F6</key>&nbsp;: déplace le curseur parmi les éléments de la fenêtre.

<span class="pageBreak"></span>

## Raccourcis de sélection communs

 - <key>CTRL</key> + <key>A</key>&nbsp;: sélectionner tout.
 - <key class="tab maj">&#8679;</key> + [raccourci de navigation]&nbsp;: sélectionne entre le point d'origine et la nouvelle position du curseur.
 - <key>CTRL</key> + [raccourci de navigation]&nbsp;: déplace le curseur sans sélectionner.
 - <key>CTRL</key> + <key class="tab">ESPACE</key>&nbsp;: sélectionne/désélectionne l’élément sous le curseur.

## Raccourcis de manipulation communs

- <key>CTRL</key> + <key>Z</key>&nbsp;: annuler la dernière action (sauve des vies depuis 1974)
- Rétablir la dernière action annulée (selon l'application)&nbsp;:
    + <key>CTRL</key> + <key>Y</key>
    + <key>CTRL</key> + <key class="tab maj">&#8679;</key> + <key>Z</key>
- <key>CTRL</key> + <key>C</key>&nbsp;: copier (enregistre dans le presse-papier)
- <key>CTRL</key> + <key>X</key>&nbsp;: couper (enregistre dans le presse-papier, et supprime l'élément sélectionné)
- <key>CTRL</key> + <key>V</key>&nbsp;: coller (le 1^er élément du presse-papier)
- <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>V</key>&nbsp;: coller un des éléments de l'historique du presse-papier (À noter que l’on peut épingler un élément pour le coller plus tard, même après redémarrage)
- <key>CTRL</key> + <key>S</key>&nbsp;: enregistrer.
- <key>CTRL</key> + <key>P</key>&nbsp;: imprimer <span class="noPrint">(cette page est imprimable 😉)</span>
- <key>CTRL</key> + <key class="tab">&#x2B7E;</key>&nbsp;: passer à l'onglet suivant.
- <key>CTRL</key> + <key class="tab maj">&#8679;</key> + <key class="tab">&#x2B7E;</key>&nbsp;: passer à l'onglet précédent.

## Raccourcis de manipulation de texte

> Sur une sélection ou sur la position actuelle du curseur.

- <key>CTRL</key> + <key>U</key>&nbsp;: souligner ( **U**nderline)
- <key>CTRL</key> + <key>G</key> **ou** <kbd>CTRL</kbd> + <kbd>B</kbd>&nbsp;: mettre en gras.
- <key>CTRL</key> + <key>I</key>&nbsp;: mettre en italique.
- <key>CTRL</key> + <key>F</key>&nbsp;: Lancer une recherche.
- <kbd>CTRL</kbd> + <kbd>G</kbd> **ou** <kbd>F3</kbd>&nbsp;: dans une recherche va à la prochaine correspondance (+ <kbd class="tab maj">&#8679;</kbd> pour aller à la précédente)
- <svg class="qrcode" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" version="1.1" viewBox="0 0 27 27"><rect x="0" y="0" width="27" height="27" style="fill:#ffffff"/><path d="M1 1h1v7h-1M2 1h6v1h-6M9 1h2v1h-2M12 1h1v1h-1M14 1h4v1h-4M19 1h1v7h-1M20 1h6v1h-6M7 2h1v6h-1M11 2h1v1h-1M25 2h1v6h-1M3 3h3v3h-3M9 3h1v5h-1M10 3h1v1h-1M13 3h2v1h-2M16 3h1v2h-1M21 3h3v3h-3M12 4h1v2h-1M15 4h2v1h-2M10 5h1v1h-1M14 5h1v1h-1M17 5h1v3h-1M11 6h1v2h-1M13 6h1v2h-1M16 6h1v1h-1M2 7h6v1h-6M15 7h1v3h-1M20 7h6v1h-6M10 8h1v4h-1M12 8h1v3h-1M16 8h1v2h-1M3 9h6v1h-6M11 9h3v2h-3M18 9h1v3h-1M20 9h2v2h-2M22 9h2v1h-2M25 9h1v1h-1M1 10h1v1h-1M6 10h1v3h-1M9 10h5v1h-5M17 10h1v1h-1M23 10h2v1h-2M3 11h1v1h-1M5 11h1v4h-1M7 11h1v1h-1M14 11h1v1h-1M16 11h1v1h-1M19 11h1v3h-1M21 11h1v2h-1M22 11h1v1h-1M24 11h2v1h-2M2 12h1v3h-1M12 12h1v2h-1M13 12h1v1h-1M20 12h2v1h-2M1 13h3v1h-3M7 13h1v1h-1M11 13h2v1h-2M14 13h1v2h-1M16 13h1v2h-1M17 13h1v1h-1M22 13h1v4h-1M24 13h1v2h-1M25 13h1v1h-1M4 14h3v1h-3M9 14h1v4h-1M10 14h1v1h-1M15 14h1v9h-1M23 14h1v4h-1M3 15h2v1h-2M6 15h1v3h-1M7 15h2v1h-2M11 15h2v2h-2M17 15h1v7h-1M20 15h1v3h-1M25 15h1v1h-1M2 16h1v1h-1M8 16h1v1h-1M13 16h1v6h-1M16 16h1v1h-1M21 16h1v6h-1M1 17h1v1h-1M3 17h1v1h-1M7 17h1v1h-1M18 17h3v1h-3M24 17h1v6h-1M11 18h2v2h-2M16 18h1v1h-1M22 18h1v2h-1M25 18h1v8h-1M1 19h1v7h-1M2 19h6v1h-6M9 19h1v5h-1M19 19h1v1h-1M7 20h1v6h-1M10 20h1v1h-1M14 20h3v1h-3M3 21h3v3h-3M11 21h1v2h-1M16 21h7v1h-7M14 22h2v1h-2M18 22h1v1h-1M20 22h1v1h-1M22 22h1v4h-1M23 22h1v2h-1M13 23h1v3h-1M17 23h1v1h-1M19 23h1v3h-1M21 23h2v3h-2M10 24h2v1h-2M14 24h2v1h-2M2 25h6v1h-6M11 25h3v1h-3M15 25h2v1h-2M20 25h6v1h-6"></path></svg> <key>CTRL</key> + <key>H</key>&nbsp;: Ouvre le menu de remplacement (certaines applications proposent une option nommée Regex ou `.*`, cf.&nbsp;: _[https://regex101.com]_)

[https://regex101.com]:https://regex101.com "Dans un nouvel onglet" target="_blank"

<div class="pageBreak"></div>

## Excel

### Contrôle au clavier

<key>ALT</key> __ou__ <key class="tab maj">&#8679;</key> + <key>/</key>&nbsp;: déclenche l'affichage des raccourcis des fonctions  
les touches saisie permet d'accéder au fonctions, par exemple <key>L</key> permet d'accéder au bandeau "Accueil", puis <key>V</key> permet d'ouvrir le menu de collage.  
Une fois ces chemins appris, il est possible d'aller plus vite en déclenchant la suite de touches&nbsp;: &darr;<key>ALT</key>&darr; + <key>L</key>, <key>V</key>, <key>V</key> réalise un coller valeur. (**ou** <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>V</kbd>, <kbd>V</kbd>, <kbd class="enter">&ldsh;</kbd>)

- <kbd>CTRL</kbd> + <kbd class="tab maj">&#8679;</kbd> + <kbd>+</kbd>&nbsp;: insérer une cellule, ligne ou colonne.
- <kbd>CTRL</kbd> + <kbd>-</kbd>&nbsp;: Supprimer une cellule, ligne ou colonne.
- <kbd>ALT</kbd> + <kbd>"</kbd>&nbsp;: Masquer les lignes de la sélection
- <kbd>ALT</kbd> + <Kbd>_</kbd>&nbsp;: Afficher les lignes dans la sélection
- <kbd>ALT</kbd> + <kbd>(</kbd>&nbsp;: Masquer les colonnes de la sélection
- <kbd>ALT</kbd> + <kbd>)</kbd>&nbsp;: Afficher les lignes dans la sélection
- <kbd>CTRL</kbd> + <kbd>L</kbd>&nbsp;: Insérer un tableau.
- <kbd class="tab maj">&#8679;</kbd> + <kbd>F11</kbd>&nbsp; **ou** <kbd>ALT</kbd> + <kbd class="tab maj">&#8679;</kbd> + <kbd>F1</kbd>: Insert une nouvelle feuille de calcul.
- <kbd>CTRL</kbd> + <kbd class="tab maj">&#8679;</kbd> + <kbd>&#8670;</kbd>&nbsp;: passer la feuille active vers la précédente.
- <kbd>CTRL</kbd> + <kbd class="tab maj">&#8679;</kbd> + <kbd>&#8671;</kbd>&nbsp;: changer la feuille active vers la suivante.
- <kbd>CTRL</kbd> + (<kbd>F6</kbd> **ou** <kbd class="tab">&#x2B7E;</kbd>)&nbsp;: passer d'un classeur à un autre.
- <kbd>CTRL</kbd> + <kbd class="tab maj">&#8679;</kbd> + <kbd>F1</kbd>&nbsp;: passer en plein écran.
- <kbd>ALT</kbd> + <kbd class="tab maj">&#8679;</kbd> + <kbd>&larr;</kbd>&nbsp;: Dissocier le groupe de lignes ou de colonnes
- <kbd>ALT</kbd> + <kbd class="tab maj">&#8679;</kbd> + <kbd>&rarr;</kbd>&nbsp;: Grouper les lignes ou les colonnes

### Déplacement

 - <key class="tab">&#x2B7E;</key>&nbsp;: déplacer le curseur d'une case sur la droite (depuis la dernière cellule d'un tableau, va au début d'une nouvelle ligne).
 - <key class="tab maj">&#8679;</key> + <key class="tab">&#x2B7E;</key>&nbsp;: déplacer le curseur d'une case sur la gauche.
 - <key>CTRL</key> + <key class="tab">&#x2B7E;</key>&nbsp;: lorsque plusieurs fenêtres d'Excel sont ouvertes, permet de passer de l'une à l'autre.
 - <key class="enter">&ldsh;</key>&nbsp;: déplace le curseur d'une case en bas.

> En se déplaçant avec tabulation, la touche <key class="enter">&ldsh;</key><!--⏎--> entrée permet d'accéder au début d'une nouvelle ligne de saisie.

 - <key>CTRL</key> + [touche directionnelle] **ou** <kbd>Fin</kbd>, (touche directionnel)&nbsp;: sauter jusqu’à la dernière valeur de la ligne ou de la colonne (!! s'arrête à la première case vide), puis jusqu'à la dernière case de la feuille.

Tous ces déplacements sont utilisables avec <key class="tab maj">&#8679;</key> pour en faire une sélection.

<div class="pageBreak"></div>

### Sélection

 - <key>CTRL</key> + <key>A</key>&nbsp;: tout sélectionner (le tableau, puis la feuille, puis toutes les lignes et colonnes)
 - <key>CTRL</key> + <key class="tab">ESPACE</key>&nbsp;: étend la sélection à la/aux colonne/s (de valeur du tableau, puis avec l'entête, puis toute/s la/les colonne/s)
 - <key class="tab maj">&#8679;</key> + <key class="tab">ESPACE</key>&nbsp;: étend la sélection à la/aux ligne/s (de valeur, puis avec l'entête, toute/s la/les ligne/s)
 - <key>CTRL</key> + <key class="tab maj">&#8679;</key> + <key class="tab">ESPACE</key>&nbsp;: équivalent de <key>CTRL</key> + <key>A</key>
 - <kbd>ALT</kbd> + <kbd>;</kbd>&nbsp;: sélectionner uniquement les cellules visibles.
 - (<kbd>F5</kbd>, <kbd class="tab">&#x2B7E;</kbd> * 2, <kbd class="enter">&ldsh;</kbd>) **ou** (&darr;<kbd>ALT</kbd>&darr; + (<kbd>L</kbd>, <kbd>F</kbd>, <kbd>E</kbd>), <kbd class="tab maj">&#8679;</kbd> + <kbd>1</kbd>, <kbd>L</kbd>), <kbd>D</kbd>, <kbd class="enter">&ldsh;</kbd>&nbsp;: sélectionner les cellules vides.
 
> Les sélections discontinus tout au clavier sont possible avec la touche <kbd>F8</kbd>, il vous faudra sans doute vous entraîner un peut pour utiliser cette fonction.

- <kbd>F8</kbd>&nbsp;: passe en mode sélection étendu depuis la cellule active (équivalent au cliqué-glissé ou &#8679; + touche de déplacement) (les modificateurs de déplacement sont utilisables)
- <kbd class="tab maj">&#8679;</kbd> + <kbd>F8</kbd>&nbsp;: Ajoute/supprime une sélection discontinu (permettant de déplacer le curseur en gardant la sélection précédente)
- <kbd class="tab">&#x2B7E;</kbd>&nbsp;: permet de déplacer le curseur de cellules en cellules sélectionné et de modifier les sélections précédentes.

### Édition de cellules

- <kbd class="tab maj">&#8679;</kbd> + <kbd>F3</kbd>&nbsp;: Ouvre l’insertion de fonction
- <key>CTRL</key> + <key class="enter">&ldsh;</key>&nbsp;: permet de reproduire la saisie dans toutes les cellules sélectionnées.
- <key>F2</key>&nbsp;: ouvrir la saisie rapide de la cellule sous le curseur, puis permet de changer de mode de saisi&nbsp;: Modifier/Entrer.
- <key>F4</key>&nbsp;: lors de la saisi de coordonnée de cellule, permet de permuter entre relative, absolu, ligne absolu-colonne relative et ligne relative et colonne absolu (`A1 → $A$1 → A$1 → $A1 → A1` **ou** `LC → L1C1 → L1C → LC1 → LC`)
- <kbd>ALT</kbd> + <kbd class="enter">&ldsh;</kbd> &nbsp;: valide la saisie sans quitter la cellule.
- <kbd>CTRL</kbd> + <kbd>B</kbd>&nbsp;: Recopie la valeur de la première cellule sélectionner dans toute la sélection (équivalent du  &#x271A; glisser avec le pointeur).

> <svg class="qrcode" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" version="1.1" viewBox="0 0 47 47"><rect x="0" y="0" width="47" height="47" style="fill:#ffffff"/><path d="M1 1h1v7h-1M2 1h6v1h-6M9 1h1v1h-1M12 1h1v1h-1M15 1h1v1h-1M17 1h2v1h-2M20 1h2v1h-2M23 1h1v2h-1M25 1h1v10h-1M27 1h1v2h-1M29 1h1v3h-1M34 1h1v4h-1M37 1h1v1h-1M39 1h1v7h-1M40 1h6v1h-6M7 2h1v6h-1M19 2h1v1h-1M24 2h4v1h-4M30 2h1v1h-1M32 2h1v1h-1M36 2h1v4h-1M45 2h1v6h-1M3 3h3v3h-3M10 3h1v2h-1M13 3h1v2h-1M16 3h1v2h-1M20 3h1v2h-1M21 3h1v1h-1M28 3h1v4h-1M31 3h1v2h-1M33 3h1v1h-1M41 3h3v3h-3M9 4h2v1h-2M14 4h3v1h-3M22 4h1v2h-1M27 4h1v2h-1M37 4h1v2h-1M15 5h1v3h-1M17 5h2v1h-2M21 5h1v5h-1M23 5h2v1h-2M30 5h1v1h-1M35 5h3v1h-3M9 6h1v2h-1M12 6h1v1h-1M14 6h3v1h-3M18 6h2v1h-2M26 6h1v1h-1M29 6h1v2h-1M32 6h3v1h-3M2 7h6v1h-6M11 7h1v2h-1M13 7h1v1h-1M17 7h1v3h-1M19 7h1v1h-1M23 7h1v1h-1M27 7h1v2h-1M31 7h1v1h-1M33 7h1v1h-1M35 7h1v2h-1M37 7h1v2h-1M40 7h6v1h-6M10 8h1v5h-1M12 8h1v1h-1M18 8h1v5h-1M20 8h1v1h-1M28 8h1v2h-1M30 8h1v2h-1M32 8h1v2h-1M36 8h1v3h-1M6 9h2v1h-2M9 9h1v2h-1M13 9h2v2h-2M16 9h2v1h-2M22 9h3v1h-3M33 9h1v2h-1M38 9h1v4h-1M40 9h1v1h-1M42 9h1v2h-1M45 9h1v1h-1M1 10h1v1h-1M8 10h4v1h-4M19 10h1v1h-1M27 10h1v1h-1M31 10h1v2h-1M34 10h6v1h-6M41 10h4v1h-4M4 11h1v1h-1M7 11h2v1h-2M12 11h1v1h-1M15 11h1v4h-1M17 11h2v2h-2M21 11h1v1h-1M26 11h1v2h-1M30 11h3v1h-3M39 11h2v1h-2M44 11h2v1h-2M1 12h1v2h-1M3 12h1v1h-1M5 12h1v3h-1M9 12h1v2h-1M22 12h2v1h-2M28 12h1v1h-1M30 12h1v1h-1M34 12h1v2h-1M37 12h2v1h-2M41 12h1v5h-1M42 12h2v1h-2M45 12h1v2h-1M4 13h2v2h-2M6 13h2v1h-2M12 13h1v1h-1M14 13h3v1h-3M19 13h1v3h-1M20 13h2v1h-2M23 13h1v3h-1M24 13h1v1h-1M27 13h1v1h-1M31 13h1v4h-1M32 13h1v1h-1M40 13h1v2h-1M43 13h3v1h-3M2 14h1v1h-1M11 14h1v1h-1M13 14h1v1h-1M17 14h1v7h-1M22 14h1v1h-1M26 14h1v5h-1M28 14h2v5h-2M30 14h1v1h-1M33 14h1v3h-1M35 14h2v1h-2M38 14h5v1h-5M44 14h1v1h-1M6 15h4v1h-4M18 15h1v2h-1M25 15h3v1h-3M34 15h1v2h-1M36 15h2v2h-2M42 15h2v1h-2M45 15h1v1h-1M2 16h1v3h-1M5 16h1v3h-1M6 16h1v1h-1M9 16h4v1h-4M14 16h2v1h-2M24 16h2v1h-2M30 16h1v10h-1M32 16h7v1h-7M44 16h1v4h-1M4 17h2v2h-2M7 17h2v1h-2M11 17h2v2h-2M13 17h1v1h-1M15 17h2v1h-2M20 17h3v2h-3M27 17h1v1h-1M36 17h1v1h-1M38 17h1v5h-1M42 17h1v2h-1M3 18h3v1h-3M9 18h1v8h-1M14 18h1v9h-1M18 18h1v4h-1M23 18h1v1h-1M25 18h2v1h-2M31 18h2v1h-2M39 18h1v1h-1M43 18h3v1h-3M7 19h1v1h-1M13 19h3v1h-3M21 19h2v1h-2M24 19h1v3h-1M33 19h2v1h-2M36 19h1v2h-1M37 19h1v1h-1M40 19h1v1h-1M45 19h1v2h-1M1 20h1v2h-1M2 20h1v1h-1M4 20h1v4h-1M6 20h1v2h-1M8 20h1v2h-1M11 20h1v3h-1M20 20h1v1h-1M26 20h1v3h-1M29 20h1v1h-1M35 20h1v5h-1M39 20h1v2h-1M41 20h1v6h-1M3 21h3v3h-3M7 21h4v1h-4M15 21h1v3h-1M21 21h7v1h-7M33 21h1v1h-1M37 21h8v1h-8M10 22h3v1h-3M16 22h2v1h-2M20 22h2v2h-2M25 22h7v1h-7M36 22h2v2h-2M1 23h1v2h-1M7 23h1v1h-1M19 23h1v4h-1M23 23h1v1h-1M25 23h1v4h-1M32 23h6v1h-6M39 23h1v1h-1M42 23h2v1h-2M3 24h1v1h-1M5 24h1v2h-1M10 24h2v1h-2M13 24h1v1h-1M16 24h1v2h-1M21 24h1v3h-1M27 24h1v1h-1M29 24h4v1h-4M34 24h2v1h-2M37 24h1v2h-1M43 24h3v2h-3M6 25h1v4h-1M7 25h3v1h-3M12 25h1v3h-1M15 25h4v1h-4M22 25h5v1h-5M31 25h1v2h-1M33 25h1v1h-1M38 25h4v1h-4M3 26h2v2h-2M11 26h4v1h-4M18 26h1v3h-1M22 26h1v1h-1M26 26h3v1h-3M34 26h1v1h-1M38 26h1v2h-1M40 26h1v1h-1M45 26h1v2h-1M1 27h1v5h-1M2 27h3v1h-3M7 27h1v1h-1M9 27h1v3h-1M15 27h3v1h-3M23 27h1v2h-1M27 27h4v1h-4M32 27h1v2h-1M42 27h1v1h-1M19 28h1v2h-1M21 28h1v2h-1M24 28h2v2h-2M28 28h6v1h-6M37 28h1v3h-1M39 28h3v1h-3M43 28h2v1h-2M2 29h1v1h-1M5 29h1v9h-1M7 29h1v1h-1M10 29h1v2h-1M13 29h4v1h-4M26 29h1v1h-1M29 29h2v1h-2M33 29h1v2h-1M35 29h2v1h-2M40 29h1v1h-1M44 29h2v1h-2M3 30h1v4h-1M8 30h1v7h-1M11 30h2v1h-2M14 30h1v1h-1M20 30h1v1h-1M27 30h2v1h-2M30 30h1v1h-1M39 30h1v1h-1M43 30h1v1h-1M45 30h1v1h-1M2 31h1v1h-1M6 31h4v1h-4M13 31h1v5h-1M17 31h1v1h-1M24 31h2v1h-2M29 31h1v1h-1M32 31h1v1h-1M41 31h1v3h-1M4 32h3v1h-3M12 32h1v1h-1M19 32h2v1h-2M22 32h2v1h-2M26 32h1v1h-1M31 32h1v1h-1M33 32h3v1h-3M39 32h1v1h-1M43 32h1v1h-1M6 33h2v1h-2M10 33h2v1h-2M14 33h1v1h-1M16 33h2v1h-2M20 33h1v3h-1M23 33h1v3h-1M25 33h1v10h-1M28 33h2v2h-2M32 33h1v1h-1M35 33h1v1h-1M37 33h1v2h-1M38 33h1v1h-1M40 33h3v1h-3M44 33h1v1h-1M1 34h2v1h-2M4 34h1v1h-1M9 34h1v1h-1M11 34h3v2h-3M17 34h1v1h-1M21 34h1v2h-1M22 34h1v1h-1M27 34h3v1h-3M34 34h1v1h-1M36 34h2v1h-2M40 34h1v1h-1M43 34h1v1h-1M45 34h1v7h-1M7 35h1v1h-1M14 35h1v1h-1M26 35h1v1h-1M29 35h1v1h-1M33 35h1v5h-1M35 35h1v1h-1M38 35h1v1h-1M44 35h1v4h-1M2 36h3v1h-3M9 36h1v1h-1M11 36h1v1h-1M15 36h1v1h-1M17 36h3v1h-3M27 36h1v3h-1M31 36h1v2h-1M36 36h1v1h-1M41 36h1v7h-1M42 36h1v2h-1M1 37h1v1h-1M4 37h2v1h-2M7 37h1v1h-1M20 37h10v1h-10M32 37h4v1h-4M37 37h7v1h-7M9 38h2v1h-2M13 38h2v1h-2M21 38h1v4h-1M26 38h5v1h-5M36 38h2v1h-2M43 38h1v4h-1M1 39h1v7h-1M2 39h6v1h-6M15 39h2v2h-2M17 39h2v1h-2M20 39h1v2h-1M23 39h1v1h-1M28 39h1v2h-1M31 39h5v1h-5M37 39h1v4h-1M39 39h1v1h-1M42 39h1v1h-1M7 40h1v6h-1M9 40h1v1h-1M26 40h1v2h-1M29 40h1v2h-1M32 40h1v2h-1M34 40h3v1h-3M44 40h2v1h-2M3 41h3v3h-3M10 41h1v2h-1M12 41h3v1h-3M16 41h1v1h-1M18 41h2v1h-2M22 41h5v1h-5M31 41h1v3h-1M36 41h8v1h-8M15 42h1v3h-1M19 42h2v1h-2M24 42h2v1h-2M33 42h3v1h-3M39 42h1v3h-1M42 42h1v1h-1M23 43h1v1h-1M26 43h2v1h-2M34 43h2v3h-2M12 44h1v2h-1M17 44h5v1h-5M24 44h2v1h-2M27 44h1v1h-1M32 44h5v1h-5M42 44h2v1h-2M45 44h1v1h-1M2 45h6v1h-6M10 45h3v1h-3M14 45h1v1h-1M19 45h1v1h-1M21 45h3v1h-3M25 45h2v1h-2M31 45h1v1h-1M33 45h3v1h-3M37 45h2v1h-2M40 45h1v1h-1M43 45h1v1h-1"></path></svg> Tous les raccourcis clavier sur Excel&nbsp;: _[https://support.microsoft.com/fr-fr/office/raccourcis-clavier-dans-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f]_

[https://support.microsoft.com/fr-fr/office/raccourcis-clavier-dans-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f]:https://support.microsoft.com/fr-fr/office/raccourcis-clavier-dans-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f "Dans un nouvel onglet" target="_blank"

<div class="pageBreak"></div>

## Word

### Publipostage

> quelques raccourcis permettent une saisi plus aisé des champs de fusions.

 - <kbd>ALT</kbd> + <kbd>F9</kbd>&nbsp;: affiche/masque le code des champs de fusions.
 - <kbd>CTRL</kbd> + <kbd>F9</kbd>&nbsp;: Insert un champ vide
 - &darr;<kbd>ALT</kbd>&darr; + (<kbd>S</kbd>, <kbd>U</kbd>, <kbd>H</kbd>)&nbsp;: Insertion d'un champ avec l'assistant.
 - <kbd>ALT</kbd> + <key class="tab maj">&#8679;</key> + <kbd>D</kbd>&nbsp;: Insert la date (mise à jours en continue)
 - <kbd>ALT</kbd> + <key class="tab maj">&#8679;</key> + <kbd>H</kbd>&nbsp;: Insert l'heure actuel (mise à jour en continue)

> <svg class="qrcode" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" version="1.1" viewBox="0 0 47 47"><rect x="0" y="0" width="47" height="47" style="fill:#ffffff"/><path d="M1 1h1v7h-1M2 1h6v1h-6M9 1h2v1h-2M14 1h1v1h-1M18 1h14v1h-14M34 1h1v2h-1M37 1h1v1h-1M39 1h1v7h-1M40 1h6v1h-6M7 2h1v6h-1M10 2h1v1h-1M12 2h1v5h-1M16 2h1v1h-1M18 2h2v4h-2M20 2h1v1h-1M22 2h1v1h-1M26 2h2v1h-2M29 2h1v1h-1M33 2h1v3h-1M36 2h1v4h-1M45 2h1v6h-1M3 3h3v3h-3M11 3h1v2h-1M14 3h1v2h-1M21 3h1v1h-1M23 3h1v1h-1M25 3h1v1h-1M31 3h1v1h-1M41 3h3v3h-3M13 4h1v6h-1M15 4h1v4h-1M20 4h1v3h-1M24 4h1v2h-1M26 4h1v2h-1M37 4h1v2h-1M10 5h1v1h-1M16 5h1v1h-1M21 5h1v6h-1M22 5h5v1h-5M35 5h3v1h-3M11 6h4v1h-4M17 6h1v7h-1M19 6h1v3h-1M25 6h1v4h-1M27 6h1v5h-1M29 6h4v1h-4M2 7h6v1h-6M9 7h1v1h-1M11 7h1v1h-1M23 7h1v1h-1M29 7h1v1h-1M31 7h1v1h-1M33 7h1v1h-1M35 7h1v1h-1M37 7h1v3h-1M40 7h6v1h-6M10 8h1v1h-1M20 8h1v1h-1M34 8h1v2h-1M2 9h3v3h-3M7 9h3v1h-3M11 9h4v1h-4M16 9h1v3h-1M18 9h1v1h-1M22 9h4v1h-4M29 9h1v1h-1M32 9h4v1h-4M38 9h1v2h-1M45 9h1v1h-1M5 10h1v1h-1M8 10h3v1h-3M14 10h1v4h-1M15 10h1v1h-1M20 10h1v3h-1M22 10h1v2h-1M28 10h1v1h-1M30 10h1v1h-1M32 10h1v1h-1M36 10h1v2h-1M39 10h2v2h-2M42 10h2v2h-2M6 11h2v1h-2M10 11h1v1h-1M12 11h1v4h-1M18 11h1v3h-1M25 11h1v2h-1M26 11h1v1h-1M31 11h1v1h-1M33 11h5v1h-5M41 11h3v1h-3M2 12h1v3h-1M4 12h2v1h-2M8 12h1v1h-1M15 12h1v2h-1M19 12h1v4h-1M21 12h1v1h-1M28 12h2v3h-2M33 12h1v1h-1M37 12h1v7h-1M43 12h3v1h-3M1 13h2v2h-2M6 13h1v2h-1M7 13h1v1h-1M11 13h6v1h-6M24 13h1v7h-1M31 13h1v1h-1M36 13h8v1h-8M45 13h1v1h-1M3 14h4v1h-4M10 14h1v2h-1M13 14h1v2h-1M16 14h1v1h-1M20 14h1v7h-1M21 14h2v1h-2M25 14h5v1h-5M33 14h1v1h-1M39 14h1v1h-1M1 15h1v1h-1M3 15h1v1h-1M5 15h1v3h-1M7 15h4v1h-4M14 15h1v3h-1M15 15h1v1h-1M17 15h1v2h-1M25 15h2v1h-2M28 15h1v1h-1M30 15h1v2h-1M34 15h5v1h-5M40 15h1v3h-1M43 15h1v2h-1M44 15h1v1h-1M22 16h2v1h-2M27 16h1v1h-1M29 16h1v3h-1M32 16h1v2h-1M42 16h1v3h-1M45 16h1v1h-1M1 17h1v2h-1M7 17h1v1h-1M9 17h6v1h-6M18 17h1v2h-1M19 17h1v1h-1M31 17h4v1h-4M6 18h1v1h-1M9 18h1v1h-1M11 18h3v1h-3M15 18h1v6h-1M16 18h2v2h-2M21 18h1v2h-1M25 18h1v8h-1M26 18h1v4h-1M33 18h1v4h-1M34 18h1v1h-1M38 18h2v4h-2M45 18h1v3h-1M2 19h3v1h-3M7 19h1v1h-1M10 19h1v2h-1M12 19h2v1h-2M23 19h6v1h-6M30 19h1v1h-1M32 19h2v3h-2M2 20h1v1h-1M5 20h1v6h-1M8 20h2v2h-2M11 20h1v1h-1M17 20h4v1h-4M22 20h2v2h-2M28 20h1v2h-1M34 20h1v2h-1M36 20h5v1h-5M42 20h2v1h-2M1 21h1v3h-1M3 21h1v1h-1M6 21h4v1h-4M13 21h1v1h-1M16 21h1v2h-1M21 21h8v1h-8M30 21h5v1h-5M37 21h1v5h-1M40 21h2v1h-2M43 21h2v1h-2M2 22h1v9h-1M9 22h1v4h-1M10 22h1v1h-1M14 22h6v1h-6M21 22h1v4h-1M35 22h2v1h-2M41 22h1v6h-1M44 22h2v2h-2M7 23h1v1h-1M14 23h2v1h-2M19 23h1v1h-1M23 23h1v1h-1M26 23h3v1h-3M30 23h2v2h-2M39 23h1v1h-1M43 23h3v1h-3M4 24h1v10h-1M10 24h1v5h-1M12 24h2v2h-2M20 24h1v6h-1M26 24h1v1h-1M28 24h5v1h-5M34 24h2v1h-2M6 25h8v1h-8M15 25h1v1h-1M17 25h1v4h-1M19 25h7v1h-7M28 25h1v1h-1M31 25h1v1h-1M36 25h8v1h-8M45 25h1v3h-1M1 26h1v2h-1M6 26h1v1h-1M14 26h1v1h-1M16 26h1v2h-1M22 26h1v1h-1M24 26h1v2h-1M26 26h2v1h-2M29 26h2v1h-2M33 26h1v1h-1M35 26h1v2h-1M39 26h1v1h-1M42 26h2v1h-2M7 27h1v1h-1M9 27h3v1h-3M15 27h2v1h-2M21 27h1v1h-1M27 27h1v4h-1M34 27h2v1h-2M37 27h1v1h-1M40 27h2v1h-2M3 28h3v2h-3M8 28h1v4h-1M11 28h1v1h-1M22 28h1v5h-1M26 28h6v1h-6M36 28h1v2h-1M38 28h1v6h-1M42 28h1v1h-1M1 29h5v1h-5M7 29h1v1h-1M14 29h2v1h-2M19 29h1v2h-1M24 29h2v1h-2M28 29h1v1h-1M31 29h2v2h-2M34 29h1v3h-1M37 29h3v1h-3M45 29h1v1h-1M5 30h1v3h-1M11 30h1v1h-1M13 30h1v1h-1M15 30h2v1h-2M21 30h1v1h-1M25 30h1v2h-1M41 30h2v2h-2M43 30h2v1h-2M1 31h1v2h-1M3 31h1v1h-1M7 31h2v1h-2M10 31h1v7h-1M12 31h1v1h-1M14 31h1v1h-1M16 31h3v2h-3M20 31h1v1h-1M26 31h1v2h-1M28 31h1v2h-1M30 31h1v4h-1M31 31h1v1h-1M36 31h1v1h-1M6 32h1v1h-1M9 32h3v1h-3M21 32h2v1h-2M27 32h3v1h-3M33 32h1v1h-1M40 32h1v1h-1M42 32h2v1h-2M3 33h1v2h-1M7 33h2v1h-2M12 33h3v1h-3M18 33h1v1h-1M20 33h1v2h-1M24 33h1v2h-1M25 33h1v1h-1M32 33h1v4h-1M34 33h1v1h-1M36 33h2v2h-2M44 33h1v2h-1M6 34h1v1h-1M14 34h4v1h-4M19 34h3v1h-3M26 34h1v1h-1M31 34h1v1h-1M41 34h2v1h-2M5 35h1v3h-1M7 35h1v1h-1M9 35h5v1h-5M15 35h2v1h-2M21 35h3v1h-3M25 35h1v7h-1M27 35h3v1h-3M34 35h1v2h-1M35 35h1v1h-1M39 35h2v3h-2M2 36h3v1h-3M8 36h1v2h-1M13 36h2v1h-2M16 36h1v3h-1M17 36h2v1h-2M20 36h1v1h-1M22 36h2v2h-2M26 36h1v4h-1M28 36h1v1h-1M30 36h1v1h-1M36 36h6v2h-6M42 36h2v1h-2M45 36h1v2h-1M1 37h1v1h-1M4 37h2v1h-2M7 37h2v1h-2M12 37h1v5h-1M14 37h1v2h-1M18 37h1v2h-1M21 37h1v6h-1M24 37h1v1h-1M31 37h1v5h-1M33 37h1v5h-1M35 37h7v1h-7M43 37h1v1h-1M9 38h1v2h-1M11 38h1v3h-1M17 38h2v1h-2M20 38h1v1h-1M28 38h1v1h-1M34 38h2v1h-2M37 38h1v5h-1M41 38h1v5h-1M42 38h1v1h-1M44 38h1v1h-1M1 39h1v7h-1M2 39h6v1h-6M10 39h2v2h-2M15 39h1v1h-1M23 39h1v1h-1M29 39h4v1h-4M36 39h1v3h-1M39 39h1v1h-1M45 39h1v1h-1M7 40h1v6h-1M13 40h1v3h-1M17 40h3v1h-3M27 40h1v5h-1M30 40h1v1h-1M34 40h1v2h-1M42 40h1v4h-1M3 41h3v3h-3M14 41h1v3h-1M18 41h8v1h-8M28 41h1v3h-1M29 41h1v1h-1M38 41h8v1h-8M9 42h1v3h-1M16 42h1v2h-1M19 42h1v1h-1M22 42h1v3h-1M24 42h1v2h-1M26 42h1v1h-1M32 42h1v3h-1M38 42h1v2h-1M40 42h6v1h-6M10 43h1v2h-1M12 43h1v1h-1M15 43h1v2h-1M18 43h1v1h-1M20 43h1v2h-1M23 43h1v2h-1M30 43h2v1h-2M34 43h1v1h-1M36 43h1v1h-1M39 43h2v2h-2M44 43h1v1h-1M11 44h1v1h-1M13 44h1v1h-1M17 44h1v1h-1M21 44h3v1h-3M29 44h1v2h-1M37 44h1v2h-1M41 44h1v2h-1M45 44h1v1h-1M2 45h6v1h-6M14 45h1v1h-1M18 45h2v1h-2M21 45h1v1h-1M24 45h3v1h-3M28 45h4v1h-4M36 45h3v1h-3M42 45h2v1h-2"></path></svg> Tous les raccourcis clavier sur Word&nbsp;: _[https://support.microsoft.com/fr-fr/office/raccourcis-clavier-dans-word-95ef89dd-7142-4b50-afb2-f762f663ceb2]_

[https://support.microsoft.com/fr-fr/office/raccourcis-clavier-dans-word-95ef89dd-7142-4b50-afb2-f762f663ceb2]:https://support.microsoft.com/fr-fr/office/raccourcis-clavier-dans-word-95ef89dd-7142-4b50-afb2-f762f663ceb2 "Dans un nouvel onglet" target="_blank"

## Navigateur internet

 - <kbd>CTRL</kbd> + clic sur un lien : ouvrir dans un nouvel onglet.
 - <key>CTRL</key> + <key>T</key>&nbsp;: nouvel onglet (new **T**ab).
 - <key>CTRL</key> + <key>N</key>&nbsp;: **N**ouvelle fenêtre.
 - <kbd>CTRL</kbd> + <kbd>W</kbd>&nbsp;: fermer l'onglet actif.
 - <key>CTRL</key> + <key class="tab maj">&#8679;</key> + <key>T</key>&nbsp;: restaure le dernier onglet fermé.
 - <key>CTRL</key> + <key class="tab maj">&#8679;</key> + <key>N</key>&nbsp;: restaure la dernière fenêtre fermé **ou** ouvre une nouvelle fenêtre privé.
 - <key>CTRL</key> + <key>+</key>&nbsp;: agrandir le texte et les images.
 - <key>CTRL</key> + <key>-</key>&nbsp;: réduire le texte et les images.
 - <key>CTRL</key> + <key>0</key>&nbsp;: rétablir la taille du texte et des images par défaut.
 - <kbd>CTRL</kbd> + <kbd class="tab">&#x2B7E;</kbd>&nbsp;: basculer dans l'onglet de droite.
 - <kbd>CTRL</kbd> + <kbd class="tab maj">&#8679;</kbd> + <kbd class="tab">&#x2B7E;</kbd>&nbsp;: Basculer dans l'onglet de gauche.
 - <kbd>CTRL</kbd> + (<kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>...)&nbsp;: basculer sur l'onglet 1, 2, 3...
 - <kbd>CTRL</kbd> + <kbd>9</kbd>&nbsp;: basculer sur le dernier onglet.
 - <key>F5</key> __ou__ <key>CTRL</key> + <key>R</key>&nbsp;: recharger la page.
 - <key>CTRL</key> + <key>F5</key>&nbsp;: supprimer le cache et recharger la page.
 - <kbd>CTRL</kbd> + (<kbd>E</kbd> **ou** <kbd>K</kbd>)&nbsp;: placer le curseur pour effectuer une recherche.
 - <kbd>CTRL</kbd> + <kbd class="tab maj">&#8679;</kbd> + <kbd>B</kbd>&nbsp;: afficher ou masquer la barre de favoris.

<div class="pageBreak"></div>

## Manipulation des fenêtres et bureaux

 - &darr;<key>ALT</key>&darr; + ( <key class="tab">&#x2B7E;</key> * N )&nbsp;: naviguer parmi les fenêtres ouvertes de gauche à droite (outil de power-user depuis 1987).
 - &darr;<key>ALT</key>&darr; + &darr;<key class="tab maj">&#8679;</key>&darr; + ( <key class="tab">&#x2B7E;</key> * N )&nbsp;: Naviguer parmi les fenêtres ouvertes de droite à gauche.
 - <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd class="tab">&#x2B7E;</kbd>&nbsp;: ouvrir le panneau des fenêtres ouvertes.
 - <key>ALT</key> + <key>ÉCHAP</key>&nbsp;: placer la fenêtre active derrière toutes les autres.
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>M</key>&nbsp;: minimiser toutes les fenêtres.
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>D</key>&nbsp;: montrer ou cacher le bureau.
 - &darr;<key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key>&darr; + <key>,</key>&nbsp;: montrer le bureau tant que maintenu.
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>&#9651;</key> **ou** <key>&#9661;</key> **ou** <key>&#9665;</key> **ou** <key>&#9655;</key>&nbsp;: déplacer la fenêtre.
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>ALT</key> + <key>&#9651;</key> **ou** <key>&#9661;</key>&nbsp;: (Windows 11 uniquement) dimensionner la fenêtre sur la partie supérieur **ou** inférieur de l'écran.
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>Z</key>&nbsp;: (Windows 11 uniquement) afficher le menu de positionnement de la fenêtre active, puis entrer le nombre pour sélectionner la disposition, puis l'emplacement.
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key class="tab maj">&#8679;</key> + (<key>&#9665;</key> **ou** <key>&#9655;</key>)&nbsp;: déplacer la fenêtre d'écran en écran.
  - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>1</key> **ou** <key>2</key> **ou** <key>3</key>**...**&nbsp;: équivaut à un clic sur l'icône correspondant dans la barre d'application (maintenir <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> et appuyer plusieurs fois sur le même nombre si plusieurs fenêtres d'une même application)
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>CTRL</key> + <key>1</key> **ou** <key>2</key> **ou** <key>3</key>**...**&nbsp;: passer d'une fenêtre ouverte à l'autre (correspondant à l'emplacement sur la barre de tâche)
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>ALT</key> + <key>1</key> **ou** <key>2</key> **ou** <key>3</key>**...**&nbsp;: ouvrir le menu (= clic droit) de l'application épinglé au numéro correspondant.
  - (<kbd class="tab maj">&#8679;</kbd> + clique gauche) **ou** Clic molette, sur les icônes de la barre d'application&nbsp;: ouvrir une nouvelle fenêtre.
  - Clic molette sur l'aperçu d'une fenêtre de la barre d'application&nbsp;: fermer la fenêtre.
  - <kbd>CRTL</kbd> + <kbd class="tab maj">&#8679;</kbd> + (clique gauche **ou** <key class="enter">&ldsh;</key>), sur une application dans la barre de tâche, le menu démarrer, le gestionnaire de fichier ou le bureau&nbsp;: Ouvrir l'application en tant qu'administrateur.

<div class="pageBreak"></div>

### Gestion des bureaux virtuels

> Les bureaux virtuels peuvent avoir des font d'écran différent un nom personnalisé, une même fenêtre peut être présente sur tous les bureaux. Ces actions n'ont pas de contrôles au clavier, il faut donc les faire à la souris dans le gestionnaire de bureaux (un bouton est par défaut dans la barre de tâches).

 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key class="tab">&#x2B7E;</key>&nbsp;: Ouvrir le gestionnaire de bureaux.
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>CTRL</key> + <key>D</key>&nbsp;: Ajouter un bureau virtuel.
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>CTRL</key> + <key>&#9665;</key> **ou** <key>&#9655;</key>&nbsp;: Changer de bureau actif, à gauche ou à droite.
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>CTRL</key> + <key>F4</key>&nbsp;: Fermer le bureau virtuel actuel.

## Explorateur Windows&nbsp;: Gestionnaire de fichier

 - <key>CTRL</key> + <key class="tab maj">&#8679;</key> + <key>N</key>&nbsp;: créer un nouveau dossier.
 - <key>CTRL</key> + <key>E</key> __ou__ <key>CTRL</key> + <key>F</key> **ou** <key>F3</key>&nbsp;: déplacer le curseur dans le champ de recherche.
 - <key>CTRL</key> + <key>T</key>&nbsp;: ouvrir un nouvel onglet (Windows 11)
 - <key>CTRL</key> + <key>D</key>&nbsp;: supprimer le fichier sans mettre à la corbeille.
 - <key>CTRL</key> + <key>W</key>&nbsp;: fermer la fenêtre / l'onglet.
 - <key>CTRL</key> + <key>N</key>&nbsp;: ouvrir une nouvelle fenêtre.
 - <key>ALT</key> + <key>A</key> __ou__ <key>CTRL</key> + <key>L</key>&nbsp;: déplacer le curseur dans le champ chemin.
 - <key>ALT</key> + <key>E</key>&nbsp;: ouvrir les options d'éditions, puis <key>I</key> permet d'inverser la sélection.
 - <key>ALT</key> + <key>O</key>&nbsp;: ouvrir les options des dossiers.
 - <key>ALT</key> + <key>P</key>&nbsp;: activer/désactiver le panneau d'aperçu (P comme Preview)
 - <key>ALT</key> + <key class="tab maj">&#8679;</key> + <key>P</key>&nbsp;: activer/désactiver le panneau de détails.
 - <key>ALT</key> + <key>F</key>&nbsp;: ouvrir le menu déroulant (équivalent clic-droit) plus complet.
 - <key>ALT</key> + <key>G</key>&nbsp;: ouvrir les options d'affichages.
 - <key class="tab maj">&#8679;</key> + clic sur la colonne "Nom"&nbsp;: avec tri actif met les dossiers en haut de la liste.

> La recherche peut être faite avec une interprétation littéral, exemple `~*5-a` retournera des résultat comportant exactement '5-a'; avec des opérateur NOT, OR, >, < ou .. (entre); avec les noms des champs, exemple `Nom:abc datedemodification:aujourdhui sorte:video type:mp4 Date:<01/01/2026 taille:10k..1M`

> Il est possible de lancer une application dans le dossier ouvert en saisissant le nom de l'exécutable dans le champ chemin.  
> Exemple avec l'invite de commande CMD (ou PowerShell (alias powershell))&nbsp;: ALT+A (ou CTRL+L) puis `cmd` (ou `powershell`) et [&ldsh;&nbsp;ENTREE]

<div class="pageBreak"></div>

## Résoudre un problème

 - <kbd>ALT</kbd>&nbsp;: Faire apparaître et déplacer le curseur dans le menu de l'application (Fichier, Édition, Aide...).
 - <key>ALT</key> + <key class="tab">espace</key>&nbsp;: ouvrir le menu de la fenêtre (pour la fermer, le redimensionner).
 - <kbd>ALT</kbd> + <kbd>F4</kbd>&nbsp;: Fermer l'application, sur le bureau ouvre le menu d'extinction et de redémarrage.
 - <key>CTRL</key> + <key class="tab maj">&#8679;</key> + <key>ÉCHAP</key>&nbsp;: ouvrir le gestionnaire de tâche (si ALT+F4 n'a pas fonctionné)
 - <kbd style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></kbd> + <kbd>R</kbd>&nbsp;: ouvre l'invite de lancement (quelques exemples&nbsp;: `taskmgr`, `cmd`, `explorer`, `excel`, `firefox`, `regedit`, `control`, `ms-settings:`, `powershell`, `winget update -r`)
 - <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Suppr</kbd>&nbsp;: pour verrouillé la session, hanger d'utilisateur, se déconnecter, modifier le mot de passe ou ouvrir le gestionnaire de tâches.
 - <kbd style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></kbd>  + <kbd>CTRL</kbd> + <kbd class="tab maj">&#8679;</kbd> + <kbd>B</kbd>&nbsp;: fait redémarrer l'affichage.

## Divers dans le système

 - <key class="tab maj">&#8679;</key> + <key>F10</key>&nbsp;: ouvre le menu déroulant à l'emplacement du curseur (= clic droit)
 - <key>F2</key>&nbsp;: renomme l'élément sous le curseur, en cas de sélection multiple&nbsp;: renomme tous éléments en ajoutant un numéro incrémenté selon l'ordre dans lequel ils sont affiché.
 - <key>ÉCHAP</key>&nbsp;: ferme le menu contextuel ouvert, annule la sélection en cours
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> **ou** <key>CTRL</key> + <key>ÉCHAP</key>&nbsp;: ouvre le menu démarrer, taper des lettres pour chercher une application
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key class="tab maj">&#8679;</key> + <key>S</key>&nbsp;: prendre une capture d'écran
 - <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>L</key>&nbsp;: Verrouille la session

 - <kbd style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></kbd> + <kbd>E</kbd>&nbsp;: Ouvre le gestionnaire de fichiers
 - <kbd style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></kbd> + <kbd>P</kbd>&nbsp;: ouvre le panneau "Projeter" pour changer l'affichage des écrans en dupliqué, étendu ou éteint
 - <kbd>ALT</kbd> + <kbd class="tab maj">&#8679;</kbd> + [touche directionnel], _dans le menu démarrer_&nbsp;: déplace le raccourci sélectionné

> <svg class="qrcode" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" version="1.1" viewBox="0 0 47 47"><rect x="0" y="0" width="47" height="47" style="fill:#ffffff"/><path d="M1 1h1v7h-1M2 1h6v1h-6M9 1h1v1h-1M11 1h3v1h-3M15 1h1v4h-1M17 1h1v1h-1M20 1h4v1h-4M25 1h1v1h-1M27 1h4v1h-4M37 1h1v1h-1M39 1h1v7h-1M40 1h6v1h-6M7 2h1v6h-1M10 2h1v1h-1M14 2h1v1h-1M20 2h1v1h-1M22 2h2v4h-2M24 2h1v1h-1M26 2h1v3h-1M29 2h1v3h-1M31 2h3v1h-3M36 2h1v4h-1M45 2h1v6h-1M3 3h3v3h-3M17 3h1v8h-1M25 3h1v7h-1M27 3h1v1h-1M30 3h1v1h-1M34 3h1v2h-1M41 3h3v3h-3M9 4h7v1h-7M19 4h1v5h-1M28 4h2v1h-2M31 4h1v4h-1M32 4h1v2h-1M37 4h1v2h-1M11 5h4v1h-4M16 5h1v1h-1M21 5h1v6h-1M24 5h1v1h-1M27 5h1v1h-1M33 5h1v5h-1M35 5h3v1h-3M9 6h1v2h-1M12 6h2v1h-2M15 6h1v2h-1M18 6h1v1h-1M26 6h1v1h-1M29 6h1v2h-1M30 6h1v1h-1M2 7h6v1h-6M11 7h1v1h-1M13 7h1v2h-1M23 7h1v1h-1M27 7h1v1h-1M35 7h1v1h-1M37 7h1v5h-1M40 7h6v1h-6M12 8h3v1h-3M16 8h2v3h-2M18 8h3v1h-3M26 8h1v3h-1M28 8h1v1h-1M32 8h2v2h-2M36 8h1v1h-1M6 9h2v1h-2M9 9h3v2h-3M12 9h1v1h-1M14 9h5v1h-5M22 9h1v4h-1M23 9h3v1h-3M29 9h1v3h-1M31 9h3v1h-3M35 9h1v2h-1M38 9h1v1h-1M40 9h1v3h-1M42 9h1v1h-1M45 9h1v3h-1M1 10h3v1h-3M8 10h4v1h-4M14 10h1v1h-1M20 10h1v4h-1M27 10h2v1h-2M32 10h1v1h-1M34 10h2v1h-2M39 10h1v6h-1M41 10h1v1h-1M43 10h1v2h-1M2 11h1v1h-1M6 11h3v1h-3M11 11h2v4h-2M19 11h2v3h-2M24 11h1v3h-1M33 11h1v1h-1M36 11h5v1h-5M44 11h1v2h-1M3 12h1v1h-1M5 12h1v1h-1M8 12h1v1h-1M15 12h2v1h-2M18 12h1v1h-1M26 12h2v1h-2M30 12h3v1h-3M34 12h1v3h-1M41 12h1v1h-1M1 13h2v1h-2M7 13h1v1h-1M13 13h2v1h-2M21 13h1v3h-1M27 13h3v1h-3M31 13h2v1h-2M37 13h1v2h-1M40 13h1v1h-1M42 13h1v1h-1M45 13h1v1h-1M2 14h2v1h-2M5 14h2v1h-2M8 14h2v1h-2M16 14h4v1h-4M22 14h1v2h-1M28 14h1v2h-1M33 14h1v3h-1M41 14h1v3h-1M43 14h1v3h-1M4 15h1v1h-1M7 15h1v1h-1M9 15h1v3h-1M12 15h4v1h-4M18 15h2v1h-2M24 15h1v1h-1M26 15h1v1h-1M32 15h1v1h-1M35 15h2v1h-2M38 15h3v1h-3M44 15h1v1h-1M2 16h1v1h-1M6 16h1v6h-1M8 16h1v6h-1M15 16h2v2h-2M23 16h1v1h-1M27 16h1v2h-1M29 16h1v2h-1M31 16h1v3h-1M34 16h1v1h-1M36 16h1v4h-1M37 16h1v1h-1M40 16h4v1h-4M1 17h1v1h-1M7 17h3v1h-3M17 17h1v5h-1M24 17h1v2h-1M26 17h4v1h-4M35 17h1v2h-1M38 17h1v1h-1M44 17h1v1h-1M10 18h3v1h-3M14 18h1v2h-1M15 18h1v1h-1M22 18h1v4h-1M28 18h1v2h-1M34 18h1v2h-1M42 18h1v1h-1M45 18h1v1h-1M2 19h2v1h-2M7 19h1v1h-1M13 19h1v3h-1M18 19h6v2h-6M25 19h1v1h-1M29 19h1v4h-1M37 19h3v1h-3M1 20h1v3h-1M3 20h2v1h-2M9 20h1v6h-1M12 20h2v2h-2M16 20h9v1h-9M26 20h1v3h-1M30 20h4v1h-4M35 20h1v2h-1M39 20h1v2h-1M41 20h1v6h-1M42 20h1v3h-1M43 20h1v1h-1M45 20h1v1h-1M2 21h1v1h-1M4 21h10v1h-10M15 21h1v1h-1M18 21h1v1h-1M21 21h7v1h-7M31 21h3v2h-3M37 21h1v10h-1M38 21h3v1h-3M44 21h1v1h-1M3 22h3v2h-3M10 22h1v2h-1M20 22h2v2h-2M25 22h1v5h-1M30 22h5v1h-5M43 22h1v4h-1M2 23h4v1h-4M7 23h1v1h-1M16 23h1v1h-1M19 23h3v1h-3M23 23h1v1h-1M27 23h1v2h-1M28 23h1v1h-1M30 23h1v3h-1M31 23h1v1h-1M33 23h1v2h-1M34 23h1v1h-1M39 23h1v1h-1M1 24h1v1h-1M3 24h1v1h-1M5 24h1v5h-1M12 24h1v1h-1M15 24h1v2h-1M17 24h1v1h-1M21 24h1v2h-1M26 24h2v1h-2M29 24h1v1h-1M42 24h2v2h-2M6 25h4v1h-4M11 25h1v2h-1M13 25h3v1h-3M18 25h7v1h-7M31 25h2v1h-2M34 25h1v2h-1M38 25h8v1h-8M1 26h1v6h-1M6 26h1v2h-1M12 26h1v4h-1M14 26h1v1h-1M16 26h1v1h-1M18 26h1v4h-1M19 26h2v1h-2M23 26h1v4h-1M26 26h3v1h-3M32 26h3v1h-3M36 26h1v4h-1M39 26h2v1h-2M45 26h1v1h-1M2 27h1v3h-1M4 27h4v1h-4M9 27h1v3h-1M15 27h1v3h-1M17 27h1v1h-1M20 27h3v1h-3M27 27h1v1h-1M30 27h1v1h-1M42 27h1v1h-1M44 27h1v2h-1M3 28h1v1h-1M13 28h1v3h-1M19 28h1v2h-1M21 28h1v2h-1M24 28h2v2h-2M28 28h1v2h-1M29 28h1v1h-1M31 28h1v3h-1M40 28h1v3h-1M41 28h1v1h-1M43 28h3v1h-3M7 29h1v1h-1M10 29h1v1h-1M14 29h3v1h-3M22 29h5v1h-5M33 29h1v2h-1M34 29h1v1h-1M39 29h2v2h-2M45 29h1v1h-1M3 30h3v2h-3M14 30h1v1h-1M20 30h1v1h-1M24 30h1v1h-1M27 30h1v1h-1M29 30h1v1h-1M41 30h2v1h-2M2 31h8v1h-8M17 31h1v1h-1M21 31h1v1h-1M25 31h1v12h-1M32 31h1v1h-1M45 31h1v2h-1M5 32h1v1h-1M11 32h1v6h-1M13 32h3v2h-3M19 32h2v1h-2M22 32h2v1h-2M26 32h4v1h-4M33 32h3v1h-3M38 32h1v4h-1M39 32h1v1h-1M43 32h3v1h-3M3 33h1v1h-1M6 33h3v1h-3M10 33h1v1h-1M16 33h2v1h-2M20 33h1v3h-1M23 33h1v5h-1M26 33h1v1h-1M28 33h2v1h-2M31 33h1v2h-1M32 33h1v1h-1M35 33h1v1h-1M37 33h2v3h-2M40 33h1v2h-1M41 33h1v1h-1M44 33h1v1h-1M1 34h1v1h-1M5 34h1v4h-1M6 34h1v1h-1M8 34h1v3h-1M9 34h1v1h-1M22 34h1v1h-1M27 34h1v1h-1M29 34h1v2h-1M36 34h3v2h-3M39 34h2v1h-2M43 34h1v1h-1M45 34h1v1h-1M7 35h1v1h-1M13 35h2v1h-2M16 35h2v1h-2M26 35h1v4h-1M28 35h2v1h-2M32 35h2v1h-2M35 35h2v2h-2M44 35h1v4h-1M2 36h3v1h-3M9 36h1v1h-1M15 36h1v1h-1M17 36h3v1h-3M21 36h1v7h-1M30 36h1v3h-1M33 36h4v1h-4M41 36h1v7h-1M1 37h1v1h-1M4 37h2v1h-2M7 37h1v1h-1M12 37h1v1h-1M16 37h1v2h-1M20 37h9v1h-9M31 37h2v1h-2M35 37h1v1h-1M37 37h9v1h-9M9 38h2v1h-2M13 38h4v1h-4M18 38h1v5h-1M29 38h2v1h-2M33 38h1v1h-1M36 38h2v1h-2M43 38h1v4h-1M45 38h1v2h-1M1 39h1v7h-1M2 39h6v1h-6M15 39h1v3h-1M20 39h1v2h-1M23 39h1v1h-1M28 39h1v2h-1M31 39h2v1h-2M34 39h2v2h-2M37 39h1v4h-1M39 39h1v1h-1M7 40h1v6h-1M9 40h1v1h-1M17 40h4v1h-4M26 40h1v2h-1M29 40h1v2h-1M32 40h5v1h-5M42 40h2v2h-2M3 41h3v3h-3M10 41h1v2h-1M12 41h2v1h-2M16 41h1v1h-1M22 41h5v1h-5M31 41h2v1h-2M36 41h10v1h-10M19 42h3v1h-3M24 42h2v1h-2M30 42h1v1h-1M33 42h1v1h-1M35 42h1v2h-1M39 42h1v3h-1M42 42h1v1h-1M14 43h2v1h-2M19 43h1v1h-1M23 43h1v1h-1M26 43h2v1h-2M31 43h1v3h-1M34 43h2v1h-2M12 44h1v2h-1M15 44h2v1h-2M18 44h1v1h-1M24 44h2v1h-2M27 44h4v1h-4M33 44h1v1h-1M37 44h1v2h-1M43 44h1v2h-1M45 44h1v1h-1M2 45h6v1h-6M10 45h3v1h-3M14 45h1v1h-1M16 45h2v1h-2M19 45h2v1h-2M22 45h2v1h-2M25 45h2v1h-2M29 45h1v1h-1M32 45h1v1h-1M34 45h5v1h-5M40 45h1v1h-1"></path></svg> Toutes les raccourcis Windows sont ici&nbsp;: _[https://support.microsoft.com/fr-fr/windows/raccourcis-clavier-dans-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec]_

[https://support.microsoft.com/fr-fr/windows/raccourcis-clavier-dans-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec]: https://support.microsoft.com/fr-fr/windows/raccourcis-clavier-dans-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec "Dans un nouvel onglet" target="_blank"

<div class="pageBreak"></div>

## Écrire tous les symboles

> Avec Windows 10 et 11 un raccourci clavier à été ajouter ouvrant un pop-up&nbsp;:

<key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> + <key>;</key> (comme pour faire le smiley ;-) 😉) **ou** <key>.</key>&nbsp;: permettant la saisi des smiley, symboles et caractères spéciaux n'importe où.

> Avec la touche <key>ALT</key> maintenue enfoncé on tape le code du caractère sur le pavé numérique puis au relâchement de <key>ALT</key> apparaît le symbole désiré

* Les principaux
    - É&nbsp;: &darr;<key>ALT</key>&darr; + <key>0</key><key>2</key><key>0</key><key>1</key>
    - È&nbsp;: &darr;<key>ALT</key>&darr; + <key>0</key><key>2</key><key>0</key><key>0</key>
    - Ç&nbsp;: &darr;<key>ALT</key>&darr; + <key>0</key><key>1</key><key>9</key><key>9</key>
    - À&nbsp;: &darr;<key>ALT</key>&darr; + <key>0</key><key>1</key><key>9</key><key>2</key>
    - ↑/↓/→/←&nbsp;: &darr;<key>ALT</key>&darr; + <key>2</key><key>4</key> / <key>2</key><key>5</key> / <key>2</key><key>6</key> / <key>2</key><key>7</key>

* Autres méthodes pour les accents&nbsp;: ^ (circonflexe) et &grave; (grave)

    - La touche à coté de <key>P</key> &rarr; <key style="display:inline-flex;flex-direction:column;line-height:.7;transform:translateY(-0.3em);padding: 5px 5px 0"><span>¨</span><span>^</span></key> (ou <key>ALT GR</key> + <key>9</key>)
    - La touche <key>ALT GR</key> + <key  style="display:inline-flex;line-height:.7;flex-wrap:wrap;width:1em;transform:translateY(-0.3em);padding: 5px 5px 0"><span>7</span><span> </span><span>è</span><span>`</span></key>

* <svg class="qrcode" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" version="1.1" viewBox="0 0 35 35"><rect x="0" y="0" width="35" height="35" style="fill:#ffffff"/><path d="M1 1h1v7h-1M2 1h6v1h-6M9 1h2v1h-2M14 1h3v2h-3M17 1h2v1h-2M20 1h1v2h-1M22 1h1v1h-1M25 1h1v1h-1M27 1h1v7h-1M28 1h6v1h-6M7 2h1v6h-1M13 2h4v1h-4M19 2h2v1h-2M24 2h1v1h-1M33 2h1v6h-1M3 3h3v3h-3M9 3h1v2h-1M12 3h1v2h-1M13 3h1v1h-1M15 3h1v3h-1M16 3h1v1h-1M18 3h1v4h-1M22 3h2v1h-2M25 3h1v2h-1M29 3h3v3h-3M10 4h3v1h-3M14 4h2v2h-2M17 4h1v1h-1M23 4h1v1h-1M11 5h1v1h-1M16 5h1v1h-1M22 5h1v2h-1M9 6h1v3h-1M13 6h1v4h-1M19 6h1v3h-1M20 6h1v1h-1M24 6h1v1h-1M2 7h6v1h-6M11 7h1v1h-1M15 7h1v1h-1M17 7h1v2h-1M21 7h1v1h-1M23 7h1v1h-1M25 7h1v1h-1M28 7h6v1h-6M10 8h1v1h-1M16 8h1v4h-1M18 8h2v1h-2M22 8h1v2h-1M1 9h1v3h-1M2 9h1v1h-1M4 9h1v2h-1M7 9h2v1h-2M11 9h1v2h-1M15 9h2v3h-2M20 9h2v2h-2M25 9h4v1h-4M30 9h2v1h-2M33 9h1v3h-1M3 10h4v1h-4M9 10h1v4h-1M10 10h2v1h-2M14 10h5v1h-5M23 10h3v1h-3M27 10h1v1h-1M29 10h1v1h-1M31 10h1v2h-1M32 10h1v1h-1M2 11h1v1h-1M6 11h1v3h-1M7 11h2v1h-2M13 11h1v1h-1M21 11h2v1h-2M24 11h1v2h-1M26 11h1v7h-1M28 11h1v1h-1M30 11h2v1h-2M4 12h1v2h-1M12 12h1v1h-1M18 12h3v1h-3M22 12h1v2h-1M7 13h3v1h-3M11 13h1v2h-1M14 13h3v1h-3M21 13h3v1h-3M27 13h3v2h-3M32 13h1v3h-1M3 14h1v2h-1M5 14h1v1h-1M10 14h1v2h-1M16 14h2v2h-2M18 14h2v1h-2M21 14h1v1h-1M23 14h1v3h-1M31 14h3v1h-3M2 15h2v1h-2M6 15h1v3h-1M7 15h1v1h-1M9 15h1v5h-1M13 15h5v1h-5M19 15h1v3h-1M25 15h3v1h-3M29 15h1v5h-1M30 15h1v1h-1M4 16h1v1h-1M8 16h1v3h-1M12 16h1v1h-1M16 16h1v1h-1M18 16h2v2h-2M21 16h2v2h-2M24 16h1v1h-1M31 16h1v4h-1M1 17h1v1h-1M5 17h7v1h-7M13 17h1v1h-1M20 17h1v3h-1M28 17h2v3h-2M30 17h1v1h-1M33 17h1v6h-1M2 18h1v1h-1M5 18h1v2h-1M10 18h1v1h-1M12 18h1v1h-1M14 18h2v1h-2M22 18h1v1h-1M25 18h1v1h-1M27 18h2v3h-2M32 18h1v2h-1M3 19h5v1h-5M11 19h1v1h-1M19 19h2v1h-2M23 19h1v1h-1M1 20h1v3h-1M3 20h1v2h-1M8 20h1v1h-1M10 20h1v5h-1M15 20h2v1h-2M21 20h2v1h-2M24 20h1v2h-1M26 20h3v1h-3M7 21h1v1h-1M9 21h1v2h-1M14 21h1v1h-1M16 21h2v4h-2M18 21h1v1h-1M22 21h4v1h-4M29 21h1v9h-1M30 21h1v2h-1M32 21h1v1h-1M5 22h1v1h-1M15 22h1v2h-1M21 22h1v2h-1M26 22h5v1h-5M2 23h1v3h-1M3 23h2v1h-2M7 23h1v1h-1M11 23h1v2h-1M13 23h6v1h-6M20 23h1v3h-1M24 23h2v1h-2M31 23h2v1h-2M1 24h1v1h-1M9 24h4v1h-4M18 24h1v2h-1M23 24h1v6h-1M25 24h6v2h-6M32 24h1v6h-1M3 25h7v1h-7M12 25h5v1h-5M24 25h8v1h-8M13 26h1v1h-1M16 26h2v2h-2M19 26h1v4h-1M22 26h1v1h-1M25 26h1v4h-1M31 26h1v3h-1M33 26h1v1h-1M1 27h1v7h-1M2 27h6v1h-6M9 27h3v1h-3M14 27h7v1h-7M27 27h1v1h-1M7 28h1v6h-1M10 28h6v1h-6M22 28h1v1h-1M30 28h2v1h-2M3 29h3v3h-3M11 29h1v2h-1M16 29h2v3h-2M18 29h3v1h-3M24 29h6v1h-6M33 29h1v3h-1M9 30h5v1h-5M15 30h3v2h-3M18 30h1v1h-1M21 30h1v2h-1M24 30h1v1h-1M26 30h1v1h-1M28 30h1v4h-1M30 30h1v1h-1M10 31h1v1h-1M14 31h4v1h-4M19 31h1v2h-1M22 31h1v1h-1M29 31h1v3h-1M31 31h1v1h-1M9 32h1v2h-1M11 32h4v1h-4M18 32h1v2h-1M23 32h1v2h-1M2 33h6v1h-6M10 33h2v1h-2M13 33h1v1h-1M21 33h4v1h-4M30 33h1v1h-1M32 33h1v1h-1"></path></svg> Pour tous les autres symboles voire cette fiche&nbsp;: _[https://usefulshortcuts.com/downloads/ALT-Codes.pdf]_

[https://usefulshortcuts.com/downloads/ALT-Codes.pdf]: https://usefulshortcuts.com/downloads/ALT-Codes.pdf "Dans un nouvel onglet" target="_blank"

<!--

> Sous linux plusieurs combinaisons de clavier existes. Les plus répendus sont&nbsp;:

- &darr;<kbd>CTRL</kbd>&darr; + &darr;<kbd class="tab maj">&#8679;</kbd>&darr; + <kbd>U</kbd><kbd>2</kbd><kbd>0</kbd><kbd>3</kbd><kbd>D</kbd>

| Bonus | symbole |
|---|
|0x203D ou 0d8253 exclarrogatif | &#x203D;  
0x2E18 ou 0d11800 | &#x2E18;  
0x2049 ou 0d8265 | &#x2049;  
0x2048 ou 0d8264 | &#x2048;

-->
<br/><br/>
<span class="noScreen">Retrouvez ce document en ligne prêt à imprimer sur <https://labna.github.io/raccourci_clavier.html></span><br/>
<span class="noScreen">QrCode generated with <https://github.com/udwarf/qrcode-compact-svg></span>

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
  @media print{
    &.maj{
      font-size: 1.2em;
      line-height: 0.9;
      display: inline-block;
      font-weight: bolder;
    }
  }
}
.enter{
  height: 50px;
  width: 50px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%, 25% 50%, 0 50%)
}
.qrcode{
  height: 100px;
  height: 3cm;
  float: right;
  @media screen{
    display: none;
  }
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
  > dt:first-child{
    margin-top:0;
  }
}
dt{
  /* break-before: always; */
  break-after: avoid;
}
@media screen {
  .noScreen{
    display: none;
  }
  .mist{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: white;
    -webkit-mask-image: linear-gradient(to top, black 0, transparent 25%);
    mask-image: linear-gradient(to top, black 0, transparent 25%);
    bottom: 0;
    left: 0;
    pointer-events: none;
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
  /*-webkit-font-smoothing: antialiased;*/
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
:is(h1, h2, h3, h4, h5, h6) p {
  margin-top: 0; }
li p.first {
  display: inline-block; }
li {
  margin: 0;}
ul, ol, menu, dir{
  padding-left: 30px;
  list-style-type: "\2023  ";/*"\2726  "; "\2622";
  list-style-type: symbols(cyclic "\2630" "\2631" "\2632" "\2633" "\2634" "\2635" "\2636" "\2637");*/
/*&nbsp;:is(ol, ul, menu, dir) ul{ */
  ul{
    list-style-type&nbsp;: disc; }
}
ul&nbsp;:first-child, ol&nbsp;:first-child {
  margin-top: 0; }
dl {
  padding: 0; 
  dt {
    font-size: 14px;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px; }
  dt:first-child {
    padding: 0; }
  dt:first-child, dt >&nbsp;:first-child {
    margin-top: 0; }
  dt >&nbsp;:last-child {
    margin-bottom: 0; }
  dd {
    margin: 0 0 15px;
    padding: 0 15px; }
  dd >&nbsp;:first-child {
    margin-top: 0; }
  dd >&nbsp;:last-child {
    margin-bottom: 0; }
}
blockquote {
  border-left: 4px solid #dddddd;
  padding: 0 15px;
  color: #777777; }
blockquote >&nbsp;:first-child {
  margin-top: 0; }
blockquote >&nbsp;:last-child {
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
  font-weight:;
  border: 1px solid #cccccc;
  margin: 0;
  padding: 6px 13px; }
table tr td {
  border: 1px solid #cccccc;
  margin: 0;
  padding: 6px 13px; }
table tr th&nbsp;:first-child, table tr td&nbsp;:first-child {
  margin-top: 0; }
table tr th&nbsp;:last-child, table tr td&nbsp;:last-child {
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
  margin:0 auto 10vh;
  }
}
@media print {
  body{
    padding: 0;
    margin-bottom: 0;
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
La touche "Windows" <key style="display:inline-block;width:1em;padding:5px;fill:white;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg></key> est représenté par son nom générique&nbsp;: <key>Super</key>
-->

<!--
⭾ 0x2B7E
↹ 0x2189

┌┐ 250C 2510
└┘ 2514 2518

╭─┬╮ 256D 2500 252C 256E 
│ ││ 2502
├─┼┤ 251C 2500 253C 2524
╰─┴╯ 2570 2500 2534 256F

╱╲ 2571 2572
╳ 2573

╔═╦╗ 2554 2550 2567 2557
║ ║║ 2551
╠═╬╣ 2560 2550 256C 2563
╚═╩╝ 255A 2550 2569 255D

╓─╥╖ 2553 2500 2565 2556
║ ║║ 2551
╟─╫╢ 255F 2500 256B 2562
╙─╨╜ 2559 2500 2568 255C

╒═╤╕ 2552 2550 2564 2555
│ ││ 2502
╞═╪╡ 255E 2550 256A 2561
╘═╧╛ 2558 2550 2567 255B

 ╷  2577
╶┼╴ 2576 253C 2574
 ╵  2575
-->

<!--
Pour générer des QrCode léger :

dans une sandbox, ouvrir un terminal CMD :
> curl -o node.setup.msi https://nodejs.org/dist/v24.12.0/node-v24.12.0-x64.msi
> node.setup.msi

> curl -o qrcode-compact.min.js  https://raw.githubusercontent.com/udwarf/qrcode-compact-svg/master/dist/qrcode-compact.min.js
> node.exe

> var QRCode = require("./qrcode-compact.min.js");
> const fs = require('fs');
> var svg = new QRCode("https://support.microsoft.com/fr-fr/office/raccourcis-clavier-dans-word-95ef89dd-7142-4b50-afb2-f762f663ceb2").svg();
> fs.writeFile("file.svg", svg, function(err){});

Il faut ajouter la class : class="qrcode" et enlever les sauts de lignes pour avoir un qrcode ultra leger !

traitement du fichier post-extraction&nbsp;:
// replace&nbsp;: \n\n -> \n
// replace&nbsp;: i> <k -> i><k
// replace&nbsp;: </ul></li> -> </ul>\n</li>

// all style lines&nbsp;: Edit->Line->Join Lines
// replace / {2,}/ → / /
// replace /\n+/ → //

Add <!DOCTYPE html>
join all lines.
supprimer les commentaires : /\n*<!-- .*? --Δ>\n*/

Ne pas utilisé:
Upload the file here&nbsp;: https://codebeautify.org/minify-html
!! les nesting CSS (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting)
dans .qrcode et dt (1ere partistyle) sont supprimé par l'outil
!! la compression supprime les espaces entre les bloques ce qui rend trop complexe la restauration des espaces utiles.

-->
</body>
</html>