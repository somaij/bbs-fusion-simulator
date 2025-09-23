const commandTypes = {
			"Aerial Slam": "Physical",
			"Aero": "Magic",
			"Aeroga": "Magic",
			"Aerora": "Magic",
			"Air Slide": "Movement",
			"Barrier": "Defense",
			"Barrier Surge": "Physical",
			"Bind": "Magic",
			"Binding Strike": "Physical",
			"Blackout": "Magic",
			"Blitz": "Physical",
			"Blizzaga": "Magic",
			"Blizzara": "Magic",
			"Blizzard": "Magic",
			"Blizzard Edge": "Physical",
			"Block": "Defense",
			"Break Time": "Physical",
			"Brutal Blast": "Physical",
			"Cartwheel": "Movement",
			"Collision Magnet": "Physical",
			"Confuse": "Magic",
			"Confusion Strike": "Physical",
			"Counter Hammer": "Reprisal",
			"Crawling Fire": "Magic",
			"Cura": "Magic",
			"Curaga": "Magic",
			"Cure": "Magic",
			"Dark Haze": "Physical",
			"Deep Freeze": "Magic",
			"Dodge Roll": "Movement",
			"Esuna": "Magic",
			"Fira": "Magic",
			"Firaga": "Magic",
			"Firaga Burst": "Magic",
			"Fire": "Magic",
			"Fire Dash": "Physical",
			"Fire Strike": "Physical",
			"Fire Surge": "Physical",
			"Fission Firaga": "Magic",
			"Focus Barrier": "Defense",
			"Focus Block": "Defense",
			"Freeze Raid": "Physical",
			"Geo Impact": "Physical",
			"Glide": "Movement",
			"High Jump": "Movement",
			"Ignite": "Magic",
			"Magnega": "Magic",
			"Magnera": "Magic",
			"Magnet": "Magic",
			"Magnet Spiral": "Physical",
			"Mine Shield": "Magic",
			"Mine Square": "Magic",
			"Poison": "Magic",
			"Poison Edge": "Physical",
			"Quake": "Magic",
			"Quick Blitz": "Physical",
			"Renewal Barrier": "Defense",
			"Renewal Block": "Defense",
			"Sliding Dash": "Physical",
			"Slot Edge": "Physical",
			"Slow": "Magic",
			"Sonic Blade": "Physical",
			"Stop": "Magic",
			"Stopga": "Magic",
			"Stopra": "Magic",
			"Strike Raid": "Physical",
			"Stun Block": "Defense",
			"Stun Edge": "Physical",
			"Thundaga": "Magic",
			"Thundara": "Magic",
			"Thunder": "Magic",
			"Thunder Surge": "Physical",
			"Treasure Raid": "Physical",
			"Triple Blizzaga": "Magic",
			"Warp": "Magic",
			"Wind Raid": "Physical",
			"Wishing Edge": "Physical",
			"Zero Graviga": "Magic",
			"Zero Gravira": "Magic",
			"Zero Gravity": "Magic",
			"Ars Arcanum": "Physical",
			"Time Splicer": "Physical",
			"Tornado": "Magic",
			"Lightning Ray": "Shotlock",
			"Magic Hour": "Physical",
			"Tornado Strike": "Physical",
			"Windcutter": "Physical",
			"Ice Slide": "Movement",
			"Homing Slide": "Movement",
			"Confuse Barrier": "Defense",
			"Stop Barrier": "Defense",
			"Mini": "Magic",
			"Limit Storm": "Physical",
			"Dark Firaga": "Magic",
			"Raging Storm": "Magic",
			"Triple Firaga": "Magic",
			"Meteor Crash": "Physical",
			"Meteor Shower": "Shotlock",
			"Glacier": "Magic",
			"Ice Barrage": "Magic",
			"Bio Barrage": "Shotlock",
			"Poison Block": "Defense",
			"Faith": "Magic",
			"Meteor": "Magic",
			"Firewheel": "Movement",
			"Ars Solum": "Physical",
			"Payback Fang": "Reprisal",
			"Mega Flare": "Magic",
			"Energy Magnet": "Magic",
			"Salvation": "Physical",
			"Chaos Blade": "Physical",
			"Zantetsuken": "Physical",
			"Sacrifice": "Physical",
			"Spark Raid": "Physical",
			"Thunder Roll": "Movement",
			"Fire Glide": "Movement",
			"Thundaga Shot": "Magic",
			"Payback Surge": "Reprisal",
			"Seeker Mine": "Magic",
			"D-Link Magnet": "Magic",
			"Munny Magnet": "Magic",
			"Transcendence": "Magic",
			"Payback Raid": "Reprisal"
		}

		;

		const commandData = [{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blitz",
				Type: "O",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Slot Edge",
				Odds: "90",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Blitz",
				Type: "P",
				Ingredient1: "Barrier Surge",
				Ingredient2: "Wishing Edge",
				Odds: "90",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blitz",
				Type: "K",
				Ingredient1: "Stun Edge",
				Ingredient2: "Slot Edge",
				Odds: "90",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Meteor Crash",
				Type: "N",
				Ingredient1: "Blitz",
				Ingredient2: "Quake",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Meteor Crash",
				Type: "D",
				Ingredient1: "Fire Strike",
				Ingredient2: "Brutal Blast",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Magic Hour",
				Type: "O",
				Ingredient1: "Blitz",
				Ingredient2: "Zero Graviga",
				Odds: "90",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Magic Hour",
				Type: "N",
				Ingredient1: "Barrier Surge",
				Ingredient2: "Aeroga",
				Odds: "90",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fire Dash",
				Type: "D",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Fire",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fire Dash",
				Type: "C",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Fira",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fire Dash",
				Type: "D",
				Ingredient1: "Confusion Strike",
				Ingredient2: "Fire",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Dark Haze",
				Type: "D",
				Ingredient1: "Fire Dash",
				Ingredient2: "Zero Gravira",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Dark Haze",
				Type: "Aqua",
				Ingredient1: "Fire Dash",
				Ingredient2: "Blackout",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Dark Haze",
				Type: "C",
				Ingredient1: "Fire Surge",
				Ingredient2: "Zero Gravity",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Sonic Blade",
				Type: "D",
				Ingredient1: "Blitz",
				Ingredient2: "Dark Haze",
				Odds: "90",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Sonic Blade",
				Type: "N",
				Ingredient1: "Blitz",
				Ingredient2: "Air Slide",
				Odds: "90",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Sonic Blade",
				Type: "K",
				Ingredient1: "Fire Dash",
				Ingredient2: "Thunder Surge",
				Odds: "90",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Chaos Blade",
				Type: "B",
				Ingredient1: "Dark Haze",
				Ingredient2: "Sonic Blade",
				Odds: "90",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Zantetsuken",
				Type: "B",
				Ingredient1: "Dark Haze",
				Ingredient2: "Stopga",
				Odds: "80",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Zantetsuken",
				Type: "F",
				Ingredient1: "Sonic Blade",
				Ingredient2: "Stopga",
				Odds: "80",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Air Combo Plus",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Strike Raid",
				Type: "O",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Sliding Dash",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Freeze Raid",
				Type: "I",
				Ingredient1: "Strike Raid",
				Ingredient2: "Blizzara",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Freeze Raid",
				Type: "K",
				Ingredient1: "Blizzard Edge",
				Ingredient2: "Binding Strike",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Treasure Raid",
				Type: "O",
				Ingredient1: "Strike Raid",
				Ingredient2: "Slot Edge",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Treasure Raid",
				Type: "D",
				Ingredient1: "Slot Edge",
				Ingredient2: "Magnet",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Treasure Raid",
				Type: "K",
				Ingredient1: "Slot Edge",
				Ingredient2: "Magnera",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Spark Raid",
				Type: "J",
				Ingredient1: "Freeze Raid",
				Ingredient2: "Magnega",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Reload Boost",
					pulsing: "Combo F Boost",
					wellspring: "Once More",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Spark Raid",
				Type: "N",
				Ingredient1: "Treasure Raid",
				Ingredient2: "Magnega",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Spark Raid",
				Type: "P",
				Ingredient1: "Thunder Surge",
				Ingredient2: "Dodge Roll",
				Odds: "20",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Spark Raid",
				Type: "L",
				Ingredient1: "Thundaga",
				Ingredient2: "Dodge Roll",
				Odds: "20",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Spark Raid",
				Type: "L",
				Ingredient1: "Dodge Roll",
				Ingredient2: "Stun Block",
				Odds: "20",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Wind Raid",
				Type: "B",
				Ingredient1: "Freeze Raid",
				Ingredient2: "Aeroga",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Wind Raid",
				Type: "F",
				Ingredient1: "Treasure Raid",
				Ingredient2: "Aeroga",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Air Combo Plus",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fire Surge",
				Type: "D",
				Ingredient1: "Fire Dash",
				Ingredient2: "Ignite",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fire Surge",
				Type: "Aqua",
				Ingredient1: "Fire Strike",
				Ingredient2: "Fira",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fire Surge",
				Type: "O",
				Ingredient1: "Confusion Strike",
				Ingredient2: "Fira",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fire Surge",
				Type: "K",
				Ingredient1: "Binding Strike",
				Ingredient2: "Fira",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Barrier Surge",
				Type: "D",
				Ingredient1: "Fire Dash",
				Ingredient2: "Barrier",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Barrier Surge",
				Type: "K",
				Ingredient1: "Stun Edge",
				Ingredient2: "Barrier",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Thunder Surge",
				Type: "D",
				Ingredient1: "Fire Dash",
				Ingredient2: "Thundara",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Thunder Surge",
				Type: "G",
				Ingredient1: "Freeze Raid",
				Ingredient2: "Thundara",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Thunder Surge",
				Type: "I",
				Ingredient1: "Stun Edge",
				Ingredient2: "Thundara",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Thunder Surge",
				Type: "I",
				Ingredient1: "Confusion Strike",
				Ingredient2: "Thundara",
				Odds: "95",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Aerial Slam",
				Type: "Aqua",
				Ingredient1: "Fire Dash",
				Ingredient2: "High Jump",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Aerial Slam",
				Type: "D",
				Ingredient1: "Fire Surge",
				Ingredient2: "Aero",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Aerial Slam",
				Type: "C",
				Ingredient1: "Fire Strike",
				Ingredient2: "Aerora",
				Odds: "90",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Ars Solum",
				Type: "B",
				Ingredient1: "Dark Haze",
				Ingredient2: "Sonic Blade",
				Odds: "20",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Ars Solum",
				Type: "B",
				Ingredient1: "Dark Haze",
				Ingredient2: "Stopga",
				Odds: "20",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Ars Solum",
				Type: "F",
				Ingredient1: "Sonic Blade",
				Ingredient2: "Stopga",
				Odds: "20",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Air Combo Plus",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Ars Solum",
				Type: "K",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Thunder",
				Odds: "5",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Ars Solum",
				Type: "L",
				Ingredient1: "Strike Raid",
				Ingredient2: "Thunder",
				Odds: "5",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Ars Solum",
				Type: "K",
				Ingredient1: "Strike Raid",
				Ingredient2: "Thundara",
				Odds: "5",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Ars Solum",
				Type: "I",
				Ingredient1: "Confusion Strike",
				Ingredient2: "Thundara",
				Odds: "5",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Ars Arcanum",
				Type: "F",
				Ingredient1: "Blitz",
				Ingredient2: "Aerial Slam",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Air Combo Plus",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Ars Arcanum",
				Type: "O",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Slot Edge",
				Odds: "10",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Ars Arcanum",
				Type: "C",
				Ingredient1: "Fire Strike",
				Ingredient2: "Aerora",
				Odds: "10",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Ars Arcanum",
				Type: "G",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Blizzard",
				Odds: "5",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Ars Arcanum",
				Type: "H",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Blizzara",
				Odds: "5",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Ars Arcanum",
				Type: "E",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Blizzard",
				Odds: "5",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Ars Arcanum",
				Type: "G",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Blizzara",
				Odds: "5",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Ars Arcanum",
				Type: "P",
				Ingredient1: "Poison Edge",
				Ingredient2: "Cura",
				Odds: "5",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Ars Arcanum",
				Type: "G",
				Ingredient1: "Blizzard Edge",
				Ingredient2: "Cura",
				Odds: "5",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Ventus", "Aqua"],
				Commands: "Time Splicer",
				Type: "F",
				Ingredient1: "Aerial Slam",
				Ingredient2: "Stopga",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Air Combo Plus",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Time Splicer",
				Type: "C",
				Ingredient1: "Stopga",
				Ingredient2: "Barrier",
				Odds: "20",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Time Splicer",
				Type: "P",
				Ingredient1: "Barrier Surge",
				Ingredient2: "Wishing Edge",
				Odds: "10",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Ventus", "Aqua"],
				Commands: "Time Splicer",
				Type: "K",
				Ingredient1: "Stun Edge",
				Ingredient2: "Slot Edge",
				Odds: "10",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Poison Edge",
				Type: "O",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Poison",
				Odds: "95",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Poison Edge",
				Type: "K",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Poison",
				Odds: "95",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Poison Edge",
				Type: "D",
				Ingredient1: "Strike Raid",
				Ingredient2: "Poison",
				Odds: "95",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Wishing Edge",
				Type: "O",
				Ingredient1: "Strike Raid",
				Ingredient2: "Barrier Surge",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Wishing Edge",
				Type: "K",
				Ingredient1: "Barrier Surge",
				Ingredient2: "Stun Edge",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Wishing Edge",
				Type: "J",
				Ingredient1: "Stun Edge",
				Ingredient2: "Binding Strike",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Reload Boost",
					pulsing: "Combo F Boost",
					wellspring: "Once More",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blizzard Edge",
				Type: "G",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Blizzard",
				Odds: "95",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blizzard Edge",
				Type: "H",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Blizzara",
				Odds: "95",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blizzard Edge",
				Type: "E",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Blizzard",
				Odds: "95",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blizzard Edge",
				Type: "G",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Blizzara",
				Odds: "95",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Stun Edge",
				Type: "K",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Thunder",
				Odds: "95",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Stun Edge",
				Type: "L",
				Ingredient1: "Strike Raid",
				Ingredient2: "Thunder",
				Odds: "95",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Stun Edge",
				Type: "K",
				Ingredient1: "Strike Raid",
				Ingredient2: "Thundara",
				Odds: "95",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Slot Edge",
				Type: "O",
				Ingredient1: "Wishing Edge",
				Ingredient2: "Cure",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Slot Edge",
				Type: "P",
				Ingredient1: "Poison Edge",
				Ingredient2: "Cura",
				Odds: "95",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Slot Edge",
				Type: "G",
				Ingredient1: "Blizzard Edge",
				Ingredient2: "Cura",
				Odds: "95",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Slot Edge",
				Type: "N",
				Ingredient1: "Curaga",
				Ingredient2: "Renewal Block",
				Odds: "90",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Slot Edge",
				Type: "P",
				Ingredient1: "Curaga",
				Ingredient2: "Focus Block",
				Odds: "90",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Slot Edge",
				Type: "N",
				Ingredient1: "Curaga",
				Ingredient2: "Renewal Barrier",
				Odds: "90",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Slot Edge",
				Type: "P",
				Ingredient1: "Curaga",
				Ingredient2: "Focus Barrier",
				Odds: "90",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fire Strike",
				Type: "D",
				Ingredient1: "Poison Edge",
				Ingredient2: "Fira",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Fire Strike",
				Type: "Aqua",
				Ingredient1: "Wishing Edge",
				Ingredient2: "Ignite",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fire Strike",
				Type: "K",
				Ingredient1: "Stun Edge",
				Ingredient2: "Fire",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Confusion Strike",
				Type: "O",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Confuse",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Confusion Strike",
				Type: "K",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Zero Gravity",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Confusion Strike",
				Type: "G",
				Ingredient1: "Strike Raid",
				Ingredient2: "Confuse",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Binding Strike",
				Type: "K",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Bind",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Binding Strike",
				Type: "O",
				Ingredient1: "Strike Raid",
				Ingredient2: "Bind",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Binding Strike",
				Type: "I",
				Ingredient1: "Stun Edge",
				Ingredient2: "Zero Gravity",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Brutal Blast",
				Type: "O",
				Ingredient1: "Stun Edge",
				Ingredient2: "Mine Shield",
				Odds: "70",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Brutal Blast",
				Type: "L",
				Ingredient1: "Binding Strike",
				Ingredient2: "Mine Square",
				Odds: "70",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Tornado Strike",
				Type: "G",
				Ingredient1: "Confusion Strike",
				Ingredient2: "Aeroga",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Tornado Strike",
				Type: "F",
				Ingredient1: "Binding Strike",
				Ingredient2: "Aeroga",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Air Combo Plus",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Magnet Spiral",
				Type: "K",
				Ingredient1: "Binding Strike",
				Ingredient2: "Collision Magnet",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Magnet Spiral",
				Type: "J",
				Ingredient1: "Binding Strike",
				Ingredient2: "Magnega",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Reload Boost",
					pulsing: "Combo F Boost",
					wellspring: "Once More",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Magnet Spiral",
				Type: "K",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Magnera",
				Odds: "20",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Magnet Spiral",
				Type: "L",
				Ingredient1: "Stun Edge",
				Ingredient2: "Magnera",
				Odds: "20",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Magnet Spiral",
				Type: "I",
				Ingredient1: "Zero Gravira",
				Ingredient2: "Magnet",
				Odds: "20",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Windcutter",
				Type: "F",
				Ingredient1: "Binding Strike",
				Ingredient2: "Aeroga",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Air Combo Plus",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Windcutter",
				Type: "G",
				Ingredient1: "Confusion Strike",
				Ingredient2: "Aeroga",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Limit Storm",
				Type: "G",
				Ingredient1: "Brutal Blast",
				Ingredient2: "Confusion Strike",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Limit Storm",
				Type: "D",
				Ingredient1: "Brutal Blast",
				Ingredient2: "Binding Strike",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Salvation",
				Type: "N",
				Ingredient1: "Wind Raid",
				Ingredient2: "Curaga",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Collision Magnet",
				Type: "K",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Magnera",
				Odds: "80",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Collision Magnet",
				Type: "L",
				Ingredient1: "Stun Edge",
				Ingredient2: "Magnera",
				Odds: "80",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Collision Magnet",
				Type: "I",
				Ingredient1: "Zero Gravira",
				Ingredient2: "Magnet",
				Odds: "80",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Geo Impact",
				Type: "N",
				Ingredient1: "Brutal Blast",
				Ingredient2: "Brutal Blast",
				Odds: "70",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Sacrifice",
				Type: "B",
				Ingredient1: "Dark Haze",
				Ingredient2: "Warp",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Sacrifice",
				Type: "D",
				Ingredient1: "Poison Edge",
				Ingredient2: "Warp",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Break Time",
				Type: "N",
				Ingredient1: "Curaga",
				Ingredient2: "Renewal Block",
				Odds: "10",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Break Time",
				Type: "N",
				Ingredient1: "Curaga",
				Ingredient2: "Renewal Barrier",
				Odds: "10",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Break Time",
				Type: "P",
				Ingredient1: "Curaga",
				Ingredient2: "Focus Block",
				Odds: "10",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Break Time",
				Type: "P",
				Ingredient1: "Curaga",
				Ingredient2: "Focus Barrier",
				Odds: "10",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fira",
				Type: "D",
				Ingredient1: "Fire Dash",
				Ingredient2: "Fire",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fira",
				Type: "D",
				Ingredient1: "Fire Strike",
				Ingredient2: "Fire",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fira",
				Type: "Aqua",
				Ingredient1: "Fire",
				Ingredient2: "Fire",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fira",
				Type: "C",
				Ingredient1: "Fire",
				Ingredient2: "Ignite",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Firaga",
				Type: "D",
				Ingredient1: "Fire Dash",
				Ingredient2: "Fira",
				Odds: "90",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Firaga",
				Type: "Aqua",
				Ingredient1: "Fire",
				Ingredient2: "Fira",
				Odds: "90",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Firaga",
				Type: "B",
				Ingredient1: "Fira",
				Ingredient2: "Fira",
				Odds: "90",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Dark Firaga",
				Type: "D",
				Ingredient1: "Dark Haze",
				Ingredient2: "Firaga",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Dark Firaga",
				Type: "B",
				Ingredient1: "Firaga",
				Ingredient2: "Blackout",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fission Firaga",
				Type: "Aqua",
				Ingredient1: "Fira",
				Ingredient2: "Aeroga",
				Odds: "80",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fission Firaga",
				Type: "Aqua",
				Ingredient1: "Firaga",
				Ingredient2: "Aerora",
				Odds: "80",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Fission Firaga",
				Type: "B",
				Ingredient1: "Firaga",
				Ingredient2: "Aeroga",
				Odds: "80",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Triple Firaga",
				Type: "Aqua",
				Ingredient1: "Fira",
				Ingredient2: "Firaga",
				Odds: "95",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Triple Firaga",
				Type: "D",
				Ingredient1: "Blitz",
				Ingredient2: "Firaga",
				Odds: "90",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Triple Firaga",
				Type: "B",
				Ingredient1: "Firaga",
				Ingredient2: "Firaga",
				Odds: "90",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Crawling Fire",
				Type: "Aqua",
				Ingredient1: "Firaga",
				Ingredient2: "Slow",
				Odds: "80",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Crawling Fire",
				Type: "D",
				Ingredient1: "Firaga",
				Ingredient2: "Stopra",
				Odds: "80",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Crawling Fire",
				Type: "B",
				Ingredient1: "Firaga",
				Ingredient2: "Stopga",
				Odds: "80",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blizzara",
				Type: "G",
				Ingredient1: "Strike Raid",
				Ingredient2: "Blizzard",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blizzara",
				Type: "G",
				Ingredient1: "Blizzard Edge",
				Ingredient2: "Blizzard",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blizzara",
				Type: "E",
				Ingredient1: "Blizzard",
				Ingredient2: "Blizzard",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blizzara",
				Type: "H",
				Ingredient1: "Blizzard",
				Ingredient2: "Aero",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blizzaga",
				Type: "G",
				Ingredient1: "Blizzard Edge",
				Ingredient2: "Blizzara",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blizzaga",
				Type: "E",
				Ingredient1: "Blizzard",
				Ingredient2: "Blizzara",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blizzaga",
				Type: "F",
				Ingredient1: "Blizzara",
				Ingredient2: "Blizzara",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Air Combo Plus",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Triple Blizzaga",
				Type: "G",
				Ingredient1: "Blitz",
				Ingredient2: "Blizzaga",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Triple Blizzaga",
				Type: "E",
				Ingredient1: "Blizzara",
				Ingredient2: "Blizzaga",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Triple Blizzaga",
				Type: "F",
				Ingredient1: "Blizzaga",
				Ingredient2: "Blizzaga",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Air Combo Plus",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Thundara",
				Type: "K",
				Ingredient1: "Stun Edge",
				Ingredient2: "Thunder",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Thundara",
				Type: "I",
				Ingredient1: "Thunder",
				Ingredient2: "Thunder",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Thundara",
				Type: "L",
				Ingredient1: "Zero Gravity",
				Ingredient2: "Magnet",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Thundaga",
				Type: "K",
				Ingredient1: "Binding Strike",
				Ingredient2: "Thundara",
				Odds: "90",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Thundaga",
				Type: "I",
				Ingredient1: "Thunder",
				Ingredient2: "Thundara",
				Odds: "90",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Thundaga",
				Type: "J",
				Ingredient1: "Thundara",
				Ingredient2: "Thundara",
				Odds: "90",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Reload Boost",
					pulsing: "Combo F Boost",
					wellspring: "Once More",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Thundaga Shot",
				Type: "I",
				Ingredient1: "Strike Raid",
				Ingredient2: "Thundaga",
				Odds: "85",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Thundaga Shot",
				Type: "E",
				Ingredient1: "Freeze Raid",
				Ingredient2: "Thundaga",
				Odds: "85",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Thundaga Shot",
				Type: "Aqua",
				Ingredient1: "Firaga",
				Ingredient2: "Thundaga",
				Odds: "85",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Cura",
				Type: "I",
				Ingredient1: "Thunder",
				Ingredient2: "Cure",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Cura",
				Type: "M",
				Ingredient1: "Cure",
				Ingredient2: "Cure",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Cura",
				Type: "O",
				Ingredient1: "Cure",
				Ingredient2: "Aero",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Curaga",
				Type: "M",
				Ingredient1: "Cure",
				Ingredient2: "Cura",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Curaga",
				Type: "N",
				Ingredient1: "Cura",
				Ingredient2: "Cura",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Mine Shield",
				Type: "Aqua",
				Ingredient1: "Fira",
				Ingredient2: "Zero Gravity",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Mine Shield",
				Type: "C",
				Ingredient1: "Fira",
				Ingredient2: "Block",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Mine Shield",
				Type: "D",
				Ingredient1: "Ignite",
				Ingredient2: "Stop",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Mine Shield",
				Type: "M",
				Ingredient1: "Stopra",
				Ingredient2: "Block",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Mine Square",
				Type: "Aqua",
				Ingredient1: "Fira",
				Ingredient2: "Stop",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Mine Square",
				Type: "C",
				Ingredient1: "Fira",
				Ingredient2: "Barrier",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Mine Square",
				Type: "D",
				Ingredient1: "Aerora",
				Ingredient2: "Ignite",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Mine Square",
				Type: "M",
				Ingredient1: "Stopra",
				Ingredient2: "Barrier",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Seeker Mine",
				Type: "B",
				Ingredient1: "Mine Shield",
				Ingredient2: "Mine Square",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Seeker Mine",
				Type: "C",
				Ingredient1: "Mine Shield",
				Ingredient2: "Magnega",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Seeker Mine",
				Type: "D",
				Ingredient1: "Mine Square",
				Ingredient2: "Magnega",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Zero Gravira",
				Type: "I",
				Ingredient1: "Thunder",
				Ingredient2: "Zero Gravity",
				Odds: "90",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Zero Gravira",
				Type: "M",
				Ingredient1: "Zero Gravity",
				Ingredient2: "Zero Gravity",
				Odds: "90",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Zero Gravira",
				Type: "P",
				Ingredient1: "Magnet",
				Ingredient2: "Aero",
				Odds: "90",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Zero Graviga",
				Type: "I",
				Ingredient1: "Thundara",
				Ingredient2: "Zero Gravira",
				Odds: "80",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Zero Graviga",
				Type: "M",
				Ingredient1: "Zero Gravity",
				Ingredient2: "Zero Gravira",
				Odds: "80",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Zero Graviga",
				Type: "N",
				Ingredient1: "Zero Gravira",
				Ingredient2: "Zero Gravira",
				Odds: "80",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Magnet",
				Type: "",
				Ingredient1: "Keyblade Board",
				Ingredient2: "",
				Odds: "",
				abilities: {
					shimmering: "",
					fleeting: "",
					pulsing: "",
					wellspring: "",
					soothing: "",
					hungry: "",
					abounding: "",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Magnera",
				Type: "K",
				Ingredient1: "Stun Edge",
				Ingredient2: "Magnet",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Magnera",
				Type: "I",
				Ingredient1: "Thunder",
				Ingredient2: "Magnet",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Magnera",
				Type: "M",
				Ingredient1: "Magnet",
				Ingredient2: "Magnet",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Magnega",
				Type: "I",
				Ingredient1: "Magnet",
				Ingredient2: "Magnera",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Magnega",
				Type: "J",
				Ingredient1: "Magnera",
				Ingredient2: "Magnera",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Reload Boost",
					pulsing: "Combo F Boost",
					wellspring: "Once More",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Munny Magnet",
				Type: "K",
				Ingredient1: "Wishing Edge",
				Ingredient2: "Magnera",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Munny Magnet",
				Type: "I",
				Ingredient1: "Thundara",
				Ingredient2: "Magnera",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Energy Magnet",
				Type: "M",
				Ingredient1: "Cure",
				Ingredient2: "Magnera",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Energy Magnet",
				Type: "N",
				Ingredient1: "Cura",
				Ingredient2: "Magnera",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "D-Link Magnet",
				Type: "L",
				Ingredient1: "Zero Gravira",
				Ingredient2: "Magnera",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "D-Link Magnet",
				Type: "I",
				Ingredient1: "Magnera",
				Ingredient2: "Stopra",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Aerora",
				Type: "G",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Aero",
				Odds: "95",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Aerora",
				Type: "I",
				Ingredient1: "Thunder",
				Ingredient2: "Aero",
				Odds: "95",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Aerora",
				Type: "E",
				Ingredient1: "Aero",
				Ingredient2: "Aero",
				Odds: "95",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Aeroga",
				Type: "O",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Aerora",
				Odds: "90",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Aeroga",
				Type: "M",
				Ingredient1: "Aero",
				Ingredient2: "Aerora",
				Odds: "90",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Aeroga",
				Type: "N",
				Ingredient1: "Aerora",
				Ingredient2: "Aerora",
				Odds: "90",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Warp",
				Type: "I",
				Ingredient1: "Thundara",
				Ingredient2: "Zero Gravira",
				Odds: "20",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Warp",
				Type: "M",
				Ingredient1: "Zero Gravity",
				Ingredient2: "Zero Gravira",
				Odds: "20",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Warp",
				Type: "N",
				Ingredient1: "Zero Gravira",
				Ingredient2: "Zero Gravira",
				Odds: "20",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Warp",
				Type: "I",
				Ingredient1: "Thunder",
				Ingredient2: "Zero Gravity",
				Odds: "10",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Warp",
				Type: "P",
				Ingredient1: "Magnet",
				Ingredient2: "Aero",
				Odds: "10",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Warp",
				Type: "M",
				Ingredient1: "Zero Gravity",
				Ingredient2: "Zero Gravity",
				Odds: "10",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Faith",
				Type: "N",
				Ingredient1: "Wind Raid",
				Ingredient2: "Break Time",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Deep Freeze",
				Type: "G",
				Ingredient1: "Freeze Raid",
				Ingredient2: "Blizzaga",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Deep Freeze",
				Type: "H",
				Ingredient1: "Binding Strike",
				Ingredient2: "Blizzaga",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Deep Freeze",
				Type: "F",
				Ingredient1: "Blizzaga",
				Ingredient2: "Triple Blizzaga",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Air Combo Plus",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Glacier",
				Type: "E",
				Ingredient1: "Blizzaga",
				Ingredient2: "Deep Freeze",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Glacier",
				Type: "F",
				Ingredient1: "Triple Blizzaga",
				Ingredient2: "Deep Freeze",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Air Combo Plus",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Ice Barrage",
				Type: "F",
				Ingredient1: "Blizzaga",
				Ingredient2: "Mine Shield",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Air Combo Plus",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Ice Barrage",
				Type: "H",
				Ingredient1: "Blizzaga",
				Ingredient2: "Mine Square",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Firaga Burst",
				Type: "Aqua",
				Ingredient1: "Fira",
				Ingredient2: "Aeroga",
				Odds: "20",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Firaga Burst",
				Type: "Aqua",
				Ingredient1: "Firaga",
				Ingredient2: "Aerora",
				Odds: "20",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Firaga Burst",
				Type: "B",
				Ingredient1: "Firaga",
				Ingredient2: "Aeroga",
				Odds: "20",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Firaga Burst",
				Type: "Aqua",
				Ingredient1: "Firaga",
				Ingredient2: "Slow",
				Odds: "20",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Firaga Burst",
				Type: "D",
				Ingredient1: "Firaga",
				Ingredient2: "Stopra",
				Odds: "20",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Firaga Burst",
				Type: "B",
				Ingredient1: "Firaga",
				Ingredient2: "Stopga",
				Odds: "20",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Raging Storm",
				Type: "B",
				Ingredient1: "Fission Firaga",
				Ingredient2: "Firaga Burst",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Raging Storm",
				Type: "D",
				Ingredient1: "Blitz",
				Ingredient2: "Firaga",
				Odds: "10",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Raging Storm",
				Type: "D",
				Ingredient1: "Fire Dash",
				Ingredient2: "Fira",
				Odds: "10",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Raging Storm",
				Type: "C",
				Ingredient1: "Fire Surge",
				Ingredient2: "Cartwheel",
				Odds: "10",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Raging Storm",
				Type: "Aqua",
				Ingredient1: "Fire",
				Ingredient2: "Fira",
				Odds: "10",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Raging Storm",
				Type: "B",
				Ingredient1: "Fira",
				Ingredient2: "Fira",
				Odds: "10",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Raging Storm",
				Type: "Aqua",
				Ingredient1: "Fira",
				Ingredient2: "Firaga",
				Odds: "10",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Raging Storm",
				Type: "B",
				Ingredient1: "Firaga",
				Ingredient2: "Firaga",
				Odds: "10",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Mega Flare",
				Type: "B",
				Ingredient1: "Fission Firaga",
				Ingredient2: "Crawling Fire",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Quake",
				Type: "B",
				Ingredient1: "Brutal Blast",
				Ingredient2: "Zero Graviga",
				Odds: "90",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Quake",
				Type: "C",
				Ingredient1: "Brutal Blast",
				Ingredient2: "Magnega",
				Odds: "90",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Quake",
				Type: "O",
				Ingredient1: "Stun Edge",
				Ingredient2: "Mine Shield",
				Odds: "30",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Quake",
				Type: "L",
				Ingredient1: "Binding Strike",
				Ingredient2: "Mine Square",
				Odds: "30",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Quake",
				Type: "N",
				Ingredient1: "Brutal Blast",
				Ingredient2: "Brutal Blast",
				Odds: "30",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Meteor",
				Type: "B",
				Ingredient1: "Geo Impact",
				Ingredient2: "Quake",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Meteor",
				Type: "B",
				Ingredient1: "Brutal Blast",
				Ingredient2: "Zero Graviga",
				Odds: "10",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Meteor",
				Type: "C",
				Ingredient1: "Brutal Blast",
				Ingredient2: "Magnega",
				Odds: "10",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Tornado",
				Type: "N",
				Ingredient1: "Magnega",
				Ingredient2: "Aeroga",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Tornado",
				Type: "O",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Aerora",
				Odds: "10",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Tornado",
				Type: "M",
				Ingredient1: "Aero",
				Ingredient2: "Aerora",
				Odds: "10",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Tornado",
				Type: "N",
				Ingredient1: "Aerora",
				Ingredient2: "Aerora",
				Odds: "10",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Tornado",
				Type: "G",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Aero",
				Odds: "5",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Attack Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Luck Boost",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Tornado",
				Type: "I",
				Ingredient1: "Thunder",
				Ingredient2: "Aero",
				Odds: "5",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Tornado",
				Type: "E",
				Ingredient1: "Aero",
				Ingredient2: "Aero",
				Odds: "5",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Transcendence",
				Type: "J",
				Ingredient1: "Magnet Spiral",
				Ingredient2: "Zero Graviga",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Reload Boost",
					pulsing: "Combo F Boost",
					wellspring: "Once More",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Mini",
				Type: "N",
				Ingredient1: "Magnera",
				Ingredient2: "Warp",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Mini",
				Type: "J",
				Ingredient1: "Magnega",
				Ingredient2: "Magnega",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Reload Boost",
					pulsing: "Combo F Boost",
					wellspring: "Once More",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Mini",
				Type: "I",
				Ingredient1: "Magnega",
				Ingredient2: "Bind",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blackout",
				Type: "M",
				Ingredient1: "Zero Gravity",
				Ingredient2: "Confuse",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blackout",
				Type: "N",
				Ingredient1: "Zero Gravira",
				Ingredient2: "Confuse",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Blackout",
				Type: "P",
				Ingredient1: "Zero Gravira",
				Ingredient2: "Poison",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Ignite",
				Type: "Aqua",
				Ingredient1: "Fire",
				Ingredient2: "Bind",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Magic Haste",
					pulsing: "Leaf Bracer",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Ignite",
				Type: "C",
				Ingredient1: "Fira",
				Ingredient2: "Bind",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Stopra",
				Type: "L",
				Ingredient1: "Slow",
				Ingredient2: "Slow",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Stopra",
				Type: "K",
				Ingredient1: "Slow",
				Ingredient2: "Stop",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Stopra",
				Type: "I",
				Ingredient1: "Stop",
				Ingredient2: "Stop",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Stopga",
				Type: "I",
				Ingredient1: "Stop",
				Ingredient2: "Stopra",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Stopga",
				Type: "J",
				Ingredient1: "Stopra",
				Ingredient2: "Stopra",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Reload Boost",
					pulsing: "Combo F Boost",
					wellspring: "Once More",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Ventus", "Aqua"],
				Commands: "Homing Slide",
				Type: "P",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Magnera",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Ventus", "Aqua"],
				Commands: "Homing Slide",
				Type: "C",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Air Slide",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus", "Aqua"],
				Commands: "Homing Slide",
				Type: "L",
				Ingredient1: "Magnet",
				Ingredient2: "Air Slide",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Thunder Roll",
				Type: "P",
				Ingredient1: "Thunder Surge",
				Ingredient2: "Dodge Roll",
				Odds: "80",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Thunder Roll",
				Type: "L",
				Ingredient1: "Thundaga",
				Ingredient2: "Dodge Roll",
				Odds: "80",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Thunder Roll",
				Type: "L",
				Ingredient1: "Stun Block",
				Ingredient2: "Dodge Roll",
				Odds: "80",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Firewheel",
				Type: "B",
				Ingredient1: "Firaga",
				Ingredient2: "Cartwheel",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Firewheel",
				Type: "B",
				Ingredient1: "Fission Firaga",
				Ingredient2: "Cartwheel",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Firewheel",
				Type: "C",
				Ingredient1: "Fire Surge",
				Ingredient2: "Cartwheel",
				Odds: "90",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Ice Slide",
				Type: "F",
				Ingredient1: "Blizzard Edge",
				Ingredient2: "Air Slide",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Air Combo Plus",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Ice Slide",
				Type: "H",
				Ingredient1: "Blizzaga",
				Ingredient2: "Air Slide",
				Odds: "100",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Fire Glide",
				Type: "C",
				Ingredient1: "Fire Surge",
				Ingredient2: "Glide",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Fire Glide",
				Type: "B",
				Ingredient1: "Firaga",
				Ingredient2: "Glide",
				Odds: "100",
				abilities: {
					shimmering: "Fire Boost",
					fleeting: "Reload Boost",
					pulsing: "Finish Boost",
					wellspring: "Once More",
					soothing: "Damage Syphon",
					hungry: "HP Prize Plus",
					abounding: "EXP Chance",
				},
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Renewal Block",
				Type: "P",
				Ingredient1: "Curaga",
				Ingredient2: "Block",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Renewal Block",
				Type: "C",
				Ingredient1: "Esuna",
				Ingredient2: "Block",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Stun Block",
				Type: "L",
				Ingredient1: "Stun Edge",
				Ingredient2: "Block",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Stun Block",
				Type: "I",
				Ingredient1: "Thundaga",
				Ingredient2: "Block",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Boost",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Poison Block",
				Type: "H",
				Ingredient1: "Poison Edge",
				Ingredient2: "Block",
				Odds: "80",
				abilities: {
					shimmering: "Blizzard Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "HP Prize Plus",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Poison Block",
				Type: "P",
				Ingredient1: "Poison",
				Ingredient2: "Block",
				Odds: "80",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Renewal Barrier",
				Type: "P",
				Ingredient1: "Curaga",
				Ingredient2: "Barrier",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Renewal Barrier",
				Type: "N",
				Ingredient1: "Esuna",
				Ingredient2: "Barrier",
				Odds: "100",
				abilities: {
					shimmering: "Cure Boost",
					fleeting: "Reload Boost",
					pulsing: "Second Chance",
					wellspring: "Combo Plus",
					soothing: "Defender",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Confuse Barrier",
				Type: "C",
				Ingredient1: "Confusion Strike",
				Ingredient2: "Barrier",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Confuse Barrier",
				Type: "L",
				Ingredient1: "Confuse",
				Ingredient2: "Barrier",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Stop Barrier",
				Type: "C",
				Ingredient1: "Stopga",
				Ingredient2: "Barrier",
				Odds: "80",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Payback Fang",
				Type: "P",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Counter Hammer",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Ventus"],
				Commands: "Payback Raid",
				Type: "P",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Strike Raid",
				Odds: "100",
				abilities: {
					shimmering: "Dark Screen",
					fleeting: "Magic Haste",
					pulsing: "Combo F Boost",
					wellspring: "Air Combo Plus",
					soothing: "Item Boost",
					hungry: "Treasure Magnet",
					abounding: "EXP Walker",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Payback Surge",
				Type: "C",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Fire Surge",
				Odds: "100",
				abilities: {
					shimmering: "Fire Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "HP Prize Plus",
					abounding: "Link Prize Plus",
				},
			},
			{
				Character: ["Aqua"],
				Commands: "Payback Surge",
				Type: "L",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Thunder Surge",
				Odds: "100",
				abilities: {
					shimmering: "Thunder Screen",
					fleeting: "Attack Haste",
					pulsing: "Finish Boost",
					wellspring: "Combo Plus",
					soothing: "HP Boost",
					hungry: "Treasure Magnet",
					abounding: "Lucky Strike",
				},
			},
			{
				Character: ["Terra"],
				Commands: "Lightning Ray",
				Type: "",
				Ingredient1: "Blitz",
				Ingredient2: "Dark Haze",
				Odds: "10",
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Lightning Ray",
				Type: "",
				Ingredient1: "Blitz",
				Ingredient2: "Air Slide",
				Odds: "10",
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Lightning Ray",
				Type: "",
				Ingredient1: "Fire Dash",
				Ingredient2: "Thunder Surge",
				Odds: "10",
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Lightning Ray",
				Type: "",
				Ingredient1: "Binding Strike",
				Ingredient2: "Thundara",
				Odds: "10",
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Lightning Ray",
				Type: "",
				Ingredient1: "Thunder",
				Ingredient2: "Thundara",
				Odds: "10",
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Lightning Ray",
				Type: "",
				Ingredient1: "Thundara",
				Ingredient2: "Thundara",
				Odds: "10",
			},
			{
				Character: ["Aqua"],
				Commands: "Lightning Ray",
				Type: "",
				Ingredient1: "Aeroga",
				Ingredient2: "Barrier Surge",
				Odds: "10",
			},
			{
				Character: ["Aqua"],
				Commands: "Meteor Shower",
				Type: "",
				Ingredient1: "Strike Raid",
				Ingredient2: "Thundaga",
				Odds: "15",
			},
			{
				Character: ["Aqua"],
				Commands: "Meteor Shower",
				Type: "",
				Ingredient1: "Freeze Raid",
				Ingredient2: "Thundaga",
				Odds: "15",
			},
			{
				Character: ["Aqua"],
				Commands: "Meteor Shower",
				Type: "",
				Ingredient1: "Firaga",
				Ingredient2: "Thundaga",
				Odds: "15",
			},
			{
				Character: ["Aqua"],
				Commands: "Meteor Shower",
				Type: "",
				Ingredient1: "Blitz",
				Ingredient2: "Zero Graviga",
				Odds: "10",
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Bio Barrage",
				Type: "",
				Ingredient1: "Poison Edge",
				Ingredient2: "Block",
				Odds: "20",
			},
			{
				Character: ["Ventus", "Terra"],
				Commands: "Bio Barrage",
				Type: "",
				Ingredient1: "Poison",
				Ingredient2: "Block",
				Odds: "20",
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Bio Barrage",
				Type: "",
				Ingredient1: "Quick Blitz",
				Ingredient2: "Poison",
				Odds: "5",
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Bio Barrage",
				Type: "",
				Ingredient1: "Sliding Dash",
				Ingredient2: "Poison",
				Odds: "5",
			},
			{
				Character: ["Terra", "Ventus", "Aqua"],
				Commands: "Bio Barrage",
				Type: "",
				Ingredient1: "Strike Raid",
				Ingredient2: "Poison",
				Odds: "5",
			},
		];

		const typeIcons = {
			"Magic": "<img src='images/cmd_magic.png' alt='Magic' class='type-icon'>",
			"Physical": "<img src='images/cmd_attack.png' alt='Attack' class='type-icon'>",
			"Shotlock": "<img src='images/cmd_shotlock.png' alt='Shotlock' class='type-icon'>",
			"Movement": "<img src='images/cmd_movement.png' alt='Movement' class='type-icon'>",
			"Defense": "<img src='images/cmd_defense.png' alt='Defense' class='type-icon'>",
			"Reprisal": "<img src='images/cmd_reprisal.png' alt='Reprisal' class='type-icon'>"
		};
		const characterIcons = {
			"Terra": "<img src='images/terra.png' alt='Terra' width='30'>",
			"Ventus": "<img src='images/ventus.png' alt='Ventus' width='30'>",
			"Aqua": "<img src='images/aqua.png' alt='Aqua' width='30'>"
		};

		// Toggle between normal and reverse mode
		function toggleSearchMode() {

			const searchModeToggle = document.querySelector('input[name="mode"]:checked');
			console.log(searchModeToggle);

			// Get containers for both modes
			const meldModeContainer = document.getElementById('meld-mode-container');
			const reverseModeContainer = document.getElementById('reverse-mode-container');
			const meldModeResultContainer = document.getElementById('result');
			const reverseModeResultContainer = document.getElementById('ingredients-result');

			if (searchModeToggle.value == 'reverse') {
				meldModeContainer.style.display = 'none';
				meldModeResultContainer.style.display = 'none';
				reverseModeContainer.style.display = 'block';
				reverseModeResultContainer.style.display = 'flex';
			}
			if (searchModeToggle.value == 'meld') {
				meldModeContainer.style.display = 'block';
				meldModeResultContainer.style.display = 'flex';
				reverseModeContainer.style.display = 'none';
				reverseModeResultContainer.style.display = 'none';
			}


		}
		// Populate the dropdown for reverse search (end results)
		function populateResultsDropdown() {
			const resultContainer = document.querySelector('[data-dropdown="result-cmd"]');
			const resultList = resultContainer.querySelector('.dropdown-list');

			// Clear the dropdown
			resultList.innerHTML = '';

			// Get unique result commands
			const uniqueResults = new Set();
			commandData.forEach((c) => {
				uniqueResults.add(c.Commands);
			});

			// Sort and add commands to the result dropdown
			[...uniqueResults].sort().forEach((cmd) => {
				if (cmd) {
					const item = document.createElement('div');
					item.className = 'dropdown-item';
					item.dataset.value = cmd;

					// Add icon based on command type
					const type = commandTypes[cmd.trim()];
					const iconHTML = typeIcons[type] || '';

					// Create the item with icon and text
					item.innerHTML =
						`<span class="dropdown-item-icon">${iconHTML}</span><span class="dropdown-item-text">${cmd}</span>`;

					item.addEventListener('click', () => {
						selectDropdownItem(resultContainer, cmd);
						findIngredients();
					});
					resultList.appendChild(item);
				}
			});
		}
		// Find ingredients that create the selected result
		function findIngredients() {
			const resultContainer = document.querySelector('[data-dropdown="result-cmd"]');
			const resultCmd = resultContainer.dataset.value || '';

			const typeResult = commandTypes[resultCmd.trim()];
			document.getElementById("result-cmd-icon").innerHTML = typeIcons[typeResult];

			const crystalContainer = document.querySelector('[data-dropdown="reverse-crystal"]');
			const crystal = crystalContainer.dataset.value || '';

			const ingredientsDiv = document.getElementById("ingredients-result");

			if (!resultCmd) {
				ingredientsDiv.innerText = "Please select a command to find its ingredients";
				return;
			}

			// Find all fusions that result in the selected command
			const matches = commandData.filter(entry => entry.Commands === resultCmd);

			if (matches.length > 0) {
				let resultText = "";
				matches.forEach((match) => {
					let abilityText = "";

					// Check for ability with the selected crystal if any
					if (crystal && match.abilities) {
						// Try different case variations
						if (match.abilities[crystal]) {
							abilityText =
								`<div class="ability"><img src='images/item-gray.png' alt='Item' class='type-icon'> ${match.abilities[crystal]}</div>`;
						} else if (match.abilities[crystal.charAt(0).toUpperCase() + crystal.slice(1)]) {
							const properCase = crystal.charAt(0).toUpperCase() + crystal.slice(1);
							abilityText =
								`<div class="ability"><img src='images/item-gray.png' alt='Item' class='type-icon'> ${match.abilities[properCase]}</div>`;
						} else if (match.abilities[crystalContainer.dataset.display]) {
							abilityText =
								`<div class="ability"><img src='images/item-gray.png' alt='Item' class='type-icon'> ${match.abilities[crystalContainer.dataset.display]}</div>`;
						}
					}

					// Get icons for the ingredients
					const type1 = commandTypes[match.Ingredient1.trim()];
					const type2 = commandTypes[match.Ingredient2.trim()];
					const icon1 = typeIcons[type1] || '';
					const icon2 = typeIcons[type2] || '';

					// Get character icons
					const characterIconsHTML = match.Character.map(char => characterIcons[char] || char).join(" ");

					resultText += `
        <div class="command-list-item">
          <div class="command-stats">
            <h6>${match.Odds}%</h6>
            <div class="char-icons">${characterIconsHTML}</div>
          </div>
          <div class="recipe-ingredients">
            <div class="command">${icon1} ${match.Ingredient1}</div>
            <div class="recipe-plus">+</div>
            <div class="command">${icon2} ${match.Ingredient2}</div>
          </div>
          ${abilityText}
        </div>
      `;
				});

				ingredientsDiv.innerHTML = resultText.trim();
			} else {
				ingredientsDiv.innerHTML = "No recipes found for this command";
			}
		}
		// Setup the reverse mode crystal dropdown
		function setupReverseCrystalDropdown() {
			const crystalContainer = document.querySelector('[data-dropdown="reverse-crystal"]');
			const crystalList = crystalContainer.querySelector('.dropdown-list');

			// Clear the dropdown
			crystalList.innerHTML = '';

			// Add crystal options with proper casing
			const crystals = [{
					display: "Shimmering",
					value: "shimmering"
				},
				{
					display: "Fleeting",
					value: "fleeting"
				},
				{
					display: "Pulsing",
					value: "pulsing"
				},
				{
					display: "Wellspring",
					value: "wellspring"
				},
				{
					display: "Soothing",
					value: "soothing"
				},
				{
					display: "Hungry",
					value: "hungry"
				},
				{
					display: "Abounding",
					value: "abounding"
				}
			];

			crystals.forEach(crystal => {
				const item = document.createElement('div');
				item.className = 'dropdown-item';
				item.dataset.value = crystal.value;
				item.dataset.display = crystal.display;

				// Add crystal icon
				item.innerHTML =
					`<span class="dropdown-item-icon"><img src='images/item-gray.png' alt='Item' class='type-icon'></span><span class="dropdown-item-text">${crystal.display}</span>`;

				item.addEventListener('click', () => {
					selectDropdownItem(crystalContainer, crystal.display, crystal.value);
					// If we already have a result selected, update the ingredients
					const resultContainer = document.querySelector('[data-dropdown="result-cmd"]');
					if (resultContainer.dataset.value) {
						findIngredients();
					}
				});
				crystalList.appendChild(item);
			});
		}

		function populateDropdowns() {
			// Get the first dropdown container
			const cmd1Container = document.querySelector('[data-dropdown="cmd1"]');
			const cmd1Input = cmd1Container.querySelector('.dropdown-search');
			const cmd1List = cmd1Container.querySelector('.dropdown-list');

			// Clear and add placeholder item
			cmd1List.innerHTML = '';

			// Get unique commands
			const uniqueCommands = new Set();
			commandData.forEach((c) => {
				uniqueCommands.add(c.Ingredient1);
				uniqueCommands.add(c.Ingredient2);
			});

			// Sort and add commands to the first dropdown
			[...uniqueCommands].sort().forEach((cmd) => {
				if (cmd) {
					const item = document.createElement('div');
					item.className = 'dropdown-item';
					item.dataset.value = cmd;

					// Add icon based on command type
					const type = commandTypes[cmd.trim()];
					const iconHTML = typeIcons[type] || '';

					// Create the item with icon and text
					item.innerHTML =
						`<span class="dropdown-item-icon">${iconHTML}</span><span class="dropdown-item-text">${cmd}</span>`;

					item.addEventListener('click', () => {
						selectDropdownItem(cmd1Container, cmd);
						filterSecondDropdown();
					});
					cmd1List.appendChild(item);
				}
			});
		}


		function filterSecondDropdown() {
			// Get selected value from first dropdown
			const cmd1Container = document.querySelector('[data-dropdown="cmd1"]');
			const cmd1 = cmd1Container.dataset.value || '';

			// Update icon for the first command
			const type1 = commandTypes[cmd1.trim()];
			document.getElementById("cmd1icon").innerHTML = typeIcons[type1];

			// Get second dropdown container
			const cmd2Container = document.querySelector('[data-dropdown="cmd2"]');
			const cmd2Input = cmd2Container.querySelector('.dropdown-search');
			const cmd2List = cmd2Container.querySelector('.dropdown-list');

			// Clear and disable second dropdown if first is not selected
			cmd2List.innerHTML = '';
			cmd2Input.value = '';
			cmd2Container.dataset.value = '';
			cmd2Container.classList.toggle('disabled', !cmd1);

			if (cmd1) {
				// Find valid commands for second dropdown
				const validCommands = new Set();

				commandData.forEach((entry) => {
					if (entry.Ingredient1 === cmd1)
						validCommands.add(entry.Ingredient2);
					if (entry.Ingredient2 === cmd1)
						validCommands.add(entry.Ingredient1);
				});

				// Add valid commands to second dropdown
				[...validCommands].sort().forEach((cmd) => {
					const item = document.createElement('div');
					item.className = 'dropdown-item';
					item.dataset.value = cmd;

					// Add icon based on command type
					const type = commandTypes[cmd.trim()];
					const iconHTML = typeIcons[type] || '';

					// Create the item with icon and text
					item.innerHTML =
						`<span class="dropdown-item-icon">${iconHTML}</span><span class="dropdown-item-text">${cmd}</span>`;

					item.addEventListener('click', () => {
						selectDropdownItem(cmd2Container, cmd);
						updateSecondDropdown();
					});
					cmd2List.appendChild(item);
				});

				// Enable second dropdown if there are valid options
				cmd2Container.classList.toggle('disabled', validCommands.size === 0);
			}
		}

		function updateSecondDropdown() {
			// Get selected value from second dropdown
			const cmd2Container = document.querySelector('[data-dropdown="cmd2"]');
			const cmd2 = cmd2Container.dataset.value || '';

			// Update icon for the second command
			const type2 = commandTypes[cmd2.trim()];
			document.getElementById("cmd2icon").innerHTML = typeIcons[type2];
		}

		function selectDropdownItem(container, value) {
			// Update the dropdown's selected value
			const input = container.querySelector('.dropdown-search');
			input.value = value;
			container.dataset.value = value;

			// Close the dropdown
			container.classList.remove('active');
		}

		function filterDropdownItems(container) {
			const input = container.querySelector('.dropdown-search');
			const searchText = input.value.toLowerCase();
			const items = container.querySelectorAll('.dropdown-item');

			let hasVisibleItems = false;

			items.forEach(item => {
				const text = item.textContent.toLowerCase();
				const match = text.includes(searchText);
				item.classList.toggle('hidden', !match);
				if (match) hasVisibleItems = true;
			});

			return hasVisibleItems;
		}

		function toggleDropdown(container) {
			// Toggle this dropdown
			const isActive = container.classList.contains('active');

			// Close all other dropdowns first
			document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
				dropdown.classList.remove('active');
			});

			// Toggle this dropdown
			container.classList.toggle('active', !isActive);

			// Focus the search input if opening
			if (!isActive) {
				const input = container.querySelector('.dropdown-search');
				input.focus();
			}
		}


		function setupCrystalDropdown() {
			const crystalContainer = document.querySelector('[data-dropdown="crystal"]');
			const crystalInput = crystalContainer.querySelector('.dropdown-search');
			const crystalList = crystalContainer.querySelector('.dropdown-list');

			// Clear the dropdown
			crystalList.innerHTML = '';

			// Add crystal options with proper casing
			const crystals = [{
					display: "Shimmering",
					value: "shimmering"
				},
				{
					display: "Fleeting",
					value: "fleeting"
				},
				{
					display: "Pulsing",
					value: "pulsing"
				},
				{
					display: "Wellspring",
					value: "wellspring"
				},
				{
					display: "Soothing",
					value: "soothing"
				},
				{
					display: "Hungry",
					value: "hungry"
				},
				{
					display: "Abounding",
					value: "abounding"
				}
			];

			crystals.forEach(crystal => {
				const item = document.createElement('div');
				item.className = 'dropdown-item';
				item.dataset.value = crystal.value;
				item.dataset.display = crystal.display;

				// Add crystal icon
				item.innerHTML =
					`<span class="dropdown-item-icon"><img src='images/item-gray.png' alt='Item' class='type-icon'></span><span class="dropdown-item-text">${crystal.display}</span>`;

				item.addEventListener('click', () => {
					selectDropdownItem(crystalContainer, crystal.display, crystal.value);
				});
				crystalList.appendChild(item);
			});
		}

		// Modified select function to handle display vs value
		function selectDropdownItem(container, displayValue, storeValue = null) {
			// Update the dropdown's displayed and stored values
			const input = container.querySelector('.dropdown-search');
			input.value = displayValue;

			// Use the storeValue if provided, otherwise use displayValue
			container.dataset.value = storeValue !== null ? storeValue : displayValue;
			container.dataset.display = displayValue;

			// Close the dropdown
			container.classList.remove('active');
		}

		function fuseCommands() {
			const cmd1Container = document.querySelector('[data-dropdown="cmd1"]');
			const cmd2Container = document.querySelector('[data-dropdown="cmd2"]');
			const crystalContainer = document.querySelector('[data-dropdown="crystal"]');

			const cmd1 = cmd1Container.dataset.value || '';
			const cmd2 = cmd2Container.dataset.value || '';
			const crystal = crystalContainer.dataset.value || '';

			const resultDiv = document.getElementById("result");

			if (!cmd1 || !cmd2) {
				resultDiv.innerText = "Please select two commands";
				return;
			}

			const fusions = commandData.filter(
				(entry) =>
				(entry.Ingredient1 === cmd1 && entry.Ingredient2 === cmd2) ||
				(entry.Ingredient1 === cmd2 && entry.Ingredient2 === cmd1)
			);

			if (fusions.length > 0) {
				let resultText = "";
				fusions.forEach((fusion) => {
					let abilityText = "";
					// Check if crystal exists and abilities exist for that crystal
					if (crystal && fusion.abilities && fusion.abilities[crystal]) {
						abilityText =
							`<div class="ability"><img src='images/item-gray.png' alt='Item' class='type-icon'> ${fusion.abilities[crystal]}</div>`;
					}

					const characterIconsHTML = fusion.Character.map(char => characterIcons[char] || char).join(" ");
					const fusionType = commandTypes[fusion.Commands];
					const fusionTypeIcon = typeIcons[fusionType];
					resultText +=
						`<div class="command-list-item">
          <div class="command-stats"><h6>${fusion.Odds}%</h6><div class="char-icons">${characterIconsHTML}</div></div>
          <div class="command">${fusionTypeIcon} ${fusion.Commands}</div>
          ${abilityText}
        </div>`;
				});
				resultDiv.innerHTML = resultText.trim();
			} else {
				resultDiv.innerHTML = "Invalid Fusion";
			}
		}

		// Close dropdowns when clicking outside
		document.addEventListener('click', (event) => {
			const dropdowns = document.querySelectorAll('.custom-dropdown');
			dropdowns.forEach(dropdown => {
				if (!dropdown.contains(event.target)) {
					dropdown.classList.remove('active');
				}
			});
		});

		function preselectDropdown(dropdownId, value) {
	const dropdown = document.querySelector(`.custom-dropdown[data-dropdown="${dropdownId}"]`);
	if (!dropdown) return;

	const items = dropdown.querySelectorAll(".dropdown-item");

	for (const item of items) {
		if (item.dataset.value.toLowerCase() === value.toLowerCase()) {
			const input = dropdown.querySelector(".dropdown-search");
			const displayValue = item.dataset.value;

			// Update the input field
			input.value = displayValue;

			// Update data attributes
			dropdown.dataset.value = displayValue;
			dropdown.dataset.display = displayValue;

			// Update icon
			const iconWrapper = dropdown.querySelector(".icon-wrapper");
			const selectedIcon = item.querySelector("img");
			if (selectedIcon && iconWrapper) {
				iconWrapper.innerHTML = selectedIcon.outerHTML;
			}

			// Trigger any additional logic if needed (like filtering second dropdown)
			item.dispatchEvent(new Event("click")); // optional: triggers existing logic if click handler is bound

			break;
		}
	}
}


		function getQueryParams() {
			const params = new URLSearchParams(window.location.search);
			return {
				cmd1: params.get("cmd1"),
				cmd2: params.get("cmd2"),
				crystal: params.get("crystal")
			};

		}

		function setInitialModeFromURL() {
			const params = new URLSearchParams(window.location.search);
			const mode = params.get("mode");

			if (mode === "simulator") {
				document.getElementById("meld").click(); // Or whatever triggers the mode switch
			} else if (mode === "finder") {
				document.getElementById("finder-tab").click();
			}
		}


		// Initialize the dropdowns when the DOM is loaded
		document.addEventListener("DOMContentLoaded", () => {
			populateDropdowns();
			populateResultsDropdown();
			setupCrystalDropdown();
			setupReverseCrystalDropdown();

			// Initialize mode toggle
			// const searchModeToggle = document.querySelectorAll('input[name="mode"]');
			// searchModeToggle.addEventListener('change', toggleSearchMode);
			// 	toggleSearchMode(); // Set initial state

			document.querySelectorAll('input[name="mode"]').forEach(radio => {
				radio.addEventListener('click', toggleSearchMode);
			});
			toggleSearchMode();

			setInitialModeFromURL();

			const {
				cmd1,
				cmd2,
				crystal
			} = getQueryParams();
				if (cmd1) preselectDropdown("cmd1", cmd1);
	if (cmd2) preselectDropdown("cmd2", cmd2);
	if (crystal) preselectDropdown("crystal", crystal);


			if (cmd1 && cmd2) fuseCommands();
		});