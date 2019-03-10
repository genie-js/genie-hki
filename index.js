var struct = require('awestruct')
var inflateRaw = require('zlib').inflateRawSync
var deflateRaw = require('zlib').deflateRawSync
var consts = require('./consts')
var t = struct.types

var Hotkey = struct([
  ['key', t.int32],
  ['stringId', t.int32],
  ['ctrl', t.bool],
  ['alt', t.bool],
  ['shift', t.bool],
  ['mouse', t.int8]
])

var HotkeyGroup = t.dynarray(t.int32, Hotkey)

var HKI = struct([
  ['version', t.float],
  ['groups', t.dynarray(t.int32, HotkeyGroup)]
])

exports.load = function loadHki (buffer) {
  var uncompressed = inflateRaw(buffer)
  return HKI.decode(uncompressed)
}

exports.save = function saveHki (hki) {
  var uncompressed = HKI.encode(hki)
  return deflateRaw(uncompressed)
}

exports.HotkeyGroups = consts.HotkeyGroups
exports.CastleHotkeys = consts.CastleHotkeys
exports.MilitaryUnitHotkeys = consts.MilitaryUnitHotkeys
exports.FormationHotkeys = consts.FormationHotkeys
exports.UnitCommandHotkeys = consts.UnitCommandHotkeys
exports.GameCommandHotkeys = consts.GameCommandHotkeys
exports.ScrollHotkeys = consts.ScrollHotkeys
exports.VillagerHotkeys = consts.VillagerHotkeys
exports.TownCenterHotkeys = consts.TownCenterHotkeys
exports.MillHotkeys = consts.MillHotkeys
exports.DockHotkeys = consts.DockHotkeys
exports.BarracksHotkeys = consts.BarracksHotkeys
exports.ArcheryRangeHotkeys = consts.ArcheryRangeHotkeys
exports.StableHotkeys = consts.StableHotkeys
exports.SiegeWorkshopHotkeys = consts.SiegeWorkshopHotkeys
exports.MonasteryHotkeys = consts.MonasteryHotkeys
exports.MarketHotkeys = consts.MarketHotkeys
exports.BlacksmithHotkeys = consts.BlacksmithHotkeys
