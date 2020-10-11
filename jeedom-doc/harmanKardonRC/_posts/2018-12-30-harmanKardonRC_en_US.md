---
title: harmanKardonRC
author: SupraDolph
date: 2018-12-30 00:00:00 +0100
# categories: [jeedom-doc, openWrt]
# tags: []
toc: true
pin: true
lang: en_US
---

## Description

This plugin is based on HKAPI ([https://github.com/KarimGeiger/HKAPI](https://github.com/KarimGeiger/HKAPI)) and allows you to control Harman Kardon brand amplifiers. Attention, this API has been realized in reverse engineering because HK does not expose its API. Please read the associated README carefully, especially to know the restrictions and compatible equipment. To date:

*   Harman Kardon AVR 370
*   Harman Kardon AVR 170 - Works, but heart-alive won't respond.
*   Harman Kardon AVR 171 - Works, but heart-alive won't respond.
*   Harman Kardon HK 3700 - Works, but has problems while waking up.
*   Harman Kardon BDS 7773w
*   Harman Kardon BDS 375

From now, zone 2 is not managed.

## Prerequisites and dependencies

N/A

## Visual rendering

### Remote control

A specific visual rendering has been developed to ensure the best possible experience.

![](/jeedom-doc/{{ page.title }}/images/harmanKardonRCTelecommande.png)

## Configuration

### Adding a widget

From the management menu, add a widget.

### General widget configuration

*   Equipment type: Select the type of your equipment (AVR: Amplifier, or BDS: Home Cinema)
*   Amplifier IP**: IP address of your equipment. It must be fixed or reserved on your DHCP server

![](/jeedom-doc/{{ page.title }}/images/harmanKardonRCConfigMain.png)

### Adding commands

Basic commands are automatically added except for sources that depend on your equipment This is normally:

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

The name of the command is displayed on the dashboard remote control. The source must match the source of your amplifier (normally displayed in the amplifier menu) ![](/jeedom-doc/{{ page.title }}/images/harmanKardonRCConfigCommands.png)

## Known bugs

1.  N/A

## Changelog

V2.1

*   Php 7 compatible

V2.0

*   Jeedom V4 compatible

V1.0

*   Initial version