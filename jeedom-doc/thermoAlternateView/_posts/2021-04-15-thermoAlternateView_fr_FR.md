---
title: thermoAlternateView
author: SupraDolph
date: 2017-11-09 00:00:00 +0100
# categories: [jeedom-doc, openWrt]
# tags: []
toc: true
pin: true
lang: fr_FR
---

## Description

Ce plugin est une alternative d'affichage au widget standard du plugin Thermostat. Il ne s'agit pas d'un thermostat autonome et n'est pas compatible avec d'autre thermostats.

## Prérequis et dépendances

Le plugin **thermostat** doit être configuré avec au moins un thermostat actif.

Le plugin **agenda** est facultatif mais est nécessaire afin d'afficher l'heure de prochaine consigne.

### Configuration des modes du plugin Thermostat

Le sélecteur de modes utilise des icônes qui sont associés au nom du mode du thermostat. Pour que le visuel soit optimal (icônes), le thermostat doit comporter des modes ayant pour nom **Jour**, **Nuit**, **Confort**, **Eco**, **Boost**, **Télétravail**, **Vacances**, **Vacance**, **Hors gel**, **Confort -2**, **Cheminée** et/ou **Absent**.

![](/jeedom-doc/{{ page.title }}/images/thermoAlternateViewConfigModes.png)

## Rendu visuel

### Dark

![](/jeedom-doc/{{ page.title }}/images/thermoAlternateViewDark.png)

### Light

![](/jeedom-doc/{{ page.title }}/images/thermoAlternateViewLight.png)

### DarkAtmo

![](/jeedom-doc/{{ page.title }}/images/thermoAlternateViewDarkatmo.png)

### SimpleLight

![](/jeedom-doc/{{ page.title }}/images/thermoAlternateViewSimplelight.png)

Pensez à configurer les couleurs des modes chauffage, climatisation et suspendu.

### SimpleDark

![](/jeedom-doc/{{ page.title }}/images/thermoAlternateViewSimpledark.png)

Pensez à configurer les couleurs des modes chauffage, climatisation et suspendu.

## Configuration

### Ajout d'un widget

Depuis le menu de gestion, ajoutez un widget. ![](/jeedom-doc/{{ page.title }}/images/thermoAlternateViewConfigMain.png)

### Configuration générale du widget

*   **Nom de l'équipement thermoAlternateView** : Il s'agit du nom affiché en haut du widget
*   **Objet parent** : Permet de classer le widget dans Jeedom
*   **Catégorie** : Permet de catégoriser le widget dans Jeedom
*   **Activer/ Visible** : Permet d'activer/ afficher le widget dans Jeedom
*   **Thermostat** : Permet de sélectionner le thermostat dont le widget va remplacer le rendu
*   **Template** : Permet de choisir le rendu visuel du widget

![](/jeedom-doc/{{ page.title }}/images/thermoAlternateViewConfigEquipement.png)

### Configuration des options du widget

*   **Unité** : Unité de température affichée sur le widget (° par défaut)
*   **Utiliser la couleur de fond du widget** : Permet d'utiliser la couleur de widget Jeedom plutôt que celle du template
*   **Température extérieure visible** : Permet d'afficher la température extérieure (configurée dans le thermostat)
*   **Hygrométrie visible** : Permet d'afficher l'hygrométrie
*   **Commande d'hygrométrie** : Consigne d'hygrométrie affichée sur le thermostat
*   **Puissance visible** : Permet d'afficher la puissance (configurée dans le thermostat)
*   **Masquer les modes** : Permet de ne pas afficher le sélecteur de modes
*   **Afficher la prochaine consigne (agenda)** : Affiche l'heure de la prochaine consigne de chauffage (expérimental). Cette fonctionnalité nécessite le plugin agenda.
*   **Afficher le nom de l'évènement (agenda)** : Affiche le nom du prochain évènement. Cette fonctionnalité nécessite le plugin agenda.
*   **Couleur icône mode chauffage** : Permet de modifier la couleur de l'icône de chauffe
*   **Couleur icône mode climatisation** : Permet de modifier la couleur de l'icône de refroidissement
*   **Couleur icône mode suspendu** : Permet de modifier la couleur de l'icône du mode suspendu
*   **Couleur icône verrouillé** : Permet de modifier la couleur de l'icône de verrouillage

