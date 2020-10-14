---
title: openWrt
author: SupraDolph
date: 2020-09-26 00:00:00 +0100
# categories: [jeedom-doc, openWrt]
# tags: []
toc: true
pin: true
lang: en_US
---

## {{ site.t.en_US.Description }}

This plugin allows you to list the equipment of your openWrt router.

## {{ site.t.en_US.Prerequis_et_dependances }}

Have a router running with [openWrt](https://openwrt.org/).

## {{ site.t.en_US.Rendu_visuel }}

This plugin has no specific visual rendering, it is based on the Jeedom standard.

![](/jeedom-doc/{{ page.title }}/images/openWrtRouterWidget.png)

![](/jeedom-doc/{{ page.title }}/images/openWrtEquipmentWidget.png)

## {{ site.t.en_US.Configuration_Generale }}

### {{ site.t.en_US.Configuration_du_plugin }}

Fill in the router's `IP address` as well as the administrator `account` and `password` (the plugin uses an SSH connection).

Select the `frequency` of data update (it is possible to uncheck the cron not concerned).

![](/jeedom-doc/{{ page.title }}/images/openWrtMainConfig.png)

## {{ site.t.en_US.Configuration_des_equipements }}

![](/jeedom-doc/{{ page.title }}/images/openWrtConfig.png)

### Widget Router

When saving the general configuration, the `Router` widget is created automatically.

![](/jeedom-doc/{{ page.title }}/images/openWrtConfigRouter.png)

![](/jeedom-doc/{{ page.title }}/images/openWrtConfigCmdRouter.png)

### Adding network equipment

From the management menu, `add a widget`. Select the desired equipment (it must be connected to your router i.e. with an active DHCP lease).

![](/jeedom-doc/{{ page.title }}/images/openWrtAddEquipment.png)

### {{ site.t.en_US.Configuration_generale_du_widget }}

The `equipment name` and `mac address `are retrieved automatically.

![](/jeedom-doc/{{ page.title }}/images/openWrtConfigEquipment.png)

Save to create the associated commands.

### {{ site.t.en_US.Ajout_des_commandes }}

Commands are created automatically when saving :

![](/jeedom-doc/{{ page.title }}/images/openWrtConfigCmdEquipment.png)

## {{ site.t.en_US.Bugs_connus }}

1.  N/A

## {{ site.t.en_US.Changelog }}

V1.0

* Initial version