---
title: miwifiRouter
author: SupraDolph
date: 2019-11-12 00:00:00 +0100
# categories: [jeedom-doc, openWrt]
# tags: []
toc: true
pin: true
lang: fr-FR
---

## Description

Ce plugin permet de lister les équipements WiFi de votre routeur Xiaomi

## Prérequis et dépendances

Avoir un routeur Xiaomi. Testé sur un Xiaomi AC2100, mais doit être compatible avec les gammes Mi Router 3 et Mi Router 4

## Rendu visuel

Ce plugin n'a pas de rendu visuel spécifique, il est basé sur le standard de Jeedom.

## Configuration

### Configuration du plugin

Renseigner l'adresse IP du routeur ainsi que le mot de passe administrateur.

Sélectionner la fréquence d'actualisation des informations (il est possible de décocher les cron non concernés).

![](/images/miwifiRouterMainConfig.png)

### Ajout d'un widget

Depuis le menu de gestion, ajoutez un widget. Sélectionnez l'équipement désiré (il doit être connecté sur votre routeur).

![](/images/miwifiRouterAddEquipment.png)

### Configuration générale du widget

Le nom de l'équipement et l'adresse mac sont récupérés automatiquement.

![](/images/miwifiRouterConfigEquipment.png)

Sauvegarder pour créer les commandes associées

### Ajout des commandes

Les commandes sont créées automatiquement lors de la sauvegarde :

![](/images/miwifiRouterConfigCommands.png)

## Bugs connus

1.  N/A

## Changelog

V1.0

*   Version initiale
