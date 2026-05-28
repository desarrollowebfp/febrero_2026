const videogames = [
  {
    "rank": 1,
    "name": "The Witcher 3: Wild Hunt",
    "developer": "CD Projekt Red",
    "genre": "Action RPG",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg"
  },
  {
    "rank": 2,
    "name": "Elden Ring",
    "developer": "FromSoftware",
    "genre": "Action RPG",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"
  },
  {
    "rank": 3,
    "name": "Baldur's Gate 3",
    "developer": "Larian Studios",
    "genre": "RPG",
    "platform": "PC, PlayStation 5, Xbox Series X/S, macOS",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg"
  },
  {
    "rank": 4,
    "name": "Red Dead Redemption 2",
    "developer": "Rockstar Games",
    "genre": "Action-Adventure",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg"
  },
  {
    "rank": 5,
    "name": "Half-Life 2",
    "developer": "Valve",
    "genre": "First-Person Shooter",
    "platform": "PC (Windows, macOS, Linux)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/220/header.jpg"
  },
  {
    "rank": 6,
    "name": "Portal 2",
    "developer": "Valve",
    "genre": "Puzzle-Platformer",
    "platform": "PC (Windows, macOS, Linux), PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg"
  },
  {
    "rank": 7,
    "name": "Grand Theft Auto V",
    "developer": "Rockstar Games",
    "genre": "Action-Adventure",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg"
  },
  {
    "rank": 8,
    "name": "Cyberpunk 2077",
    "developer": "CD Projekt Red",
    "genre": "Action RPG",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg"
  },
  {
    "rank": 9,
    "name": "The Elder Scrolls V: Skyrim Special Edition",
    "developer": "Bethesda Game Studios",
    "genre": "Action RPG",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/header.jpg"
  },
  {
    "rank": 10,
    "name": "Disco Elysium",
    "developer": "ZA/UM",
    "genre": "RPG",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/632470/header.jpg"
  },
  {
    "rank": 11,
    "name": "Hades",
    "developer": "Supergiant Games",
    "genre": "Roguelike Action",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg"
  },
  {
    "rank": 12,
    "name": "Stardew Valley",
    "developer": "ConcernedApe",
    "genre": "Simulation / RPG",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS, Linux",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg"
  },
  {
    "rank": 13,
    "name": "Hollow Knight",
    "developer": "Team Cherry",
    "genre": "Metroidvania",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS, Linux",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg"
  },
  {
    "rank": 14,
    "name": "Sekiro: Shadows Die Twice",
    "developer": "FromSoftware",
    "genre": "Action-Adventure",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg"
  },
  {
    "rank": 15,
    "name": "Dark Souls III",
    "developer": "FromSoftware",
    "genre": "Action RPG",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg"
  },
  {
    "rank": 16,
    "name": "DOOM Eternal",
    "developer": "id Software",
    "genre": "First-Person Shooter",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg"
  },
  {
    "rank": 17,
    "name": "Counter-Strike 2",
    "developer": "Valve",
    "genre": "Tactical Shooter",
    "platform": "PC (Windows, Linux)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg"
  },
  {
    "rank": 18,
    "name": "Sid Meier's Civilization VI",
    "developer": "Firaxis Games",
    "genre": "Turn-Based Strategy",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS, Linux",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg"
  },
  {
    "rank": 19,
    "name": "RimWorld",
    "developer": "Ludeon Studios",
    "genre": "Colony Sim / Strategy",
    "platform": "PC (Windows, macOS, Linux), PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/294100/header.jpg"
  },
  {
    "rank": 20,
    "name": "Factorio",
    "developer": "Wube Software",
    "genre": "Construction & Management Sim",
    "platform": "PC (Windows, macOS, Linux), Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/427520/header.jpg"
  },
  {
    "rank": 21,
    "name": "Terraria",
    "developer": "Re-Logic",
    "genre": "Action-Adventure / Sandbox",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS, Linux",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg"
  },
  {
    "rank": 22,
    "name": "Divinity: Original Sin 2",
    "developer": "Larian Studios",
    "genre": "RPG",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/435150/header.jpg"
  },
  {
    "rank": 23,
    "name": "Celeste",
    "developer": "Maddy Makes Games",
    "genre": "Platformer",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS, Linux",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg"
  },
  {
    "rank": 24,
    "name": "Cuphead",
    "developer": "Studio MDHR",
    "genre": "Run and Gun",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg"
  },
  {
    "rank": 25,
    "name": "Subnautica",
    "developer": "Unknown Worlds Entertainment",
    "genre": "Survival / Adventure",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/264710/header.jpg"
  },
  {
    "rank": 26,
    "name": "Outer Wilds",
    "developer": "Mobius Digital",
    "genre": "Adventure / Puzzle",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/753640/header.jpg"
  },
  {
    "rank": 27,
    "name": "Control",
    "developer": "Remedy Entertainment",
    "genre": "Action-Adventure",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/870780/header.jpg"
  },
  {
    "rank": 28,
    "name": "It Takes Two",
    "developer": "Hazelight Studios",
    "genre": "Co-op Adventure",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/header.jpg"
  },
  {
    "rank": 29,
    "name": "Mass Effect Legendary Edition",
    "developer": "BioWare",
    "genre": "Action RPG",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1328670/header.jpg"
  },
  {
    "rank": 30,
    "name": "Monster Hunter: World",
    "developer": "Capcom",
    "genre": "Action RPG",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg"
  },
  {
    "rank": 31,
    "name": "God of War",
    "developer": "Santa Monica Studio",
    "genre": "Action-Adventure",
    "platform": "PC, PlayStation",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg"
  },
  {
    "rank": 32,
    "name": "DOOM (2016)",
    "developer": "id Software",
    "genre": "First-Person Shooter",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/379720/header.jpg"
  },
  {
    "rank": 33,
    "name": "Half-Life",
    "developer": "Valve",
    "genre": "First-Person Shooter",
    "platform": "PC (Windows, macOS, Linux)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/70/header.jpg"
  },
  {
    "rank": 34,
    "name": "Portal",
    "developer": "Valve",
    "genre": "Puzzle-Platformer",
    "platform": "PC (Windows, macOS, Linux), PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/400/header.jpg"
  },
  {
    "rank": 35,
    "name": "BioShock Infinite",
    "developer": "Irrational Games",
    "genre": "First-Person Shooter",
    "platform": "PC, PlayStation, Xbox, macOS, Linux",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/8870/header.jpg"
  },
  {
    "rank": 36,
    "name": "NieR: Automata",
    "developer": "PlatinumGames",
    "genre": "Action RPG",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/524220/header.jpg"
  },
  {
    "rank": 37,
    "name": "Resident Evil 4 (2023)",
    "developer": "Capcom",
    "genre": "Survival Horror",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg"
  },
  {
    "rank": 38,
    "name": "Death Stranding",
    "developer": "Kojima Productions",
    "genre": "Action",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1190460/header.jpg"
  },
  {
    "rank": 39,
    "name": "Marvel's Spider-Man Remastered",
    "developer": "Insomniac Games",
    "genre": "Action-Adventure",
    "platform": "PC, PlayStation",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg"
  },
  {
    "rank": 40,
    "name": "Horizon Zero Dawn",
    "developer": "Guerrilla Games",
    "genre": "Action RPG",
    "platform": "PC, PlayStation",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg"
  },
  {
    "rank": 41,
    "name": "Titanfall 2",
    "developer": "Respawn Entertainment",
    "genre": "First-Person Shooter",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/header.jpg"
  },
  {
    "rank": 42,
    "name": "Devil May Cry 5",
    "developer": "Capcom",
    "genre": "Action",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/601150/header.jpg"
  },
  {
    "rank": 43,
    "name": "Fallout: New Vegas",
    "developer": "Obsidian Entertainment",
    "genre": "RPG",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/22380/header.jpg"
  },
  {
    "rank": 44,
    "name": "Left 4 Dead 2",
    "developer": "Valve",
    "genre": "First-Person Shooter",
    "platform": "PC (Windows, macOS, Linux), Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg"
  },
  {
    "rank": 45,
    "name": "Borderlands 2",
    "developer": "Gearbox Software",
    "genre": "Looter Shooter",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/49520/header.jpg"
  },
  {
    "rank": 46,
    "name": "Deep Rock Galactic",
    "developer": "Ghost Ship Games",
    "genre": "Co-op First-Person Shooter",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/548430/header.jpg"
  },
  {
    "rank": 47,
    "name": "Slay the Spire",
    "developer": "Mega Crit",
    "genre": "Roguelike Deckbuilder",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS, Linux",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/646570/header.jpg"
  },
  {
    "rank": 48,
    "name": "The Binding of Isaac: Rebirth",
    "developer": "Nicalis / Edmund McMillen",
    "genre": "Roguelike",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS, Linux",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/250900/header.jpg"
  },
  {
    "rank": 49,
    "name": "Dead Cells",
    "developer": "Motion Twin",
    "genre": "Roguelike Metroidvania",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS, Linux",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg"
  },
  {
    "rank": 50,
    "name": "Risk of Rain 2",
    "developer": "Hopoo Games",
    "genre": "Roguelike Shooter",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/632360/header.jpg"
  },
  {
    "rank": 51,
    "name": "Undertale",
    "developer": "Toby Fox",
    "genre": "RPG",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS, Linux",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/391540/header.jpg"
  },
  {
    "rank": 52,
    "name": "Enter the Gungeon",
    "developer": "Dodge Roll",
    "genre": "Roguelike",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS, Linux",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/311690/header.jpg"
  },
  {
    "rank": 53,
    "name": "Path of Exile",
    "developer": "Grinding Gear Games",
    "genre": "Action RPG",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg"
  },
  {
    "rank": 54,
    "name": "Tom Clancy's Rainbow Six Siege",
    "developer": "Ubisoft Montreal",
    "genre": "Tactical Shooter",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg"
  },
  {
    "rank": 55,
    "name": "PUBG: BATTLEGROUNDS",
    "developer": "KRAFTON",
    "genre": "Battle Royale",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg"
  },
  {
    "rank": 56,
    "name": "Rocket League",
    "developer": "Psyonix",
    "genre": "Sports",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg"
  },
  {
    "rank": 57,
    "name": "Warframe",
    "developer": "Digital Extremes",
    "genre": "Action",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg"
  },
  {
    "rank": 58,
    "name": "Destiny 2",
    "developer": "Bungie",
    "genre": "First-Person Shooter / Looter",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg"
  },
  {
    "rank": 59,
    "name": "Team Fortress 2",
    "developer": "Valve",
    "genre": "First-Person Shooter",
    "platform": "PC (Windows, macOS, Linux)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg"
  },
  {
    "rank": 60,
    "name": "Dota 2",
    "developer": "Valve",
    "genre": "MOBA",
    "platform": "PC (Windows, macOS, Linux)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg"
  },
  {
    "rank": 61,
    "name": "Garry's Mod",
    "developer": "Facepunch Studios",
    "genre": "Sandbox",
    "platform": "PC (Windows, macOS, Linux)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg"
  },
  {
    "rank": 62,
    "name": "Sid Meier's Civilization V",
    "developer": "Firaxis Games",
    "genre": "Turn-Based Strategy",
    "platform": "PC (Windows, macOS, Linux)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/8930/header.jpg"
  },
  {
    "rank": 63,
    "name": "Stellaris",
    "developer": "Paradox Development Studio",
    "genre": "Grand Strategy",
    "platform": "PC (Windows, macOS, Linux), PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/281990/header.jpg"
  },
  {
    "rank": 64,
    "name": "Europa Universalis IV",
    "developer": "Paradox Development Studio",
    "genre": "Grand Strategy",
    "platform": "PC (Windows, macOS, Linux)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/236850/header.jpg"
  },
  {
    "rank": 65,
    "name": "Crusader Kings III",
    "developer": "Paradox Development Studio",
    "genre": "Grand Strategy",
    "platform": "PC (Windows, macOS, Linux), PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1158310/header.jpg"
  },
  {
    "rank": 66,
    "name": "Hearts of Iron IV",
    "developer": "Paradox Development Studio",
    "genre": "Grand Strategy",
    "platform": "PC (Windows, macOS, Linux)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/394360/header.jpg"
  },
  {
    "rank": 67,
    "name": "Cities: Skylines",
    "developer": "Colossal Order",
    "genre": "City Builder",
    "platform": "PC (Windows, macOS, Linux), PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/255710/header.jpg"
  },
  {
    "rank": 68,
    "name": "Mount & Blade II: Bannerlord",
    "developer": "TaleWorlds Entertainment",
    "genre": "Action RPG / Strategy",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/261550/header.jpg"
  },
  {
    "rank": 69,
    "name": "Satisfactory",
    "developer": "Coffee Stain Studios",
    "genre": "Factory Sim",
    "platform": "PC",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/526870/header.jpg"
  },
  {
    "rank": 70,
    "name": "Dyson Sphere Program",
    "developer": "Youthcat Studio",
    "genre": "Factory Sim",
    "platform": "PC",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1366540/header.jpg"
  },
  {
    "rank": 71,
    "name": "Valheim",
    "developer": "Iron Gate Studio",
    "genre": "Survival",
    "platform": "PC (Windows, Linux), Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg"
  },
  {
    "rank": 72,
    "name": "Don't Starve Together",
    "developer": "Klei Entertainment",
    "genre": "Survival",
    "platform": "PC (Windows, macOS, Linux), PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/322330/header.jpg"
  },
  {
    "rank": 73,
    "name": "Rust",
    "developer": "Facepunch Studios",
    "genre": "Survival",
    "platform": "PC (Windows, macOS), PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg"
  },
  {
    "rank": 74,
    "name": "Project Zomboid",
    "developer": "The Indie Stone",
    "genre": "Survival",
    "platform": "PC (Windows, macOS, Linux)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/header.jpg"
  },
  {
    "rank": 75,
    "name": "Phasmophobia",
    "developer": "Kinetic Games",
    "genre": "Horror",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg"
  },
  {
    "rank": 76,
    "name": "Among Us",
    "developer": "Innersloth",
    "genre": "Party",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg"
  },
  {
    "rank": 77,
    "name": "V Rising",
    "developer": "Stunlock Studios",
    "genre": "Survival",
    "platform": "PC, PlayStation",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1604030/header.jpg"
  },
  {
    "rank": 78,
    "name": "Kenshi",
    "developer": "Lo-Fi Games",
    "genre": "RPG / Sandbox",
    "platform": "PC (Windows)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/233860/header.jpg"
  },
  {
    "rank": 79,
    "name": "Starbound",
    "developer": "Chucklefish",
    "genre": "Sandbox",
    "platform": "PC (Windows, macOS, Linux)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/211820/header.jpg"
  },
  {
    "rank": 80,
    "name": "Grim Dawn",
    "developer": "Crate Entertainment",
    "genre": "Action RPG",
    "platform": "PC (Windows)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/219990/header.jpg"
  },
  {
    "rank": 81,
    "name": "Torchlight II",
    "developer": "Runic Games",
    "genre": "Action RPG",
    "platform": "PC (Windows, macOS, Linux), PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/200710/header.jpg"
  },
  {
    "rank": 82,
    "name": "Arma 3",
    "developer": "Bohemia Interactive",
    "genre": "Military Sim",
    "platform": "PC (Windows)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/107410/header.jpg"
  },
  {
    "rank": 83,
    "name": "DayZ",
    "developer": "Bohemia Interactive",
    "genre": "Survival",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/221100/header.jpg"
  },
  {
    "rank": 84,
    "name": "7 Days to Die",
    "developer": "The Fun Pimps",
    "genre": "Survival",
    "platform": "PC (Windows, macOS, Linux), PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/251570/header.jpg"
  },
  {
    "rank": 85,
    "name": "Raft",
    "developer": "Redbeet Interactive",
    "genre": "Survival",
    "platform": "PC (Windows)",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/648800/header.jpg"
  },
  {
    "rank": 86,
    "name": "Human: Fall Flat",
    "developer": "No Brakes Games",
    "genre": "Puzzle-Platformer",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch, macOS",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/477160/header.jpg"
  },
  {
    "rank": 87,
    "name": "The Witcher 2: Assassins of Kings",
    "developer": "CD Projekt Red",
    "genre": "RPG",
    "platform": "PC (Windows), Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/20920/header.jpg"
  },
  {
    "rank": 88,
    "name": "BioShock",
    "developer": "2K Boston",
    "genre": "First-Person Shooter",
    "platform": "PC, PlayStation, Xbox, macOS",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/7670/header.jpg"
  },
  {
    "rank": 89,
    "name": "Fallout 4",
    "developer": "Bethesda Game Studios",
    "genre": "RPG",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/header.jpg"
  },
  {
    "rank": 90,
    "name": "Tomb Raider (2013)",
    "developer": "Crystal Dynamics",
    "genre": "Action-Adventure",
    "platform": "PC, PlayStation, Xbox, macOS, Linux",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/203160/header.jpg"
  },
  {
    "rank": 91,
    "name": "Shadow of the Tomb Raider",
    "developer": "Eidos-Montreal",
    "genre": "Action-Adventure",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/750920/header.jpg"
  },
  {
    "rank": 92,
    "name": "Assassin's Creed IV: Black Flag",
    "developer": "Ubisoft",
    "genre": "Action-Adventure",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/242050/header.jpg"
  },
  {
    "rank": 93,
    "name": "Assassin's Creed Odyssey",
    "developer": "Ubisoft",
    "genre": "Action RPG",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/812140/header.jpg"
  },
  {
    "rank": 94,
    "name": "Forza Horizon 5",
    "developer": "Playground Games",
    "genre": "Racing",
    "platform": "PC, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg"
  },
  {
    "rank": 95,
    "name": "Assetto Corsa",
    "developer": "Kunos Simulazioni",
    "genre": "Sim Racing",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/244210/header.jpg"
  },
  {
    "rank": 96,
    "name": "Resident Evil Village",
    "developer": "Capcom",
    "genre": "Survival Horror",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg"
  },
  {
    "rank": 97,
    "name": "Street Fighter 6",
    "developer": "Capcom",
    "genre": "Fighting",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg"
  },
  {
    "rank": 98,
    "name": "Tekken 7",
    "developer": "Bandai Namco Studios",
    "genre": "Fighting",
    "platform": "PC, PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/389730/header.jpg"
  },
  {
    "rank": 99,
    "name": "Divinity: Original Sin - Enhanced Edition",
    "developer": "Larian Studios",
    "genre": "RPG",
    "platform": "PC (Windows, macOS, Linux), PlayStation, Xbox",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/230230/header.jpg"
  },
  {
    "rank": 100,
    "name": "Hogwarts Legacy",
    "developer": "Avalanche Software",
    "genre": "Action RPG",
    "platform": "PC, PlayStation, Xbox, Nintendo Switch",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg"
  }
];

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/videogames",
    title: "Videogames",
  },
  {
    path: "/contact",
    title: "Contact",
  },
  {
    path: "/support",
    title: "Support",
  },
];

