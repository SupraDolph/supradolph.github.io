---
title: harmanKardonRC
author: SupraDolph
date: 2018-12-30 00:00:00 +0100
# categories: [jeedom-doc, openWrt]
# tags: []
toc: true
pin: true
lang: fr-FR
---

## Description

Ce plugin est basé sur HKAPI ([https://github.com/KarimGeiger/HKAPI](https://github.com/KarimGeiger/HKAPI)) et permet de contrôler des amplificateurs de la marque Harman Kardon. Attention, cette API a été réalisée en reverse engineering car HK n'expose pas son API. Merci de lire attentivement le README associé, notamment pour connaitre les restrictions et matériels compatibles. A date :

*   Harman Kardon AVR 370
*   Harman Kardon AVR 170 - Fonctionne mais l'état ne remonte pas.
*   Harman Kardon AVR 171 - Fonctionne mais l'était ne remonte pas.
*   Harman Kardon HK 3700 - Fonctionne mais il y a des problème lors du réveil.
*   Harman Kardon BDS 7773w
*   Harman Kardon BDS 375

Pour l'instant la zone 2 n'est pas gérée.

## Prérequis et dépendances

N/A

## Rendu visuel

### Télécommande

Un rendu visuel spécifique a été élaboré afin de vous assurer la meilleure expérience possible.

![](/jeedom-doc/{{ page.title }}/images/harmanKardonRCTelecommande.png)

## Configuration

### Ajout d'un widget

Depuis le menu de gestion, ajoutez un widget.

### Configuration générale du widget

*   **Type de matériel** : Sélectionné le type de votre matériel (AVR : Amplificateur, ou BDS : Home Cinéma)
*   **IP de l'amplificateur** : Adresse IP de votre matériel. Elle doit être fixe ou réservée sur votre serveur DHCP

![](/jeedom-doc/{{ page.title }}/images/harmanKardonRCConfigMain.png)

### Ajout des commandes

Les commandes de base sont automatiquement ajoutées excepté les sources qui dépendent de votre équipement Il s'agit normalement de :

*   Cable Sat
*   Disc
*   DVR
*   Radio
*   TV
*   USB
*   Game
*   Media Server
*   Home Network
*   AUX
*   Source A
*   Source B
*   Source C
*   Source D

Le nom de la commande est affichée sur la télécommande du dashboard. La source doit correspondre à la source de votre amplificateur (normalement affichée dans le menu de celui-ci) ![](/jeedom-doc/{{ page.title }}/images/harmanKardonRCConfigCommands.png)

## Bugs connus

1.  N/A

## Changelog

V2.1

*   Compatibilité Php 7

V2.0

*   Compatibilité Jeedom V4

V1.0

*   Version initiale
