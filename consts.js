exports.HotkeyGroups = {
  UnitCommands: 0x0,
  GameCommands: 0x1,
  Scroll: 0x2,
  Villager: 0x3,
  TownCenter: 0x4,
  Dock: 0x5,
  Barracks: 0x6,
  ArcheryRange: 0x7,
  Stable: 0x8,
  SiegeWorkshop: 0x9,
  Monastery: 0xA,
  Market: 0xB,
  MilitaryUnits: 0xC,
  Castle: 0xD,
  Mill: 0xE,
  NumHotkeyGroups: 0xF
}

exports.CastleHotkeys = {
  Trebuchet: 0x0,
  UniqueUnit: 0x1,
  Petard: 0x2,
  NumCastleHotkeys: 0x3
}

exports.MilitaryUnitHotkeys = {
  Formation: 0x0,
  WheelLeft: 0x1,
  WheelRight: 0x2,
  AboutFace: 0x3,
  DisbandFormation: 0x4,
  Patrol: 0x5,
  Guard: 0x6,
  Follow: 0x7,
  Aggressive: 0x8,
  Defensive: 0x9,
  StandGround: 0xA,
  NoAttack: 0xB,
  // HD Edition
  AttackMove: 0xC,
  NumMilitaryUnitHotkeys: 0xD
}

exports.FormationHotkeys = {
  Horde: 0x0,
  Box: 0x1,
  Line: 0x2,
  Staggered: 0x3,
  Flank: 0x4,
  NumFormationHotkeys: 0x5
}

exports.UnitCommandHotkeys = {
  BuildEconomic: 0x0,
  BuildMilitary: 0x1,
  Repair: 0x2,
  Group: 0x3,
  Ungroup: 0x4,
  Stop: 0x5,
  Unload: 0x6,
  Pack: 0x7,
  Unpack: 0x8,
  Heal: 0x9,
  Convert: 0xA,
  Garrison: 0xB,
  Delete: 0xC,
  SetGatherPoint: 0xD,
  AttackGround: 0xE,
  NumUnitCommandHotkeys: 0xF
}

exports.GameCommandHotkeys = {
  CreateGroup0: 0x0,
  CreateGroup1: 0x1,
  CreateGroup2: 0x2,
  CreateGroup3: 0x3,
  CreateGroup4: 0x4,
  CreateGroup5: 0x5,
  CreateGroup6: 0x6,
  CreateGroup7: 0x7,
  CreateGroup8: 0x8,
  CreateGroup9: 0x9,
  SelectGroup0: 0xA,
  SelectGroup1: 0xB,
  SelectGroup2: 0xC,
  SelectGroup3: 0xD,
  SelectGroup4: 0xE,
  SelectGroup5: 0xF,
  SelectGroup6: 0x10,
  SelectGroup7: 0x11,
  SelectGroup8: 0x12,
  SelectGroup9: 0x13,
  Chat: 0x14,
  SpeedUp: 0x15,
  SpeedDown: 0x16,
  NextIdleVillager: 0x17,
  NextIdleVillager2: 0x18,
  CycleFocusArea: 0x19,
  CycleFocusArea2: 0x1A,
  GoToSelected: 0x1B,
  GoToTownCenter: 0x1C,
  GoToTownCenter2: 0x1D,
  GoToMarket: 0x1E,
  ScrollChatDown: 0x1F,
  ScrollChatUp: 0x20,
  Score: 0x21,
  GoToBarracks: 0x22,
  GoToArcheryRange: 0x23,
  GoToStable: 0x24,
  GoToSiegeWorkshop: 0x25,
  GoToDock: 0x26,
  GoToMonastery: 0x27,
  GoToBlacksmith: 0x28,
  GoToMill: 0x29,
  GoToUniversity: 0x2A,
  TechTree: 0x2B,
  Achievements: 0x2C,
  DisplayGameTime: 0x2D,
  NextIdleMilitary: 0x2E,
  NextIdleMilitary2: 0x2F,
  Flare: 0x30,
  GoToCastle: 0x31,
  GoToMiningCamp: 0x32,
  GoToSawMill: 0x33,
  MinimapCombat: 0x34,
  MinimapResource: 0x35,
  MinimapNormal: 0x36,
  ExtendedHelp: 0x37,
  AdvancedModes: 0x38,
  Diplomacy: 0x39,
  Menu: 0x3A,
  Objectives: 0x3B,
  ChatDialog: 0x3C,
  PauseGame: 0x3D,
  SaveGame: 0x3E,
  FriendFoeColors: 0x3F,
  PreviousView: 0x40,
  SaveChapter: 0x41,
  NumGameCommandHotkeys: 0x42
}

