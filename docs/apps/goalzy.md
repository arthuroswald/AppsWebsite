# Goalzy — brief produit

> Source produit consultée : dépôt Goalzy au commit
> `d3688d697df69c20326a6d1e176044286c644918` (`main`, 18 juillet 2026).

## Positionnement

Goalzy est un outil de décision visuel et ludique. L’app transforme les petits choix
du quotidien en matchs courts inspirés du sport : l’utilisateur ne tire pas simplement
une réponse au hasard, il regarde ses options s’affronter dans une arène animée.

La promesse retenue pour l’App Store est celle d’un *fun decision maker* : une manière
rapide et accessible de départager des idées entre amis, en couple ou en famille.

## Fonctionnement

1. L’utilisateur saisit entre 2 et 8 choix.
2. Chaque choix reçoit un nom, un emoji et une couleur automatique.
3. L’utilisateur sélectionne un mode et, si nécessaire, un réglage sportif.
4. Une balle par choix évolue dans une arène circulaire dont les zones de score tournent.
5. Goalzy annonce le gagnant et affiche les scores finaux.

Les choix restent disponibles pour lancer une nouvelle décision. La V1 ne comporte ni
compte, ni historique, ni synchronisation cloud, ni partage.

### Modes de jeu

- **But en or / Golden Goal** : le premier choix qui marque gagne immédiatement.
- **Score gagnant / Winning Score** : le premier choix à atteindre le score cible gagne.
  Les réglages sont le tennis (7 points), le ping-pong (11) et le volley (25).
- **Temps réglementaire / Regulation Time** : le meilleur score à la fin du temps gagne.
  Les réglages sont le basket (40 secondes), le handball (60) et le football (90).
  Une égalité en tête se termine par un but en or entre les choix concernés.

L’arène possède sept identités : neutre, football, basket, handball, tennis,
ping-pong et volley. Les sports modifient le rythme, les zones et l’habillage sans
remplacer le moteur de jeu partagé.

## Langues

- Anglais, langue App Store principale et langue de repli.
- Français, localisation complète.

L’app choisit la langue de l’appareil lorsqu’elle est prise en charge et permet une
sélection persistante dans les réglages.

## Métadonnées App Store décidées

### Identité et classement

| Champ | Anglais (États-Unis) | Français |
| --- | --- | --- |
| Nom | Goalzy: Fun Decision Maker | Goalzy |
| Sous-titre | Turn choices into games | Le jeu qui décide pour vous |
| Catégorie principale | Entertainment | Divertissement |
| Catégorie secondaire | Games | Jeux |
| Sous-catégories Jeux | Casual, Sports | Parties rapides, Sports |

Le nom étendu anglais est nécessaire car `Goalzy` seul n’était pas disponible dans
cette localisation. Le nom affiché sous l’icône reste Goalzy.

### Texte promotionnel

**Anglais**

> Turn everyday choices into a game! Add 2–8 options, choose a mode, and watch
> Goalzy settle the decision in colorful sports-inspired matches.

**Français**

> Transformez vos choix du quotidien en jeu ! Ajoutez 2 à 8 options, choisissez un
> mode et regardez Goalzy trancher dans des matchs sportifs hauts en couleur.

### Mots-clés

- **Anglais** : `random,picker,chooser,group,party,friends,family,debate,settle,sports,match,activity,food,movie`
- **Français** : `décision,hasard,aléatoire,choix,groupe,amis,famille,soirée,départager,sport,match,activité,repas`

### Description anglaise

Some decisions don’t need another debate. They need a match.

Where should you eat? What should you watch? Who goes first? Which idea should win?
Goalzy turns everyday choices into colorful, sports-inspired games—and lets the
action decide.

**HOW IT WORKS**

1. Add 2 to 8 choices.
2. Give each one a name and an emoji.
3. Pick a game mode.
4. Watch the match and discover the winner.

**THREE WAYS TO DECIDE**

