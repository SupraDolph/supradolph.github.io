---
title: openWrt
author: SupraDolph
date: 2020-09-26 00:00:00 +0100
# categories: [jeedom-doc, openWrt]
# tags: []
toc: true
pin: true
lang: fr_FR
---

## {{ site.t.fr_FR.Description }}

Ce plugin permet de lister les équipements de votre routeur openWrt

## {{ site.t.fr_FR.Prerequis_et_dependances }}

Avoir un routeur sous [openWrt](https://openwrt.org/).

## {{ site.t.fr_FR.Rendu_visuel }}

Ce plugin n'a pas de rendu visuel spécifique, il est basé sur le standard de Jeedom.

![](/jeedom-doc/{{ page.title }}/images/openWrtRouterWidget.png)

![](/jeedom-doc/{{ page.title }}/images/openWrtEquipmentWidget.png)

## {{ site.t.fr_FR.Configuration_Generale }}

### {{ site.t.fr_FR.Configuration_du_plugin }}

Renseigner l'`adresse IP` du routeur ainsi que le `compte` et `mot de passe` administrateur (le plugin utilise une connexion SSH).

Sélectionner la `fréquence d'actualisation` des informations (il est possible de décocher les cron non concernés).

![](/jeedom-doc/{{ page.title }}/images/openWrtMainConfig.png)

## {{ site.t.fr_FR.Configuration_des_equipements }}

![](/jeedom-doc/{{ page.title }}/images/openWrtConfig.png)

### Widget Router

Lors de la sauvegarde de la configuration générale, le widget `Routeur` est créé automatiquement.

![](/jeedom-doc/{{ page.title }}/images/openWrtConfigRouter.png)

![](/jeedom-doc/{{ page.title }}/images/openWrtConfigCmdRouter.png)

### Ajout d'un équipement réseau

Depuis le menu de gestion, `ajoutez un widget`. Sélectionnez l'équipement désiré (il doit être connecté sur votre routeur i.e. avec un bail DHCP actif).

![](/jeedom-doc/{{ page.title }}/images/openWrtAddEquipment.png)

### {{ site.t.fr_FR.Configuration_generale_du_widget }}

Le `nom de l'équipement` et l'`adresse mac` sont récupérés automatiquement.

![](/jeedom-doc/{{ page.title }}/images/openWrtConfigEquipment.png)

Sauvegarder pour créer les commandes associées.

### {{ site.t.fr_FR.Ajout_des_commandes }}

Les commandes sont créées automatiquement lors de la sauvegarde :

![](/jeedom-doc/{{ page.title }}/images/openWrtConfigCmdEquipment.png)

## {{ site.t.fr_FR.Bugs_connus }}

1.  N/A

## {{ site.t.fr_FR.Changelog }}

V2.0

*   Refactorisation du code et ajout de la température sur le router

V1.0

*   Version initiale
