---
title: miwifiRouter
author: SupraDolph
date: 2019-11-12 00:00:00 +0100
# categories: [jeedom-doc, openWrt]
# tags: []
toc: true
pin: true
lang: en_US
---

## Description

This plugin lists all WiFi equipments of your Xiaomi Router

## Prerequisites and dependencies

Having a Xiaomi router. Tested on a Xiaomi AC2100, but should be compatible with Mi Router 3 and Mi Router 4

## Visual rendering

There is no specific visual for this plugin.

## Configuration

### Plugin customizing

Please type the IP address of your local router and the administrator password.

Please sélect the cron frequency.

![](/jeedom-doc/{{ page.title }}/images/miwifiRouterMainConfig.png)

### Adding a widget

From the management menu, add a widget. Select the desired equipment (it must be connected on your router).

![](/jeedom-doc/{{ page.title }}/images/miwifiRouterAddEquipment.png)

### General widget configuration

Tha name and the mac address are set automatically.

![](/jeedom-doc/{{ page.title }}/images/miwifiRouterConfigEquipment.png)

Save to create the commands

### Adding commands

Commands are automatically created:

![](/jeedom-doc/{{ page.title }}/images/miwifiRouterConfigCommands.png)

## Known bugs

1.  N/A

## Changelog

V1.0

*   Initial version