- Golden Goal — The first choice to score wins. Fast, simple, decisive.
- Winning Score — Choose tennis, table tennis, or volleyball. The first choice to
  reach the target score wins.
- Regulation Time — Choose basketball, handball, or football. The highest score at
  the end of the match wins. If the leaders are tied, Golden Goal settles it.

**FOR ALL YOUR EVERYDAY CHOICES**

Use Goalzy to choose tonight’s meal, pick a movie, settle a friendly debate, decide
who goes first, select an activity, or choose between several ideas.

**WHY GOALZY?**

- Quick setup for 2 to 8 choices
- Colorful options with emojis
- Distinct sports-inspired arenas
- Short, lively matches
- Clear results for every choice
- Available in English and French
- No account required

Goalzy doesn’t just pick an answer. It makes deciding the fun part.

### Description française

Certains choix n’ont pas besoin d’un débat de plus. Ils ont besoin d’un match.

Où manger ? Que regarder ? Qui commence ? Quelle idée doit l’emporter ? Goalzy
transforme vos choix du quotidien en jeux sportifs hauts en couleur et laisse le
match trancher.

**COMMENT ÇA MARCHE ?**

1. Ajoutez de 2 à 8 choix.
2. Donnez à chacun un nom et un emoji.
3. Sélectionnez un mode de jeu.
4. Regardez le match et découvrez le gagnant.

**TROIS FAÇONS DE DÉCIDER**

- But en or — Le premier choix qui marque l’emporte. Rapide, simple et décisif.
- Score gagnant — Choisissez le tennis, le ping-pong ou le volley. Le premier choix
  qui atteint le score cible gagne.
- Temps réglementaire — Choisissez le basket, le handball ou le football. Le meilleur
  score à la fin du match l’emporte. En cas d’égalité en tête, un but en or tranche.

**POUR TOUS VOS CHOIX DU QUOTIDIEN**

Utilisez Goalzy pour choisir le repas du soir, trouver un film, régler un débat entre
amis, décider qui commence, sélectionner une activité ou départager plusieurs idées.

**POURQUOI GOALZY ?**

- Configuration rapide de 2 à 8 choix
- Des options colorées avec des emojis
- Des arènes inspirées de différents sports
- Des matchs courts et animés
- Un résultat clair pour chaque choix
- Disponible en français et en anglais
- Aucun compte requis

Goalzy ne se contente pas de donner une réponse : l’app transforme la décision
elle-même en moment de jeu.

## Pages publiques nécessaires

- **Marketing** : expliquer la promesse, le parcours, les trois modes et les univers
  sportifs. Cette page servira d’URL marketing dans l’App Store.
- **Assistance** : fournir un contact fonctionnel, une FAQ et les informations utiles
  pour diagnostiquer un problème. Contact provisoire : `o6art7@gmail.com`.
- **Confidentialité** : décrire fidèlement l’absence de collecte, de suivi, de compte,
  de publicité et d’analytics, ainsi que le stockage local des préférences. Responsable :
  Arthur Oswald.

## Éléments visuels réutilisables

- `assets/images/brand/icon.png` : icône carrée 1024 × 1024.
- `assets/images/brand/title.png` : titre Goalzy transparent 1024 × 399.
- `assets/images/brand/splash.png` : composition verticale 853 × 1844.
- Police d’affichage : Luckiest Guy ; corps : police système.
- Couleurs principales : vert `#78C80F`, vert sombre `#245D0B`, fond `#F6FFE8`,
  action `#2F7D12`, texte `#173A0D`, surface blanche.
- Style : formes arrondies, ombres vertes, titre blanc en relief et ambiance sportive
  énergique. L’identité Goalzy doit rester limitée à sa carte et ses pages afin que le
  site puisse accueillir des apps visuellement différentes.

Les fichiers réutilisés doivent être copiés dans AppsWebsite avec leur provenance ;
le site ne doit jamais dépendre d’un chemin local vers le dépôt Goalzy.