![](/jeedom-doc/{{ page.title }}/images/thermoAlternateViewConfigOptions.png)

## Bugs connus

1.  Après chaque mise à jour merci de forcer la réactualisation du cache du navigateur
2.  Le rafraîchissement de la prochaine consigne ne fonctionne pas toujours
3.  La mise à jour ne fonctionne pas. Si vous êtes sous Jeedom V3 la dernière version supportée est la V2.4 

## Changelog

V3.3

*   Correction en mode hystérésis : La commande de puissance n'existe pas
*   Détermination du prochain mode lorsqu'il n'y a pas de commande de fin utilisée

V3.2

*   Correction du bug de détermination de la prochaine consigne lors de l'utilisation d'une consigne de thermostat et non d'un mode dans l'agenda
*   Ajout des modes télétravail et cheminée

V3.1

*   Arrondi de l'information d'hygrométrie (bug d'affichage)
*   Ajout d'un mode boost

V3.0

*   Suite à la suppression de l'information hygrométrie dans le plugin thermostat, ajout de la commande dans la configuration

>[!IMPORTANT]
>
>La consigne d'humidité a été supprimée du plugin thermostat. Afin de continuer à avoir cette information sur le plugin, veuillez configurer l'option associée.

V2.9

*   SimpleLight/Dark : La température interne n'était pas mise à jour

V2.8

*   Revue de l'ordre des modes
*   Pour SimpleLight/Dark : Affiche la température quand le thermostat est éteint

V2.7

*   Ajout des objets du mode design
*   Bugfixes pour SimpleLight et SimpleDark

V2.6

*   Correction % humidité
*   Ajout des template SimpleLight et SimpleDark

V2.5

*   Bugfixes
*   Revue du chargement des SVG pour éviter l'image résiduelle

V2.4

>[!IMPORTANT]
>
>Il s'agit de la dernière version pour Jeedom V3

*   Compatibilité Jeedom v4
*   Compatibilité php 7.3

V2.3

*   ATTENTION : Il faut vider le cache du navigateur et revalider les nouveaux paramètres dans la configuration !
*   Ajout du template darkatmo
*   Corrections esthétiques

V2.2

*   Ajout de la puissance
*   Bugfix vue mobile template Dark

V2.1

*   Bugfix

V2.0

*   Optimisation de l'espace
*   Traduction en_US
*   Ajout de l'hygrométrie

V1.12

*   Correction regression agendas inactifs
*   Ajout du nom de l'évènement

V1.11

*   Correction du problème de taille de widget à l'initialisation
*   Correction du problème d'agendas inactifs qui étaient pris en comptes

V1.10

*   Ajout de la documentation
*   Correction de la régression sur la catégorie

V1.9

*   Affichage des statistiques en mode dialogue
*   Ajout des catégories (ex: chauffage) dans la configuration du widget

V1.8

*   Mettre un icon ventilateur en mode froid et gestion de sa couleur
*   Ajout des modes Hors Gel et Confort -2
*   En backoffice, factorisation des images pour les différents visuels

V1.7

*   Choix de l'unité (°, %)
*   Afficher le prochain changement d'agenda
*   Gestion du mode "vacance"

V1.6

*   Ajouter le lien vers les historiques des commandes de température
*   Couleur du cadenas verrouillé
*   Gestion du mode suspendu

V1.5

*   Changer la couleur de l'icône sur le market : Identité visuelle requise par développeur
*   Ajouter des icons pour d'autres noms de mode : à jour et nuit

V1.4

*   Prise en charge de la configuration avancée d'affichage du Widget
*   Possibilité de masquer les modes
*   Possibilité de changer la couleur de la flamme de chauffe

V1.3

*   Correction du bug sur le bouton de verrouillage du template dark

V1.2

*   Factorisation du code
*   Ajout du plugin Dark
*   Ajout de la température extérieure

V1.1

*   Correction de bug
*   Ajout de la vue mobile
*   Ajout du lien vers les statistiques

V1.0

*   Version initiale
