# Amazing Angular Template B3

## Sommaire

- [Amazing Angular Template B3](#amazing-angular-template-b3)
  - [Sommaire](#sommaire)
  - [Description](#description)
    - [Sujet](#sujet)
    - [Objectifs](#objectifs)
  - [Contraintes Techniques](#contraintes-techniques)
    - [Technologies](#technologies)
    - [Front-End](#front-end)
    - [Back-End](#back-end)
    - [API & BDD](#api--bdd)
  - [Organisation](#organisation)
    - [Fonctionnement](#fonctionnement)
    - [Procédure Versioning](#proc%C3%A9dure-versioning)
      - [Les différentes Commandes](#les-diff%C3%A9rentes-commandes)
      - [Branches](#branches)
      - [Exemples](#exemples)
      - [Commits](#commits)
      - [Les types de commit](#les-types-de-commit)
      - [Validation](#validation)
  - [Installation](#installation)
    - [Outils](#outils)
    - [Développement](#d%C3%A9veloppement)
  - [Application](#application)
    - [Lancement](#lancement)
    - [Build](#build)
  - [Informations sur le projet](#informations-sur-le-projet)
    - [Répartition](#r%C3%A9partition)
    - [Dates](#dates)
  - [Afin de vous accompagner dans la réalisation de ce projet, nous nous retrouverons à Ynov à ces dates :](#afin-de-vous-accompagner-dans-la-r%C3%A9alisation-de-ce-projet-nous-nous-retrouverons-%C3%A0-ynov-%C3%A0-ces-dates)
    - [Soutenances](#soutenances)
      - [Date](#date)
      - [Modalités](#modalit%C3%A9s)
    - [Rendus attendus](#rendus-attendus)
  - [Ressources complémentaires](#ressources-compl%C3%A9mentaires)
    - [Angular](#angular)
    - [Developpement](#developpement)
    - [API](#api)
    - [UI Design](#ui-design)

---

## Description
### Sujet
Le but du projet sera de concevoir un tableau de bord permettant l'affichage de graphiques et statistiques recueillies à partir d'API gouvernementales disponibles sur data.gouv.fr ou les sites de différentes collectivités territoriales comme les grandes villes, les départements ou les régions. L'utilisateur devra être capable d'activer ou désactiver l'affichage de chacun des jeux de données. Il pourra également avoir accès à des statistiques et graphiques. Aucune connexion utilisateur ne doit être réquise pour accéder à ces données.

Nous nous concentrerons sur les données des parkings public présent dans 3 villes (Nantes, Angers, Renne). Les api sont disponibles 
+ [Angers](https://data.angers.fr)
+ [Nantes](https://data.nantesmetropole.fr)
+ [Rennes](https://data.rennesmetropole.fr)

### Objectifs
Après ce projet, vous devriez être capable de :
+ Comprendre la logique de développement par composant
+ Concevoir une application responsive avec expérience utilisateur adaptée
+ Travailler avec Angular 2+ et SASS
+ Manipuler des données et les présenter à l'utilisateur
+ Administrer et interroger des données distantes

## Contraintes Techniques

> Attention, le respect scrupuleux de ces contraintes concernera une partie non négligeable de la notation.


L'application devra posséder les fonctionnalités suivantes :
- Activer ou désactiver un jeu de données
- Faire des statistiques à partir des données
- Utiliser des graphiques
- Pouvoir gérer et modifier la plage d'affichage des données (cette semaine, 30 derniers jours, de telle date à telle date, etc...)
- Utiliser une api data.gouv.fr (météo, qualité de l'air, etc...)
- Combiner les données d'au moins 3 API (data.gouv.fr + collectivités locales)
- (INFRA) Déploiement automatique sur le serveur à chaque push sur la branche master

### Technologies
- Angular 6+
- SASS

### Front-End
- Respecter l'architecture donnée
- Respecter les principes de la programmation par composant
- Concevoir des composants dans des fichiers dédiés
- Concevoir des services dans des fichiers dédiés
- Concevoir des models dans des fichiers dédiés

### Back-End
Si une couche "Back-end" est nécessaire pour votre application, nous vous laissons la possibilité de choisir les langages et librairies que vous utiliserez. Ce choix devra cependant être justifié et vous devrez l'expliquer lors de la soutenance.

### API & BDD
- FACULTATIF : Eventuellement concevoir une BDD locale pour stocker les données distantes (JSON, MySQL, ...)
- Utiliser les API gouvernementales et des collectivités territoriales.

## Organisation
> Pour nous faciliter la correction et la compréhension de votre méthode de travail ainsi que de l'organisation de votre groupe, les règles d'organisation énoncées ci-après sont à respecter et compteront dans la notation du travail final.

### Fonctionnement

Pour répondre au sujet, il suffit de 'fork' le sujet puis de suivre la procédure d'[installation](#installation). Il est impératif d'utiliser un gestionnaire de version tel que GIT pour répondre au sujet. Afin de faciliter cette gestion, nous vous proposons une procédure complète pour vous permettre de comprendre et d'utiliser ces outils le plus efficacement possible.

### Procédure Versioning
Git est un outil qui va vous permettre de gérer les différentes versions du code de la plateforme. Pour cela, nous vous proposons une procédure stricte à respecter afin que chacun puisse s'y retrouver facilement.

#### Les différentes Commandes

`git fetch origin` : permet de mettre à jour le repos local par rapport au repos distant

`git checkout -b <nom_de_branche> `: permet de créer une nouvelle branche à partir de la branche actuelle et de se positionner sur celle-ci.

`git rebase`: permet de récupérer les mises à jour distantes et d'y appliquer les modifications locales

`git push`: permet d'envoyer les commits locaux sur le repos distant

`git commit -m <info_du_commit>`: permet de créer un commit avec les changement précédemment ajouté

`git add -i` : propose un menu pour gérer les différentes modifications apportées au repos local.
#### Branches
On aura deux types de développements : soit feature, soit fix. On travaille sur une branche spécifique à chaque développement.
A chaque fois que vous vous apprétez à réaliser une action, vous devez mettre à jour votre repos local grâce à la commande `git fetch origin`
Il est important de créer une nouvelle branche pour chaque développement de fonctionnalité afin de faciliter la gestion des versions, la modification ou la correction de bug.
#### Exemples
S'il s'agit d'une feature : `git checkout -b features/my_feature_branch_name origin/develop`
S'il s'agit d'une correction de bug : `git checkout -b fixes/my_fix_branch_name origin/develop`
#### Commits
Un commit permet de regrouper un ensemble de modifications, d'ajouter une fonctionnalité ou de corriger un bug. Les commits doivent être concis et les plus petits possibles : une fonctionnalité représente un commit.
Le message d'un commit doit être construit suivant le modèle suivant :
`<type>(périmètre) sujet`
Chaque message de commit doit faire obligatoirement moins de 100 caractères et doit idéalement faire part de la correction unique du commit.
#### Les types de commit
Le type d'un commit peut être :

`feat` : Nouvelle fonctionnalité

`fix` : Correction d’un bug

`refactor` : Modification du code qui ne corrige rien ou n’ajoute rien mais rend l’ensemble plus cool ou prépare le terrain pour une nouvelle fonctionnalité.

`style` : Modification du style.

`perf` : Modification du code qui améliore les performances.

`test` : Ajout ou modification de tests.

`build` : Modification sur le système de build (gradle, gulp, ionic, angular, ...).

`docs` : Modification sur la doc uniquement.

`misc` : Tout ce qui ne va pas dans un autre type.

Les périmètres possibles

`fo` : pour des modifications effectuées sur le front-office de la plateforme

`bo` : pour des modifications effectuées sur le back-office de la plateforme

`all` : pour des modifications génériques à l'ensemble de la plateforme

#### Validation
Pour envoyer un développement sur le repos distant, vous devez effectuer, dans l'ordre, les commandes suivantes :
`git fetch`
`git rebase`
`git push`

## Installation
### Outils

La première chose à faire est d'installer NODEJS sur votre machine. Pour cela, il suffit de télécharger ce logiciel. A l'aide d'un terminal, vérifiez que NPM est bien installé en tapant les commandes suivantes :
`node -v`
`npm -v`

Vous pouvez à présent installer Angular. Nous passerons par l'installation via Angular CLI, et nous installerons la dernière version d'Angular dispnible. Pour cela, ouvrez un terminal et tapez les commandes suivantes :
`npm install -g @angular/cli`

Afin d'avoir un environnement de développement stables et commun à tout le monde, nous vous proposons d'installer l'environnement suivant: 

+ **Visual Studio Code** : Editeur de code, il est léger, open source et possède de nombreux plugin.
+ **GitKraken** : Aide au versioning, il permet d'utiliser GIT dans une interface graphique. Il facilite les différentes actions de la procédure GIT.
+ **Figma / Adobe XD** : Afin de pouvoir avoir une vision claire et cohérente de votre objectif de développement, nous vous conseillons de réaliser des maquettes ou des wireframes avant tout développement.
### Développement

+ **Créer un nouveau composant** : Afin de pouvoir créer un nouveau composant et profiter de la génération automatique, vous pouvez utiliser la commande suivante `ng g c components/my-component-name`. Angular CLI s'occupera également de faire l'ensemble des déclarations nécessaire.

+ **Créer un nouveau service** : Afin de pouvoir créer un nouveau service et profiter de la génération automatique, vous pouvez utiliser la commande suivante `ng g service services/my-service-name`. Angular CLI s'occupera également de faire l'ensemble des déclarations nécessaire.

+ **Créer un nouveau pipe** : Afin de pouvoir créer un nouveau pipe et profiter de la génération automatique, vous pouvez utiliser la commande suivante `ng g pipe pipes/my-pipe-name`. Angular CLI s'occupera également de faire l'ensemble des déclarations nécessaire.

## Application
### Lancement

Lancez le projet grâce à la commande `ng serve` pour un serveur de développement local. La preview est ensuite disponible directement sur [localhost/4200](https://localhos/4200)

### Build

Une fois votre travail terminé, il est important de savoir générer les dossiers prêts à être mis en ligne. Pour cela, vous pouvez utiliser la commande `ng build my-app-name --prod` . Avant d'effectuer ce build, vous devez impérativement inscrire le numéro de version de l'application dans le fichier approprié.

Une fois le build terminé, l'ensemble des fichiers est disponible dans le répertoire `my-app-name/dist/` de votre projet.

## Informations sur le projet

### Répartition
Il s'agit d'un projet de groupes composés de 4 à 5 personnes. Le rôle de chacun au sein de chaque groupe sera à définir lors du lancement du projet.

### Dates
Afin de vous accompagner dans la réalisation de ce projet, nous nous retrouverons à Ynov à ces dates :
------

### Soutenances
#### Date
Les soutenances auront lieu le **------** à Ynov.
#### Modalités
Chaque groupe disposera d'un total de **15 minutes** à l'oral réparties comme suit :
+ **10 minutes** de présentation
+ **5 minutes** de questions

Lors de cette soutenance, il sera donc nécessaire de présenter les aspects suivant :
+ Présentation du concept
+ Présentation des outils utilisés
+ Présentation des choix techniques

Chaque groupe est libre de présenter en plus de cela des éléments qui sembleraient pertinents.
### Rendus attendus

Nous attendons pour ce projet un rendu fonctionnel qui compile sans aucune erreur ou "warning". Plus spécifiquement, nous souhaitons recevoir par mail (loic.vanderschooten@ynov.com ET lucas.billet@ynov.com) les éléments suivants au plus tard le **----** :
+ Le lien de votre fork du projet sur Gitlab (Attention à bien donner les droits aux utilisateurs suivant : @CaptainFloax ET @LcsBillet)
+ Une archive contenant les fichiers prêts à être mis en ligne
+ Votre support de présentation pour la soutenance
+ (option) Une documentation utilisateur expliquant les différentes fonctionnalités et leurs applications
+ (option) Des maquettes / Wireframes ayant aidé à la conception de l'application

> Tout élément nous parvenant **après la date limite ne sera pas pris en considération** et fera l'objet d'un malus.
> Le respect de ces règles de rendu (repos gitlab, archive, support) sera pris en compte lors de la notation.

## Ressources complémentaires
### Angular
+ [Documentation](https://angular.io/docs)
+ [Tuto Angular](https://angular.io/tutorial)
+ [NPM Package Manager](https://docs.npmjs.com/cli/install)

### Developpement
+ [Site web Sass](https://sass-lang.com/)
+ [Documentation Sass](https://sass-lang.com/documentation)
+ [Les commandes Git](https://git-scm.com/docs)

### API
+ [Tuto API NodeJS](https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/)
+ [Tuto API PHP](https://www.techiediaries.com/php-rest-api/)

### UI Design
+ [Inspiration](https://dribbble.com)
+ [Unsplash](https://unsplash.com)
+ [Flaticon](https://flaticon.com)