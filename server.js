const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const weapons = [
  {
    id: 1,
    name: "The Last Word",
    weapon_type: "Hand Cannon",
    rarity: "Exotic",
    damage_type: "Kinetic",
    ammo_type: "Primary",
    is_craftable: false,
    impact: 78,
    range: 28,
    stability: 39,
    handling: 32,
    reload: 44,
    aa: 90
  },
  {
    id: 2,
    name: "Ace of Spades",
    weapon_type: "Hand Cannon",
    rarity: "Exotic",
    damage_type: "Kinetic",
    ammo_type: "Primary",
    is_craftable: false,
    impact: 84,
    range: 78,
    stability: 55,
    handling: 54,
    reload: 48,
    aa: 70
  },
  {
    id: 3,
    name: "Gjallarhorn",
    weapon_type: "Rocket Launcher",
    rarity: "Exotic",
    damage_type: "Solar",
    ammo_type: "Heavy",
    is_craftable: false,
    impact: 90,
    range: 90,
    stability: 70,
    handling: 68,
    reload: 55,
    aa: 71
  },
  {
    id: 4,
    name: "Fatebringer",
    weapon_type: "Hand Cannon",
    rarity: "Legendary",
    damage_type: "Kinetic",
    ammo_type: "Primary",
    is_craftable: true,
    impact: 84,
    range: 64,
    stability: 68,
    handling: 55,
    reload: 62,
    aa: 68
  },
  {
    id: 5,
    name: "Hung Jury SR4",
    weapon_type: "Scout Rifle",
    rarity: "Legendary",
    damage_type: "Kinetic",
    ammo_type: "Primary",
    is_craftable: false,
    impact: 67,
    range: 65,
    stability: 61,
    handling: 44,
    reload: 58,
    aa: 70
  }
];

app.get('/api/weapons', (req, res) => {
  let filteredWeapons = [...weapons];

  // Apply filters
  if (req.query.name) {
    filteredWeapons = filteredWeapons.filter(weapon => 
      weapon.name.toLowerCase().includes(req.query.name.toLowerCase())
    );
  }
  if (req.query.weapon_type) {
    filteredWeapons = filteredWeapons.filter(weapon => 
      weapon.weapon_type === req.query.weapon_type
    );
  }
  if (req.query.rarity) {
    filteredWeapons = filteredWeapons.filter(weapon => 
      weapon.rarity === req.query.rarity
    );
  }
  if (req.query.damage_type) {
    filteredWeapons = filteredWeapons.filter(weapon => 
      weapon.damage_type === req.query.damage_type
    );
  }

  res.json(filteredWeapons);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
