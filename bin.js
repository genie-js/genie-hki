var genieHki = require('.')
var vkey = require('vkey')
var fs = require('fs')

var filename = process.argv[2]
if (!filename) {
  console.error('usage: genie-hki <filename>')
  process.exit(1)
}

var buffer = fs.readFileSync(filename)
var hki = genieHki.load(buffer)

console.log('File version:', hki.version)

hki.groups.forEach(function (group, id) {
  console.log()
  console.log(groupName(id))
  group.forEach(function (hotkey, keyId) {
    var line = '- ' + hotkeyName(id, keyId).padEnd(32)
    if (hotkey.key === 0) {
      line += ' (Unbound)'
    } else {
      line += ' '
      if (hotkey.ctrl) line += 'Ctrl+'
      if (hotkey.shift) line += 'Shift+'
      if (hotkey.alt) line += 'Alt+'
      line += vkey[hotkey.key]
    }
    console.log(line)
  })
})

function groupName (id) {
  return Object.entries(genieHki.HotkeyGroups).find(function (pair) {
    return pair[1] === id
  })[0]
}

function hotkeyName (group, id) {
  var keys = [
    genieHki.UnitCommandHotkeys,
    genieHki.GameCommandHotkeys,
    genieHki.ScrollHotkeys,
    genieHki.VillagerHotkeys,
    genieHki.TownCenterHotkeys,
    genieHki.DockHotkeys,
    genieHki.BarracksHotkeys,
    genieHki.ArcheryRangeHotkeys,
    genieHki.StableHotkeys,
    genieHki.SiegeWorkshopHotkeys,
    genieHki.MonasteryHotkeys,
    genieHki.MarketHotkeys,
    genieHki.MilitaryUnitHotkeys,
    genieHki.CastleHotkeys,
    genieHki.MillHotkeys
  ][group]

  return Object.entries(keys).find(function (pair) {
    return pair[1] === id
  })[0]
}