exports.ScrollHotkeys = {
  ScrollLeft: 0x0,
  ScrollRight: 0x1,
  ScrollUp: 0x2,
  ScrollDown: 0x3,
  FastScrollLeft: 0x4,
  FastScrollRight: 0x5,
  FastScrollUp: 0x6,
  FastScrollDown: 0x7,
  ScrollLeftUp: 0x8,
  ScrollLeftDown: 0x9,
  ScrollRightDown: 0xA,
  ScrollRightUp: 0xB,
  FastScrollLeftUp: 0xC,
  FastScrollLeftDown: 0xD,
  FastScrollRightDown: 0xE,
  FastScrollRightUp: 0xF,
  NumScrollHotkeys: 0x10
}

exports.VillagerHotkeys = {
  BuildHouse: 0x0,
  BuildMill: 0x1,
  BuildBlacksmith: 0x2,
  BuildDock: 0x3,
  BuildBarracks: 0x4,
  BuildPallisadeWall: 0x5,
  BuildMarket: 0x6,
  BuildStoneWall: 0x7,
  BuildTower: 0x8,
  BuildBombardTower: 0x9,
  BuildGate1: 0xA,
  BuildGate2: 0xB,
  BuildFarm: 0xC,
  BuildArcheryRange: 0xD,
  BuildStable: 0xE,
  BuildMonastery: 0xF,
  BuildTownCenter: 0x10,
  BuildSiegeWorkshop: 0x11,
  BuildUniversity: 0x12,
  BuildWonder: 0x13,
  BuildCastle: 0x14,
  BuildTradeWorkshop: 0x15,
  BuildPackedTownCenter: 0x16,
  BuildSawMill: 0x17,
  BuildMiningCamp: 0x18,
  BuildFishTrap: 0x19,
  BuildOutpost: 0x1A,
  BuildNext: 0x1B,
  BuildPalisadeGate: 0x1C,
  BuildFeitoria: 0x1D,
  NumVillagerHotkeys: 0x1E
}

exports.TownCenterHotkeys = {
  CreateVillager: 0x0,
  AgeAdvance: 0x1,
  CreateRaiderArcher: 0x2,
  CreateRaiderSwordsman: 0x3,
  CreateRaiderCavalry: 0x4,
  CreateRaiderCavArcher: 0x5,
  RingTownBell: 0x6,
  BackToWork: 0x7,
  NumTownCenterHotkeys: 0x8
}

exports.MillHotkeys = {
  AddFarm: 0x0,
  NumMillHotkeys: 0x1
}

exports.DockHotkeys = {
  CreateFishingShip: 0x0,
  CreateTradeCog: 0x1,
  CreateGalley: 0x2,
  CreateCannonGalleon: 0x3,
  CreateFireGalley: 0x4,
  CreateDemolitionShip: 0x5,
  CreateBoardingGalley: 0x6,
  CreateTransport: 0x7,
  CreateLongboat: 0x8,
  CreateTurtleShip: 0x9,
  NumDockHotkeys: 0xA
}

exports.BarracksHotkeys = {
  CreateMilitia: 0x0,
  CreatePikeman: 0x1,
  CreateEagleWarrior: 0x2,
  CreateHuskarl: 0x3,
  NumBarracksHotkeys: 0x4
}

exports.ArcheryRangeHotkeys = {
  CreateArcher: 0x0,
  CreateSkirmisher: 0x1,
  CreateCavArcher: 0x2,
  CreateHandCannoneer: 0x3,
  CreateGenitour: 0x4,
  NumArcheryRangeHotkeys: 0x5
}

exports.StableHotkeys = {
  CreateScout: 0x0,
  CreateCamel: 0x1,
  CreateKnight: 0x2,
  CreateBattleElephant: 0x3,
  NumStableHotkeys: 0x4
}

exports.SiegeWorkshopHotkeys = {
  CreateRam: 0x0,
  CreateScorpion: 0x1,
  CreateMangonel: 0x2,
  CreateBombardCannon: 0x3,
  CreateSiegeTower: 0x4,
  NumSiegeWorkshopHotkeys: 0x5
}

exports.MonasteryHotkeys = {
  CreateMonk: 0x0,
  CreateMissionary: 0x1,
  NumMonasteryHotkeys: 0x2
}

exports.MarketHotkeys = {
  CreateTradeCart: 0x0,
  NumMarketHotkeys: 0x1
}

exports.BlacksmithHotkeys = {
  NumBlacksmithHotkeys: 0x0
}
