interface Plant {
  description: str,
  name: str,
  image: str,
}

const plants = [
  {
    "description": "Peashooters are your first line of defense. They shoot peas at attacking zombies.",
    "name": "Peashooter",
  },
  {
    "description": "Sunflowers are essential for you to produce extra sun. Try planting as many as you can!",
    "name": "Sunflower",
  },
  {
    "description": "Wall-nuts have hard shells which you can use to protect other plants.",
    "name": "Wall-nut",
  },
  {
    "description": "Potato Mines explode on contact, but they take time to arm themselves. Plant them ahead of zombies.",
    "name": "Potato Mine",
  },
  {
    "description": "Cabbage-pults hurl cabbages at the enemy.",
    "name": "Cabbage-pult",
  },
  {
    "description": "Bloomerangs can hit up to three targets in their lane, twice each coming and going!",
    "name": "Bloomerang",
  },
  {
    "description": "Iceberg Lettuces freeze a zombie when stepped on.",
    "name": "Iceberg Lettuce",
  },
  {
    "description": "Grave Busters consume graves they're planted on.",
    "name": "Grave Buster",
  },
  {
    "description": "Bonk Choys rapidly punch nearby enemies that are ahead or behind them.",
    "name": "Bonk Choy",
  },
  {
    "description": "Repeaters fire two peas at a time.",
    "name": "Repeater",
  },
  {
    "description": "Twin Sunflowers give twice as much sun as a normal sunflower.",
    "name": "Twin Sunflower",
  },
  {
    "description": "Kernel-pults fling corn kernels and immobilizing butter at zombies.",
    "name": "Kernel-pult",
  },
  {
    "description": "Snapdragons breathe fire that damages zombies in 6 adjacent tiles.",
    "name": "Snapdragon",
  },
  {
    "description": "Spikeweeds destroy rolling objects and hurt any zombies that step on them.",
    "name": "Spikeweed",
  },
  {
    "description": "Spring Beans bounce back zombies that get too close. Will bounce them into water if nearby.",
    "name": "Spring Bean",
  },
  {
    "description": "Coconut Cannons fire down a single lane, causing a medium explosion on impact.",
    "name": "Coconut Cannon",
  },
  {
    "description": "Threepeaters shoot peas in three lanes.",
    "name": "Threepeater",
  },
  {
    "description": "Spikerocks destroy multiple rolling zombies and damage zombies that walk over them.",
    "name": "Spikerock",
  },
  {
    "description": "Cherry Bombs can blow up all zombies in an area. They have a short fuse so plant them near zombies.",
    "name": "Cherry Bomb",
  },
  {
    "description": "Split Peas shoot peas forwards and backwards.",
    "name": "Split Pea",
  },
  {
    "description": "Chili Beans deliver a crippling bout of gastrointestinal distress.",
    "name": "Chili Bean",
  },
  {
    "description": "Pea Pods can be planted in the same space for up to 5 times the destruction.",
    "name": "Pea Pod",
  },
  {
    "description": "Lightning Reeds shoot lightning bolts at the nearest zombie up to one lane away. The bolt will then arc and hit other zombies.",
    "name": "Lightning Reed",
  },
  {
    "description": "Melon-pults do heavy damage to a group of zombies.",
    "name": "Melon-pult",
  },
  {
    "description": "Tall-nuts are heavy duty plants that block low flying zombies.",
    "name": "Tall-nut",
  },
  {
    "description": "Winter Melons do heavy damage and slow groups of zombies.",
    "name": "Winter Melon",
  },
  {
    "description": "Hot Potatoes melt the ice blocks they're planted on.",
    "name": "Hot Potato",
  },
  {
    "description": "Pepper-pults lob flaming peppers at zombies and keep nearby plants warm.",
    "name": "Pepper-pult",
  },
  {
    "description": "Chard Guards are defensive blockers that can hurl zombies backwards.",
    "name": "Chard Guard",
  },
  {
    "description": "Stunions breathe a stunning cloud of gas on nearby zombies in the lane.",
    "name": "Stunion",
  },
  {
    "description": "Rotobagas shoot projectiles along the four diagonals, in each direction that has a target.",
    "name": "Rotobaga",
  },
  {
    "description": "Red Stingers fire shots at full force when close to home, and become more defensive further from it.",
    "name": "Red Stinger",
  },
  {
    "description": "A.K.E.E.s lob projectiles that bounce from zombie to zombie.",
    "name": "A.K.E.E.",
  },
  {
    "description": "Endurians are defensive plants that deal damage to zombies attacking them.",
    "name": "Endurian",
  },
  {
    "description": "Stallias slow down zombies with a puff of perfume.",
    "name": "Stallia",
  },
  {
    "description": "Gold Leaves create Gold Tiles on planting.",
    "name": "Gold Leaf",
  },
  {
    "description": "Laser Beans fire down a lane, hitting all zombies ahead of it.",
    "name": "Laser Bean",
  },
  {
    "description": "Blovers blow away all zombies in the air.",
    "name": "Blover",
  },
  {
    "description": "Citron shoots powerful balls of plasma.",
    "name": "Citron",
  },
  {
    "description": "E.M.Peaches explode and disable all machines in an area.",
    "name": "E.M.Peach",
  },
  {
    "description": "Infi-nuts are weaker than Wall-nuts, but they can regain health over time.",
    "name": "Infi-nut",
  },
  {
    "description": "Magnifying Grass turns sun into a bolt of colorful damage.",
    "name": "Magnifying Grass",
  },
  {
    "description": "Tile Turnips creates Power Tiles on planting.",
    "name": "Tile Turnip",
  },
  {
    "description": "Sun-shrooms give small suns at first, then normal suns, and finally large suns.",
    "name": "Sun-shroom",
  },
  {
    "description": "Puff-shrooms are short-range shooters that last for a limited time.",
    "name": "Puff-shroom",
  },
  {
    "description": "Fume-shrooms release fumes that damage all zombies in an area.",
    "name": "Fume-shroom",
  },
  {
    "description": "Sun Beans infect zombies with sun. As a zombie takes damage they generate sun.",
    "name": "Sun Bean",
  },
  {
    "description": "Magnet-shrooms remove helmets and other metal objects from zombies.",
    "name": "Magnet-shroom",
  },
  {
    "description": "Phat Beet thumps out damage every few seconds.",
    "name": "Phat Beet",
  },
  {
    "description": "Celery Stalkers wait until zombies pass, then pop up and bash them from behind.",
    "name": "Celery Stalker",
  },
  {
    "description": "Thyme Warps rewind time, sending zombies back where they started, but healing them in the process.",
    "name": "Thyme Warp",
  },
  {
    "description": "Garlic diverts zombies into other lanes.",
    "name": "Garlic",
  },
  {
    "description": "Spore-shroom fires spores that create new Spore-shrooms out of defeated zombies.",
    "name": "Spore-shroom",
  },
  {
    "description": "Intensive Carrot brings eaten plants back to life.",
    "name": "Intensive Carrot",
  },
  {
    "description": "Primal Peashooters shoot heavy peas with a brief stun and occasional knockback at zombies.",
    "name": "Primal Peashooter",
  },
  {
    "description": "Primal Wall-nuts cost a bit more than typical Wall-nuts, but they can be planted much more quickly.",
    "name": "Primal Wall-nut",
  },
  {
    "description": "Perfume-shrooms enchant dinosaurs and charm them into working against the zombies.",
    "name": "Perfume-shroom",
  },
  {
    "description": "Primal Sunflowers pop out large suns instead of regular ones.",
    "name": "Primal Sunflower",
  },
  {
    "description": "Primal Potato Mines cost more than regular Potato Mines, but they arm more quickly and do damage over a larger area.",
    "name": "Primal Potato Mine",
  },
  {
    "description": "Lily Pads let you plant non-aquatic plants on the top of them.",
    "name": "Lily Pad",
  },
  {
    "description": "Tangle Kelp are aquatic plants that pull the first zombie that nears them underwater.",
    "name": "Tangle Kelp",
  },
  {
    "description": "Bowling Bulbs roll shots that can bounce into multiple zombies. The Larger bulbs deal more damage.",
    "name": "Bowling Bulb",
  },
  {
    "description": "Guacodiles is an amphibious plant that fire seeds from a distance. When attacked they will rush off the lawn biting any zombies they encounter.",
    "name": "Guacodile",
  },
  {
    "description": "Banana Launchers can fire explosive bananas at any tile on the lawn.",
    "name": "Banana Launcher",
  },
  {
    "description": "Moonflowers radiate a glow that powers up adjacent Shadow plants.",
    "name": "Moonflower",
  },
  {
    "description": "Nightshades are shadow plants that smack zombies with  slappy leaves.",
    "name": "Nightshade",
  },
  {
    "description": "Shadow-shrooms poison zombies who eat them, inflicting damage over time.",
    "name": "Shadow-shroom",
  },
  {
    "description": "Dusk Lobbers are shadow plants that lob explosive buds down the lane.",
    "name": "Dusk Lobber",
  },
  {
    "description": "Grimroses are shadow plants that behave like landbound Tangle Kelps, dragging up to 3 zombies into the dirt.",
    "name": "Grimrose",
  },
  {
    "description": "Snow Peas fire frozen peas making it hard for zombies to advance.",
    "name": "Snow Pea",
  },
  {
    "description": "Power Lilies create one Plant Food out of thin air.",
    "name": "Power Lily",
  },
  {
    "description": "Squashes will smash the first zombie that gets close.",
    "name": "Squash",
  },
  {
    "description": "Jalapenos destroy an entire lane of zombies.",
    "name": "Jalapeno",
  },
  {
    "description": "Imitaters let you use two of the same plant during a level!",
    "name": "Imitater",
  },
  {
    "description": "When zombies eat Hypno-shrooms, they will turn around and fight for you.",
    "name": "Hypno-shroom",
  },
  {
    "description": "Pea-nuts can shoot peas and block zombies.",
    "name": "Pea-nut",
  },
  {
    "description": "Chompers can swallow a zombie whole, but they are vulnerable while chewing.",
    "name": "Chomper",
  },
  {
    "description": "Homing Thistles fire seeking shots at targets that are closest to home.",
    "name": "Homing Thistle",
  },
  {
    "description": "Ghost Peppers haunt zombies that pass by and explode after a limited time.",
    "name": "Ghost Pepper",
  },
  {
    "description": "Sweet Potatoes attract zombies from other lanes when they are close by.",
    "name": "Sweet Potato",
  },
  {
    "description": "Sap-flings create zombie-slowing puddles of sap.",
    "name": "Sap-fling",
  },
  {
    "description": "Hurrikales push back all zombies in their lane with a chilling wind.",
    "name": "Hurrikale",
  },
  {
    "description": "Fire Peashooters are immune to frost and shoot flaming peas down the lane.",
    "name": "Fire Peashooter",
  },
  {
    "description": "Lava Guavas erupt and leave lava to burn zombies.",
    "name": "Lava Guava",
  },
  {
    "description": "Toadstools gulp down zombies whole, then produce sun.",
    "name": "Toadstool",
  },
  {
    "description": "Strawbursts grow a berry for small, medium, or huge damage.",
    "name": "Strawburst",
  },
  {
    "description": "Cactus fires a penetrating thorn that can damage multiple enemies! Hides underground when zombies are close. Can stretch up and pop balloon zombies.",
    "name": "Cactus",
  },
  {
    "description": "Electric Blueberry randomly electrocutes zombies every so often.",
    "name": "Electric Blueberry",
  },
  {
    "description": "Jack O' Lanterns fire jets of flame over a short distance.",
    "name": "Jack O' Lantern",
  },
  {
    "description": "Grapeshots explode and scatter bouncing projectiles in eight directions.",
    "name": "Grapeshot",
  },
  {
    "description": "Cold Snapdragons breathe icy mist into 6 adjacent tiles that both slows and damage zombies.",
    "name": "Cold Snapdragon",
  },
  {
    "description": "Shrinking Violets shrinks zombies in an area, forcing them to take double damage and reducing the bite damage they inflict.",
    "name": "Shrinking Violet",
  },
  {
    "description": "Escape Roots explode on contact, and can be swapped with other plants that are in danger.",
    "name": "Escape Root",
  },
  {
    "description": "Gold Blooms produce a burst of sun all at once.",
    "name": "Gold Bloom",
  },
  {
    "description": "Electric Currants create electrical fences between ones planted on the same row or column.",
    "name": "Electric Currant",
  },
  {
    "description": "Wasabi Whips lash out with their flaming whips, delivering whuppings to zombies both in front and behind.",
    "name": "Wasabi Whip",
  },
  {
    "description": "Kiwibeasts emit damaging thumps, and become bigger and more powerful the more they are hurt by zombies.",
    "name": "Kiwibeast",
  },
  {
    "description": "Apple Mortar lobs apple cores that damage and briefly stun zombies over three lanes.",
    "name": "Apple Mortar",
  },
  {
    "description": "Witch Hazel uses magical sorcery to transform zombies into Puff-shrooms.",
    "name": "Witch Hazel",
  },
  {
    "description": "Parsnip snips at zombies, and then charges down the lane at the last moment.",
    "name": "Parsnip",
  },
  {
    "description": "Missile Toe launches cold blast that damage, chill and slow zombies.",
    "name": "Missile Toe",
  },
  {
    "description": "Caulipowers use their mental powers to hypnotize random zombies and turn them against their former friends.",
    "name": "Caulipower",
  },
  {
    "description": "Electric Peashooters fire pea-like orbs that pass through zombies and crackle with electrical power, doing damage all the while.",
    "name": "Electric Peashooter",
  },
  {
    "description": "Holly Barrier deals damage to zombies attacking him, and can launch 3 prickly barrier leaves to knock back and damage zombies.",
    "name": "Holly Barrier",
  },
  {
    "description": "Torchwoods turn peas that pass through them into fireballs that deal twice as much damage. They also deal close damage as well as lanewide flame damage on defeat.",
    "name": "Torchwood",
  },
  {
    "description": "Starfruits shoot stars in 5 directions.",
    "name": "Starfruit",
  },
  {
    "description": "Dandelions send explosive seeds down three different lanes, one lane at a time.",
    "name": "Dandelion",
  },
  {
    "description": "Blooming Hearts lob projectiles that infatuate zombies, causing increasing damage the more that hit.",
    "name": "Blooming Heart",
  },
  {
    "description": "Explode-O-Nuts provide protection, and when their shells are eaten, they explode to blow up zombies.",
    "name": "Explode-O-Nut",
  },
  {
    "description": "Aloes heal injured plants to their immediate right when that plant is below a certain amount of health.",
    "name": "Aloe",
  },
  {
    "description": "Bombegranates explode and leave 3×3 grids of exploding seeds that damage zombies.",
    "name": "Bombegranate",
  },
  {
    "description": "Hot Dates attract zombies from lanes above and below them, and then unleash a lane of flame when they're eaten.",
    "name": "Hot Date",
  },
  {
    "description": "Solar Tomatoes stun zombies in a 3×3 area, causing each zombie to drop 50 sun.",
    "name": "Solar Tomato",
  },
  {
    "description": "Shadow Peashooters are shadow plants that fire piercing shadowy peas at zombies.",
    "name": "Shadow Peashooter",
  },
  {
    "description": "Goo Peashooters shoot poison peas at zombies, poisoning them as well as slowing them down.",
    "name": "Goo Peashooter",
  },
  {
    "description": "Sling Peas fire 5 peas in a burst, targeting the zombies closest to your house each time.",
    "name": "Sling Pea",
  },
  {
    "description": "Snap Peas dive underground, burrow towards zombies, then pop up underneath to swallow them in one gulp. Snap Peas then return to their starting spot, chew on the entire matter for a while, and finally spit the zombies' heads out at attackers.",
    "name": "Snap Pea",
  },
  {
    "description": "Zoybean Pods grow from sprouts to full pods, then split open to release helpful plant \"zomboids\" which attack zombies.",
    "name": "Zoybean Pod",
  },
  {
    "description": "Dazey Chains grow through stages, becoming more powerful and releasing a stunning puff of gas at each stage.",
    "name": "Dazey Chain",
  },
  {
    "description": "Electrici-teas wait and emit zaps of electrical energy until they are eaten, at which point the eating zombie explodes into a flurry of electrical discharges.",
    "name": "Electrici-tea",
  },
  {
    "description": "Blastberry Vines can be planted on top of other plants to provide increased defense and an additional attack in the form of lobbed projectiles that break into explosive bomblets.",
    "name": "Blastberry Vine",
  },
  {
    "description": "Pokras deliver piercing, zombie-slowing jabs that add up to a powerful spike launch, then they rest momentarily before starting again.",
    "name": "Pokra",
  },
  {
    "description": "When zombies eat Imp Pears, they become Imps. When Imps eat Imp Pears, they are destroyed, releasing stunning gas.",
    "name": "Imp Pear",
  },
  {
    "description": "Pumpkins can be planted on top of other plants to provide a tough additional layer of armor.",
    "name": "Pumpkin",
  },
  {
    "description": "Pyre Vines can be planted on top of other plants to provide protection from cold plus an additional close range flame attack.",
    "name": "Pyre Vine",
  },
  {
    "description": "Ice Blooms freeze, chill, and damage all zombies on the board, and more so in a 3×3 area around where they're planted.",
    "name": "Ice Bloom",
  },
  {
    "description": "Dartichokes fire high-damage darts down the lane, prioritizing especially dangerous zombies such as Wizards, Octo Zombies, and Healers.Has a limited supply of darts that can deal critical damage.",
    "name": "Dartichoke",
  },
  {
    "description": "Ultomatoes charge up slowly, then fires a devastating beam down the lane that damage zombies as long as the charge lasts. Ultomatoes can be made more powerful by planting multiple Ultomatoes on the same tile.",
    "name": "Ultomato",
  },
  {
    "description": "Gumnuts pop sticky gum onto zombies, pinning them in place and causing them to block other zombies behind them.",
    "name": "Gumnut",
  },
  {
    "description": "Shine Vines are vine plants that amplify the sun production of sun producer plants, except Moonflower, create some sun on their own, and use a sun-stun burst as a last-second defense when attacked.",
    "name": "Shine Vine",
  },
  {
    "description": "Tumbleweeds roar off down the lane, bouncing off zombies and knocking them back with a chance to stun or even flip them off the lawn.",
    "name": "Tumbleweed",
  },
  {
    "description": "Olive Pits drill into the ground and wait to consume zombies foolish enough to walk over them.",
    "name": "Olive Pit",
  },
  {
    "description": "Puffballs explode when planted, stunning and poisoning zombies in three columns.",
    "name": "Puffball",
  },
  {
    "description": "Explode-O-Vines detonate an explosion with knockback when planted, and then a larger explosion when eaten.",
    "name": "Explode-o-Vine",
  },
  {
    "description": "Murkadamia Nuts are defensive shadow plants who, when powered, grow jelly murk to damage attacking zombies.",
    "name": "Murkadamia Nut",
  },
  {
    "description": "Turkey-pults lob tofu turkeys that damage zombies and then charge down the lane to damage even more zombies.",
    "name": "Turkey-pult",
  },
  {
    "description": "Headbutter Lettuces bash zombies in front and behind while occasionally buttering zombies.",
    "name": "Headbutter Lettuce",
  },
  {
    "description": "Boingsettas slam the ground in a \"boing\" that heavily damages grid items, bounces zombies back and chills them.",
    "name": "Boingsetta",
  },
  {
    "description": "Stickybomb Rice lobs sticky rice bombs with timers at zombies.",
    "name": "Stickybomb Rice",
  },
  {
    "description": "Hocus Crocuses use slick sleight-of-petal chicanery to magic zombies close to your home all the way back to the rightmost part of the lawn.",
    "name": "Hocus Crocus",
  },
  {
    "description": "Gloom Vines power individual shadow plants and shoot zombie-damaging gloom in eight directions.",
    "name": "Gloom Vine",
  },
  {
    "description": "Draftodils windmill constantly, slowing flying zombies, and also shoot air cannon blasts that knock flying zombies off the lawn.",
    "name": "Draftodil",
  },
  {
    "description": "Boom Balloon Flowers spawn exploding balloons that can be placed anywhere on the lawn as traps for zombies.",
    "name": "Boom Balloon Flower",
  },
  {
    "description": "Pea Vines planted on top of Appease-mint Family plants provide a significant damage boost to those plants.",
    "name": "Pea Vine",
  },
  {
    "description": "Infernos swirl up devastating fire tornados that sweep zombies back, burning and damaging them.",
    "name": "Inferno",
  },
  {
    "description": "Solar Sages illuminate zombies, causing them to make better choices and depart, leaving behind a trail of sun.",
    "name": "Solar Sage",
  },
  {
    "description": "Power Vines shoot rapid-fire, high-velocity laser bolts, and can increase their firepower by connecting up in a network.",
    "name": "Power Vine",
  },
  {
    "description": "Noctarines are shadow plants that explode and create clouds of damaging and slowing gas.",
    "name": "Noctarine",
  },
  {
    "description": "Heath Seekers are Spear-mint family instant-use plants that burst into a storm of homing, piercing darts.",
    "name": "Heath Seeker",
  },
  {
    "description": "Iceweeds damage and chill zombies that walk over them.",
    "name": "Iceweed",
  },
  {
    "description": "Tiger Grass spawns a grass tiger who leaps out to attack nearby zombies.",
    "name": "Tiger Grass",
  },
  {
    "description": "Teleportato Mine teleports zombies to her location, then explodes.",
    "name": "Teleportato Mine",
  },
  {
    "description": "Blockoli dual-wields two sturdy floret shields, slamming them down to stun and block approaching zombies.",
    "name": "Blockoli",
  },
  {
    "description": "Buttercup butters butter onto attacking zombies, stunning them with butter. Butter!",
    "name": "Buttercup",
  },
  {
    "description": "Bramble Bush traps and damages a zombie. The berry clusters show the number of traps remaining.",
    "name": "Bramble Bush",
  },
  {
    "description": "Rhubarbarian wildly pummels, stuns and punches zombies off the lawn, inflicting heavy damage for a limited time.",
    "name": "Rhubarbarian",
  },
  {
    "description": "Mega Gatling Peas fire four peas at a time, and will occasionally Plant Food itself.",
    "name": "Mega Gatling Pea",
  },
  {
    "description": "Levitaters levitate random zombies.",
    "name": "Levitater",
  },
  {
    "description": "Tomb Tangler swallows Tombstones and emits a fog that will slow Zombies and can randomly pull them into the ground.",
    "name": "Tomb Tangler",
  },
  {
    "description": "Vamporcinis are defensive plants that drain HP from surrounding zombies for a few seconds.",
    "name": "Vamporcini",
  },
  {
    "description": "Meteor Flower conjures meteor strikes from the sky that leave molten tiles.",
    "name": "Meteor Flower",
  },
  {
    "description": "Chilly Pepper's explosion deals heavy damage to zombies and radius damage to tiles in his lane freezing 3 lanes in the aftermath.",
    "name": "Chilly Pepper",
  },
  {
    "description": "Bun Chi chains 5 quick strikes to attack. After each chain, it increases its Chi Stack, up to 5 times that provides more damage with each stack. At the final stack, tap Bun Chi to unleash the Thunder Clap attack!",
    "name": "Bun Chi",
  },
  {
    "description": "When eaten, Bzzz Buttons Electrifies the Zombie, damaging it over time and slowing it down. Electrified zombies shoot Lighting at other nearby zombies.",
    "name": "Bzzz Button",
  },
  {
    "description": "Launches explosive berries at the last zombie in its lane, stunning them for a short time.",
    "name": "BoomBerry",
  },
  {
    "description": "Amphibious plant that fires piercing bubbles down its lane. Fire bubbles across three lanes when planted on water.",
    "name": "SeaFlora",
  },
  {
    "description": "A defensive enchanted projectile plant that captures and shoots pesky bee-like projectiles that target nearby zombies when threatened.",
    "name": "MayBee",
  },
  {
    "description": "A timid mushroom that shoots spore projectiles at zombies in its lane, but hides when they get too close.",
    "name": "Scaredy-shroom",
  },
  {
    "description": "A Fierce Bamboo Warrior that can withstand massive damage. When his shield breaks, his attacks will deal even more damage.",
    "name": "Bamboo Spartan",
  },
  {
    "description": "Seemingly innocuous, Sundew Tangler can spring up under unsuspecting Zombies on her tile, trapping them and leeching them to produce sun.",
    "name": "Sundew Tangler",
  },
  {
    "description": "Mild mannered Wall plant with a dark monstrous side. When Bean Sprout takes too much damage, it transforms into a fist swinging monster.",
    "name": "Bean Sprout",
  },
  {
    "description": "Nightcap shoots piercing poisonous stars down the lane and withdraws into a toxic stealth mode when zombies get too close.",
    "name": "Nightcap",
  },
  {
    "description": "Instant plant that crushes zombies in the lane under its girthy jellified mass. Leaves behind a pool of acidic goo that both slows and damages zombies when a zombie is crushed.",
    "name": "Cran Jelly",
  },
  {
    "description": "An over-pressurized bulb of boiling butter, this instant plant will go BOOM! Burning away zombies around it and flinging blobs of butter across the lawn, stunning any zombie unfortunate to be caught in its shower of buttery goop.",
    "name": "Bud'uh Boom",
  },
  {
    "description": "Smashes zombies in melee range. Emits a chilling aura that both buffs nearby Winter-mint plants and chills zombies.",
    "name": "Ice-shroom",
  },
  {
    "description": "Launches 3 explosive seed pod projectiles at zombies across 3 adjacent lanes. When destroyed, Dragon Bruit will split into 3 smaller plants.",
    "name": "Dragon Bruit",
  },
  {
    "description": "An amphibious plant which spawns a Peel that slithers down the lane to attack zombies and returns back, dealing damage again to all zombies on its way back.",
    "name": "Electric Peel",
  },
  {
    "description": "Fire a short range explosive spore that will damage zombies in a radius, but it will wither away after a short time.",
    "name": "Sea-shroom",
  },
  {
    "description": "An amphibious mushroom that will spawn mini versions of itself to guard adjacent plants. These Mini-shrooms can gobble up zombies, as well as significantly boost mushrooms and other plants they share a tile with.",
    "name": "Guard-shroom",
  },
  {
    "description": "An amphibious plant that can support both ground and water type plants. Its abilities will change based on the type plant it is host to.",
    "name": "Aqua Vine",
  },
  {
    "description": "Utility launcher plant that can be toggled between focus and cluster firing modes. Its long range attacks can reach all parts of the lawn.",
    "name": "Mangofier",
  },
  {
    "description": "Lobs immobilizing, sticky webs at zombies on adjacent lanes. Affected zombies may be turned into cocoons that will explode and deal damage to all surrounding zombies.",
    "name": "Blast Spinner",
  },
  {
    "description": "Doom-shroom explodes when destroyed. Depending on the growth stage, Doom-shroom explosion radius will increase and it may even spawn additional Doom-shrooms.",
    "name": "Doom-shroom",
  },
  {
    "description": "Blaze Leaf attacks Zombies in a large radius. Every third strike, it releases the Blaze Wave attack which damages zombies in multiple lanes as it travels along a straight path.",
    "name": "Blaze Leaf",
  },
  {
    "description": "Frost Bonnet can switch between Fire and Ice bloom. Each mode deals a different damage type, allowing Frost Bonnet to both either set zombies on fire or freeze them solid.",
    "name": "Frost Bonnet",
  },
  {
    "description": "Znake Lily swirls up enchanted tornados that transform zombies into plant \"zomboids\" to attack them.",
    "name": "Znake Lily",
  },
  {
    "description": "Sweetheart Snare slows and damages zombies as they step through her.",
    "name": "Sweetheart Snare",
  },
  {
    "description": "Hammeruit smashes zombies with its charging hammer attacks.",
    "name": "Hammeruit",
  },
  {
    "description": "An amphibious plant that launches a volley of 3 water covered peas, in different directions, that deals damage to zombies. It creates a puddle when placed on ground.",
    "name": "Seashooter",
  },
  {
    "description": "Corn-fetti Popper fires zombie piercing cobs that can push back zombies close enough to it.",
    "name": "Corn-fetti Popper",
  },
  {
    "description": "Devour Bloom gobbles up zombies that walk or fly over it. It can devour multiple zombies at the same time, instantly eliminating them. However, larger zombies are a bit too much for Devour Bloom to eat up, so they only take damage instead.",
    "name": "Devour Bloom",
  },
  {
    "description": "Sour Shot launches seeds at zombies upon contact, providing a constant stream of damage and crowd control. It can knock back zombies, but larger zombies might only take partial damage.",
    "name": "Sour Shot",
  },
  {
    "description": "Brain Stem excels at crowd control and eliminating high-value targets. It draws zombies into its lane, shrinks them, and provides a unique rescue mechanism when zombies approach the house.",
    "name": "Brain Stem",
  },
  {
    "description": "Zombies got you cornered? Worry not! Whether you need heals, a bit of extra firepower, or straight up need to revive a downed plant, Lemonaid has got you covered!",
    "name": "Lemonaid",
  },
  {
    "description": "Reflects spells back, turning zombies into sheep and wizards into sheepish wonders!",
    "name": "Rose",
  },
  {
    "description": "Fila-mints do electric damage and provide a temporary boost to all Fila-mint Family plants on the lawn.",
    "name": "Fila-mint",
  },
  {
    "description": "Pepper-mints set off lane-wide bursts of flame when planted and provide a temporary boost to all Pepper-mint plants on the lawn.",
    "name": "Pepper-mint",
  },
  {
    "description": "Winter-mints chill all zombies present on the board when planted and provide a temporary boost to all Winter-mint Family plants on the lawn.",
    "name": "Winter-mint",
  },
  {
    "description": "Enlighten-mints give a burst of sun when planted, and provide and additional temporary boost to Enlighten-mint Family plants.",
    "name": "Enlighten-mint",
  },
  {
    "description": "Reinforce-mints push all zombies back and provide a temporary boost to all Reinforce-mint Family plants on the lawn.",
    "name": "Reinforce-mint",
  },
  {
    "description": "Bombard-mints set off a number of explosions on the board and provide a temporary boost to all Bombard-mint Family plants on the lawn.",
    "name": "Bombard-mint",
  },
  {
    "description": "Ail-mints poison all zombies when planted and provide a temporary boost to all Ail-mint Family plants on the lawn.",
    "name": "Ail-mint",
  },
  {
    "description": "Enchant-mints randomly hypnotize a number of zombies and provide a temporary boost to all Enchant-mint Family plants on the lawn.",
    "name": "Enchant-mint",
  },
  {
    "description": "Contain-mints stun all zombies on the board and provide a temporary boost to all Contain-mint Family plants on the lawn.",
    "name": "Contain-mint",
  },
  {
    "description": "Enforce-mints shrink a number of zombies when planted and provide a temporary boost to all Enforce-mint Family plants on the lawn.",
    "name": "Enforce-mint",
  },
  {
    "description": "Arma-mints launch a volley of heavy stunning projectiles and provide a temporary boost to all Arma-mint Family plants on the lawn.",
    "name": "Arma-mint",
  },
  {
    "description": "Conceal-mints power up all shadow plants on the lawn, drag some number of zombies to their doom, and provide an additional temporary boost to Conceal-mint Family plants.",
    "name": "Conceal-mint",
  },
  {
    "description": "Spear-mints generate a number of higher level Spikerocks and provide a temporary boost all Spear-mint family plants on the lawn.",
    "name": "Spear-mint",
  },
  {
    "description": "Appease-mints fire a volley of huge peas that break into smaller peas and provide a temporary boost to all Appease-mint Family plants on the lawn.",
    "name": "Appease-mint",
  }
];

plants.sort((a, b) => a.name.localeCompare(b.name));

export const Plants: Plant[] = plants
  .map(plant => {
    plant.imagePath = `${plant.name.replaceAll(".", "").replaceAll(" ", "-").toLowerCase()}.png`;
    return plant;
  });