// Recuperamos los elementos existentes y creamos nodos
const linkList = document.querySelector("#link_list");
const topList = document.querySelector("#top_list");

// Rellenamos la lista de links
const renderList = () => {
  for (const link of links) {
    // Creamos un li vacio
    const li = document.createElement("li");
    // Creamos un anchor vacio
    const a = document.createElement("a");
    // Rellenamos los datos del anchor
    a.textContent = link.title;
    a.href = link.path;
    // Metemos los anchor en los li
    li.appendChild(a);
    // Metemos cada uno de los li en la lista que recuperamos al principio
    linkList.appendChild(li);
  }
};
// Rellenamos la lista de videojuegos
const renderVideogames = () => {
  for (const videogame of videogames) {
    //Creamos el li
    const li = document.createElement("li");
    //Atajamos y modificamos el contenido del li al completo con template string
    li.innerHTML = `
        <img src="${videogame.cover}" alt="${videogame.name}"/>
        <h3>${videogame.rank} - ${videogame.name}</h3>
        <p>${videogame.developer}</p>
        <p>${videogame.genre}</p>
        <p>${videogame.platform}</p>
    `
    //Metemos cada li en la lista de videojuegos
    topList.appendChild(li);
  }
};

// Al arrancar la aplicación
renderList();
renderVideogames();
