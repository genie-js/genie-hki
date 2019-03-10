# genie-hki

read/write hotkey files for Age of Empires II

[Install](#install) - [Usage](#usage) - [License: Apache-2.0](#license)

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/genie-hki.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/genie-hki
[travis-image]: https://img.shields.io/travis/genie-js/genie-hki.svg?style=flat-square
[travis-url]: https://travis-ci.com/genie-js/genie-hki
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install genie-hki
```

## Usage

```js
var genieHki = require('genie-hki')

var hki = genieHki.load(buffer)
hki.version // 1.0, 2.0 or 3.0
hki.groups // array of arrays of hotkey objects
```

## API

### `hki = genieHki.load(buffer)`

Load hotkeys from a Buffer.

### `buffer = genieHki.save(hki)`

Save hotkeys to a Buffer.

### `hki.version`

Version of the HKI file. 2.0 for recent HD versions, 1.0 otherwise.

### `hki.groups`

Array of hotkey groups.

### `group = hki.groups[groupId]`

Array of hotkeys for a group.

`groupId` is one of the `genieHki.HotkeyGroups` constants:

```js
hki.groups[HotkeyGroups.Villager]
// → array of hotkey objects
```

### `hotkey = group[hotkeyId]`

A hotkey object with properties:

 - `hotkey.key` - vkey ID, you can use the [`vkey`](https://npmjs.com/package/vkey) package to get the associated name (like `C` for id `67`)
 - `hotkey.stringId` - string ID of the label for this key (eg 6121 for "Create Villager")
 - `hotkey.ctrl` - whether Ctrl should be pressed to activate this hotkey
 - `hotkey.shift` - whether Shift should be pressed to activate this hotkey
 - `hotkey.alt` - whether Alt should be pressed to activate this hotkey
 - `hotkey.mouse` - whether this is a mouse hotkey, rather than a keyboard one

Index into the array with the appropriate hotkey constants. For example:

```js
var HotkeyGroups = genieHki.HotkeyGroups
var TownCenterHotkeys = genieHki.TownCenterHotkeys
var townCenter = hki.groups[HotkeyGroups.TownCenter]
var createVillager = townCenter[TownCenterHotkeys.CreateVillager]

var vkey = require('vkey')
console.log(vkey[createVillager.key])
```

## License

[Apache-2.0](LICENSE.md)
