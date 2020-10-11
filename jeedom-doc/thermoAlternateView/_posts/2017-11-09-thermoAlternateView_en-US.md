---
title: thermoAlternateView
author: SupraDolph
date: 2017-11-09 00:00:00 +0100
# categories: [jeedom-doc, openWrt]
# tags: []
toc: true
pin: true
lang: en-US
---

## Description

This plugin is an alternative to the standard Thermostat plugin widget. It is not a stand-alone thermostat and is not compatible with other thermostats.

## Prerequisites and dependencies

The **thermostat** plugin must be configured with at least one active thermostat.

The **agenda** plugin is optional but is necessary to display the next setpoint time.

### Configuration of the Thermostat plugin modes

The mode selector uses icons that are associated with the thermostat mode label. For an optimal display (icons), the thermostat must include modes named **Day**, **Night**, **Comfort**, **Eco**, **Holiday**, **no frost**, **Comfort -2** and/or **Absent**.

![](images/thermoAlternateViewConfigModes.png)

## Display

### Dark

![](images/thermoAlternateViewDark.png)

### Light

![](images/thermoAlternateViewLight.png)

### DarkAtmo

![](images/thermoAlternateViewDarkatmo.png)

### SimpleLight

![](images/thermoAlternateViewSimplelight.png)

Please change the heating, cooling and suspended colors.

### SimpleDark

![](images/thermoAlternateViewSimpledark.png)

Please change the heating, cooling and suspended colors.

## Configuration

### Adding a widget

From the management menu, add a widget. ![](images/thermoAlternateViewConfigMain.png)

### General widget configuration

*   **thermoAlternateView device name** : This is the name displayed at the top of the widget
*   **Parent object** : Allows you to classify the widget in Jeedom
*   **Category** : Allows you to categorize the widget in Jeedom
*   **Activate/ Visible** : Allows you to activate/ display the widget in Jeedom
*   **Thermostat** : Allows you to select the thermostat whose widget will replace the rendering
*   **Template** : Allows you to choose the visual rendering of the widget

![](images/thermoAlternateViewConfigEquipement.png)

### Configuring widget options

*   **Unit** : Temperature unit displayed on the widget (default °)
*   **Use the background color of the widget** : Allows you to use the Jeedom widget color instead of the template color
*   **Display external temperature** : Allows you to display the outdoor temperature (configured in the thermostat)
*   **Display humidity** : Allows you to display the humidity level (configured in the thermostat)
*   **Display power** : Allows you to display the power level (configured in the thermostat)
*   **Hide modes** : Allows you not to display the mode selector switch
*   **Display the next heating setpoint (calendar)** : Displays the time of the next (experimental) heating setpoint. This feature requires the agenda plugin.
*   **Display the event name (calendar)** : Displays the event name. This feature requires the agenda plugin.
*   **Heating icon color** : Allows you to change the color of the heating icon
*   **Cooling icon color** : Allows you to change the color of the cooling icon
*   **Suspended icon color** : Allows you to change the color of the suspended mode icon
*   **Lock icon color** : Allows you to change the color of the lock icon

![](images/thermoAlternateViewConfigOptions.png)

## Known bugs

1.  Please clear browser caching after each update
2.  The refresh of the next setpoint does not always work

## Changelog

V2.9

*   On SimpleLight/Dark : Internal temperature was not refreshed

V2.8

*   Re-order modes
*   On SimpleLight/Dark : Display temperature when off

V2.7

*   Add objects in design mode
*   Bugfixes for SimpleLight & SimpleDark

V2.6

*   Bugfix humidity percent display
*   Add templates SimpleLight & SimpleDark

V2.5

*   Bugfixes
*   SVG loading review to avoid ghosting picture

V2.4

*   Jeedom v4 compliant
*   php 7.3 compliant

V2.3

*   WARNING : Please release the browser caching and validate each thermoAlternateView configuration before to use !
*   Add new darkatmo skin
*   Fix visual issues

V2.2

*   Power display
*   Bugfix mobile view for Dark template

V2.1

*   Bugfix

V2.0

*   Space optimization
*   Translation into US
*   Adding humidity

V1.12

*   Bugfix inactive agendas
*   New feature : Event name

V1.11

*   Bugfix widget size at initialization
*   Bugfix related to inactive agendas

V1.10

*   Add documentation
*   Bugfix "Category"

V1.9

*   Display of statistics in dialog mode
*   Adding categories (e.g. heating) in the widget configuration

V1.8

*   Put a fan icon in cold mode and manage its color
*   Addition of Frost Protection and Comfort -2 modes
*   In the back office, image factorization for the different visuals

V1.7

*   Choice of unit (°, %)
*   Display the next agenda change
*   Management of the "vacation" mode

V1.6

*   Add the link to the temperature control history
*   Color of the lock button
*   Suspended mode management

V1.5

*   Change the color of the icon on the market: Visual identity required by developer
*   Add icons for other mode names: day and night

V1.4

*   Support for advanced Widget display configuration
*   Possibility to hide the modes
*   Possibility to change the color of the heating flame

V1.3

*   Bug fix on dark template lock button

V1.2

*   Code invoicing
*   Adding Dark plugin
*   Adding the outside temperature

V1.1

*   Bug fix
*   Adding the mobile view
*   Added link to statistics

V1.0

*   Initial version