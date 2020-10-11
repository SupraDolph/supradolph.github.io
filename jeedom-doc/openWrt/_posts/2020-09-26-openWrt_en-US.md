---
title: openWrt
author: SupraDolph
date: 2020-09-26 00:00:00 +0100
# categories: [jeedom-doc, openWrt]
# tags: []
toc: true
pin: true
lang: en-US
---

## Description

Ce plugin permet de lister les équipements de votre routeur openWrt

## Prérequis et dépendances

Avoir un routeur sous [openWrt](https://openwrt.org/).

## Rendu visuel

Ce plugin n'a pas de rendu visuel spécifique, il est basé sur le standard de Jeedom.

![](/jeedom-doc/{{ page.title }}/images/openWrtRouterWidget.png)

![](/jeedom-doc/{{ page.title }}/images/openWrtEquipmentWidget.png)

## Configuration Générale

### Configuration du plugin

Renseigner l'adresse IP du routeur ainsi que le compte et mot de passe administrateur (le plugin utilise une connexion SSH).

Sélectionner la fréquence d'actualisation des informations (il est possible de décocher les cron non concernés).

![](/jeedom-doc/{{ page.title }}/images/openWrtMainConfig.png)

## Configuration des équipements

![](/jeedom-doc/{{ page.title }}/images/openWrtConfig.png)

### Widget Router

Lors de la sauvegarde de la configuration générale, le widget _Routeur_ est créé automatiquement.

![](/jeedom-doc/{{ page.title }}/images/openWrtConfigRouter.png)

![](/jeedom-doc/{{ page.title }}/images/openWrtConfigCmdRouter.png)

### Ajout d'un équipement réseau

Depuis le menu de gestion, ajoutez un widget. Sélectionnez l'équipement désiré (il doit être connecté sur votre routeur i.e. avec un bail DHCP actif).

![](/jeedom-doc/{{ page.title }}/images/openWrtAddEquipment.png)

### Configuration générale du widget

Le nom de l'équipement et l'adresse mac sont récupérés automatiquement.

![](/jeedom-doc/{{ page.title }}/images/openWrtConfigEquipment.png)

Sauvegarder pour créer les commandes associées.

### Ajout des commandes

Les commandes sont créées automatiquement lors de la sauvegarde :

![](/jeedom-doc/{{ page.title }}/images/openWrtConfigCmdEquipment.png)

## Bugs connus

1.  N/A

## Changelog

V1.0

*   Version initiale