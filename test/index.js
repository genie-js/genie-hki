var test = require('tape')
var fs = require('fs')
var path = require('path')
var genieHki = require('..')

function read (name) {
  return fs.readFileSync(path.join(__dirname, name))
}

test('reads AoC file', function (t) {
  var hki = genieHki.load(read('files/aoc2.hki'))
  t.strictEqual(hki.version, 1.0)
  t.strictEqual(hki.groups.length, genieHki.HotkeyGroups.NumHotkeyGroups)
  t.end()
})

test('reads AoC file with some missing groups', function (t) {
  var hki = genieHki.load(read('files/aoc1.hki'))
  t.strictEqual(hki.version, 1.0)
  t.strictEqual(hki.groups.length, 14)
  t.end()
})

test('reads AoC file', function (t) {
  var hki = genieHki.load(read('files/aoc3.hki'))
  t.strictEqual(hki.version, 1.0)
  t.strictEqual(hki.groups.length, genieHki.HotkeyGroups.NumHotkeyGroups)
  t.end()
})

test('reads HD file', function (t) {
  var hki = genieHki.load(read('files/hd0.hki'))
  t.strictEqual(hki.version, 3.0)
  t.strictEqual(hki.groups.length, genieHki.HotkeyGroups.NumHotkeyGroups)
  t.end()
})

test('reads HD file', function (t) {
  var hki = genieHki.load(read('files/hd1.hki'))
  t.strictEqual(hki.version, 3.0)
  t.strictEqual(hki.groups.length, genieHki.HotkeyGroups.NumHotkeyGroups)
  t.end()
})

test('reads DE2 file', function (t) {
  var hki = genieHki.load(read('files/de2.hki'))
  t.strictEqual(hki.version, 3.0)
  // TODO: update NumHotkeyGroups to this? Add separate AoC/DE2 consts?
  t.strictEqual(hki.groups.length, 22)
  t.end()
})
