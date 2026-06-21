const recodedCommandData = [
	// Rising Strike
	{ Commands: "Rising Strike", Ingredient1: "Quick Blitz", Ingredient2: "Cure" },

	// Fire Edge
	{ Commands: "Fire Edge", Ingredient1: "Rising Strike", Ingredient2: "Aerial Sweep" },
	{ Commands: "Fire Edge", Ingredient1: "Heat Dash", Ingredient2: "Sliding Dash" },
	{ Commands: "Fire Edge", Ingredient1: "Fire", Ingredient2: "Quick Blitz" },
	{ Commands: "Fire Edge", Ingredient1: "Fire", Ingredient2: "Blizzard Edge" },
	{ Commands: "Fire Edge", Ingredient1: "Fira", Ingredient2: "Quick Blitz" },
	{ Commands: "Fire Edge", Ingredient1: "Fira", Ingredient2: "Rising Strike" },

	// Blizzard Edge
	{ Commands: "Blizzard Edge", Ingredient1: "Quick Blitz", Ingredient2: "Rising Strike" },
	{ Commands: "Blizzard Edge", Ingredient1: "Rising Strike", Ingredient2: "Sliding Rush" },
	{ Commands: "Blizzard Edge", Ingredient1: "Blizzard Raid", Ingredient2: "Fire Edge" },
	{ Commands: "Blizzard Edge", Ingredient1: "Blizzard", Ingredient2: "Quick Blitz" },
	{ Commands: "Blizzard Edge", Ingredient1: "Blizzard", Ingredient2: "Rising Strike" },
	{ Commands: "Blizzard Edge", Ingredient1: "Blizzard", Ingredient2: "Thunder Edge" },
	{ Commands: "Blizzard Edge", Ingredient1: "Blizzara", Ingredient2: "Quick Blitz" },

	// Thunder Edge
	{ Commands: "Thunder Edge", Ingredient1: "Quick Blitz", Ingredient2: "Aerial Sweep" },
	{ Commands: "Thunder Edge", Ingredient1: "Rising Strike", Ingredient2: "Air Spiral" },
	{ Commands: "Thunder Edge", Ingredient1: "Thunder Raid", Ingredient2: "Blizzard Buster" },
	{ Commands: "Thunder Edge", Ingredient1: "Thunder", Ingredient2: "Quick Blitz" },
	{ Commands: "Thunder Edge", Ingredient1: "Thunder", Ingredient2: "Rising Strike" },
	{ Commands: "Thunder Edge", Ingredient1: "Thunder", Ingredient2: "Aero Edge" },
	{ Commands: "Thunder Edge", Ingredient1: "Thundara", Ingredient2: "Quick Blitz" },

	// Aero Edge
	{ Commands: "Aero Edge", Ingredient1: "Quick Blitz", Ingredient2: "Sliding Rush" },
	{ Commands: "Aero Edge", Ingredient1: "Rising Strike", Ingredient2: "Aerial Slam" },
	{ Commands: "Aero Edge", Ingredient1: "Aero", Ingredient2: "Quick Blitz" },
	{ Commands: "Aero Edge", Ingredient1: "Aero", Ingredient2: "Rising Strike" },
	{ Commands: "Aero Edge", Ingredient1: "Aero", Ingredient2: "Fire Edge" },
	{ Commands: "Aero Edge", Ingredient1: "Aerora", Ingredient2: "Quick Blitz" },

	// Heat Dash
	{ Commands: "Heat Dash", Ingredient1: "Fire Edge", Ingredient2: "Quick Blitz" },
	{ Commands: "Heat Dash", Ingredient1: "Fire", Ingredient2: "Sliding Dash" },
	{ Commands: "Heat Dash", Ingredient1: "Fire", Ingredient2: "Ice Dash" },
	{ Commands: "Heat Dash", Ingredient1: "Fira", Ingredient2: "Sliding Dash" },
	{ Commands: "Heat Dash", Ingredient1: "Fira", Ingredient2: "Fire Edge" },

	// Ice Dash
	{ Commands: "Ice Dash", Ingredient1: "Sliding Dash", Ingredient2: "Round Blitz" },
	{ Commands: "Ice Dash", Ingredient1: "Blizzard Raid", Ingredient2: "Heat Dash" },
	{ Commands: "Ice Dash", Ingredient1: "Blizzard", Ingredient2: "Sliding Dash" },
	{ Commands: "Ice Dash", Ingredient1: "Blizzard", Ingredient2: "Spark Dash" },
	{ Commands: "Ice Dash", Ingredient1: "Blizzara", Ingredient2: "Sliding Dash" },
	{ Commands: "Ice Dash", Ingredient1: "Blizzara", Ingredient2: "Blizzard Edge" },

	// Spark Dash
	{ Commands: "Spark Dash", Ingredient1: "Sliding Dash", Ingredient2: "Rising Strike" },
	{ Commands: "Spark Dash", Ingredient1: "Thunder Raid", Ingredient2: "Heat Dash" },
	{ Commands: "Spark Dash", Ingredient1: "Thunder", Ingredient2: "Sliding Dash" },
	{ Commands: "Spark Dash", Ingredient1: "Thunder", Ingredient2: "Wind Dash" },
	{ Commands: "Spark Dash", Ingredient1: "Thundara", Ingredient2: "Sliding Dash" },
	{ Commands: "Spark Dash", Ingredient1: "Thundara", Ingredient2: "Thunder Edge" },

	// Wind Dash
	{ Commands: "Wind Dash", Ingredient1: "Sliding Dash", Ingredient2: "Aerial Sweep" },
	{ Commands: "Wind Dash", Ingredient1: "Aero", Ingredient2: "Sliding Dash" },
	{ Commands: "Wind Dash", Ingredient1: "Aero", Ingredient2: "Heat Dash" },
	{ Commands: "Wind Dash", Ingredient1: "Aerora", Ingredient2: "Sliding Dash" },
	{ Commands: "Wind Dash", Ingredient1: "Aerora", Ingredient2: "Aero Edge" },

	// Fire Blast
	{ Commands: "Fire Blast", Ingredient1: "Round Blitz", Ingredient2: "Rising Strike" },
	{ Commands: "Fire Blast", Ingredient1: "Fire Edge", Ingredient2: "Rising Strike" },
	{ Commands: "Fire Blast", Ingredient1: "Heat Dash", Ingredient2: "Rising Strike" },
	{ Commands: "Fire Blast", Ingredient1: "Fire", Ingredient2: "Round Blitz" },
	{ Commands: "Fire Blast", Ingredient1: "Fire", Ingredient2: "Blizzard Blast" },
	{ Commands: "Fire Blast", Ingredient1: "Fira", Ingredient2: "Round Blitz" },
	{ Commands: "Fire Blast", Ingredient1: "Fira", Ingredient2: "Blizzard Blast" },

	// Blizzard Blast
	{ Commands: "Blizzard Blast", Ingredient1: "Round Blitz", Ingredient2: "Aerial Sweep" },
	{ Commands: "Blizzard Blast", Ingredient1: "Blizzard", Ingredient2: "Round Blitz" },
	{ Commands: "Blizzard Blast", Ingredient1: "Blizzard", Ingredient2: "Thunder Blast" },
	{ Commands: "Blizzard Blast", Ingredient1: "Blizzara", Ingredient2: "Round Blitz" },
	{ Commands: "Blizzard Blast", Ingredient1: "Blizzara", Ingredient2: "Thunder Blast" },

	// Thunder Blast
	{ Commands: "Thunder Blast", Ingredient1: "Round Blitz", Ingredient2: "Sliding Rush" },
	{ Commands: "Thunder Blast", Ingredient1: "Thunder", Ingredient2: "Round Blitz" },
	{ Commands: "Thunder Blast", Ingredient1: "Thunder", Ingredient2: "Aero Blast" },
	{ Commands: "Thunder Blast", Ingredient1: "Thundara", Ingredient2: "Round Blitz" },
	{ Commands: "Thunder Blast", Ingredient1: "Thundara", Ingredient2: "Aero Blast" },

	// Aero Blast
	{ Commands: "Aero Blast", Ingredient1: "Round Blitz", Ingredient2: "Air Spiral" },
	{ Commands: "Aero Blast", Ingredient1: "Aero", Ingredient2: "Round Blitz" },
	{ Commands: "Aero Blast", Ingredient1: "Aero", Ingredient2: "Fire Blast" },
	{ Commands: "Aero Blast", Ingredient1: "Aerora", Ingredient2: "Round Blitz" },
	{ Commands: "Aero Blast", Ingredient1: "Aerora", Ingredient2: "Fire Blast" },

	// Fire Buster
	{ Commands: "Fire Buster", Ingredient1: "Sliding Rush", Ingredient2: "Air Spiral" },
	{ Commands: "Fire Buster", Ingredient1: "Fire", Ingredient2: "Sliding Rush" },
	{ Commands: "Fire Buster", Ingredient1: "Fire", Ingredient2: "Aero Buster" },
	{ Commands: "Fire Buster", Ingredient1: "Fira", Ingredient2: "Sliding Rush" },
	{ Commands: "Fire Buster", Ingredient1: "Fira", Ingredient2: "Heat Sweep" },

	// Blizzard Buster
	{ Commands: "Blizzard Buster", Ingredient1: "Sliding Rush", Ingredient2: "Aerial Slam" },
	{ Commands: "Blizzard Buster", Ingredient1: "Blizzard", Ingredient2: "Sliding Rush" },
	{ Commands: "Blizzard Buster", Ingredient1: "Blizzard", Ingredient2: "Fire Buster" },
	{ Commands: "Blizzard Buster", Ingredient1: "Blizzara", Ingredient2: "Sliding Rush" },
	{ Commands: "Blizzard Buster", Ingredient1: "Blizzara", Ingredient2: "Ice Sweep" },

	// Thunder Buster
	{ Commands: "Thunder Buster", Ingredient1: "Sliding Rush", Ingredient2: "Strike Raid" },
	{ Commands: "Thunder Buster", Ingredient1: "Thunder", Ingredient2: "Sliding Rush" },
	{ Commands: "Thunder Buster", Ingredient1: "Thunder", Ingredient2: "Blizzard Buster" },
	{ Commands: "Thunder Buster", Ingredient1: "Thundara", Ingredient2: "Sliding Rush" },
	{ Commands: "Thunder Buster", Ingredient1: "Thundara", Ingredient2: "Spark Sweep" },

	// Aero Buster
	{ Commands: "Aero Buster", Ingredient1: "Sliding Rush", Ingredient2: "Land Crash" },
	{ Commands: "Aero Buster", Ingredient1: "Aero", Ingredient2: "Sliding Rush" },
	{ Commands: "Aero Buster", Ingredient1: "Aero", Ingredient2: "Thunder Buster" },
	{ Commands: "Aero Buster", Ingredient1: "Aerora", Ingredient2: "Sliding Rush" },
	{ Commands: "Aero Buster", Ingredient1: "Aerora", Ingredient2: "Wind Sweep" },

	// Fire Slam
	{ Commands: "Fire Slam", Ingredient1: "Aerial Slam", Ingredient2: "Sliding Dash" },
	{ Commands: "Fire Slam", Ingredient1: "Fire", Ingredient2: "Aerial Slam" },
	{ Commands: "Fire Slam", Ingredient1: "Fire", Ingredient2: "Heat Storm" },
	{ Commands: "Fire Slam", Ingredient1: "Fire", Ingredient2: "Aero Slam" },
	{ Commands: "Fire Slam", Ingredient1: "Fira", Ingredient2: "Aerial Slam" },

	// Blizzard Slam
	{ Commands: "Blizzard Slam", Ingredient1: "Aerial Slam", Ingredient2: "Quick Blitz" },
	{ Commands: "Blizzard Slam", Ingredient1: "Blizzard", Ingredient2: "Aerial Slam" },
	{ Commands: "Blizzard Slam", Ingredient1: "Blizzard", Ingredient2: "Ice Storm" },
	{ Commands: "Blizzard Slam", Ingredient1: "Blizzard", Ingredient2: "Fire Slam" },
	{ Commands: "Blizzard Slam", Ingredient1: "Blizzara", Ingredient2: "Aerial Slam" },

	// Thunder Slam
	{ Commands: "Thunder Slam", Ingredient1: "Aerial Slam", Ingredient2: "Strike Raid" },
	{ Commands: "Thunder Slam", Ingredient1: "Thunder", Ingredient2: "Aerial Slam" },
	{ Commands: "Thunder Slam", Ingredient1: "Thunder", Ingredient2: "Spark Storm" },
	{ Commands: "Thunder Slam", Ingredient1: "Thunder", Ingredient2: "Blizzard Slam" },
	{ Commands: "Thunder Slam", Ingredient1: "Thundara", Ingredient2: "Aerial Slam" },

	// Aero Slam
	{ Commands: "Aero Slam", Ingredient1: "Aerial Slam", Ingredient2: "Land Crash" },
	{ Commands: "Aero Slam", Ingredient1: "Aero", Ingredient2: "Aerial Slam" },
	{ Commands: "Aero Slam", Ingredient1: "Aero", Ingredient2: "Wind Storm" },
	{ Commands: "Aero Slam", Ingredient1: "Aero", Ingredient2: "Thunder Slam" },
	{ Commands: "Aero Slam", Ingredient1: "Aerora", Ingredient2: "Aerial Slam" },

	// Heat Dive
	{ Commands: "Heat Dive", Ingredient1: "Land Crash", Ingredient2: "Sliding Dash" },
	{ Commands: "Heat Dive", Ingredient1: "Thunder Buster", Ingredient2: "Land Crash" },
	{ Commands: "Heat Dive", Ingredient1: "Fire", Ingredient2: "Ice Dive" },
	{ Commands: "Heat Dive", Ingredient1: "Fira", Ingredient2: "Land Crash" },
	{ Commands: "Heat Dive", Ingredient1: "Fira", Ingredient2: "Fire Slam" },

	// Ice Dive
	{ Commands: "Ice Dive", Ingredient1: "Land Crash", Ingredient2: "Quick Blitz" },
	{ Commands: "Ice Dive", Ingredient1: "Blizzard", Ingredient2: "Land Crash" },
	{ Commands: "Ice Dive", Ingredient1: "Blizzard", Ingredient2: "Heat Dive" },
	{ Commands: "Ice Dive", Ingredient1: "Blizzara", Ingredient2: "Land Crash" },
	{ Commands: "Ice Dive", Ingredient1: "Blizzara", Ingredient2: "Blizzard Slam" },

	// Spark Dive
	{ Commands: "Spark Dive", Ingredient1: "Land Crash", Ingredient2: "Round Blitz" },
	{ Commands: "Spark Dive", Ingredient1: "Thunder", Ingredient2: "Land Crash" },
	{ Commands: "Spark Dive", Ingredient1: "Thunder", Ingredient2: "Wind Dive" },
	{ Commands: "Spark Dive", Ingredient1: "Thundara", Ingredient2: "Land Crash" },
	{ Commands: "Spark Dive", Ingredient1: "Thundara", Ingredient2: "Thunder Slam" },

	// Wind Dive
	{ Commands: "Wind Dive", Ingredient1: "Land Crash", Ingredient2: "Aerial Sweep" },
	{ Commands: "Wind Dive", Ingredient1: "Aero", Ingredient2: "Land Crash" },
	{ Commands: "Wind Dive", Ingredient1: "Aero", Ingredient2: "Fire Buster" },
	{ Commands: "Wind Dive", Ingredient1: "Aerora", Ingredient2: "Land Crash" },
	{ Commands: "Wind Dive", Ingredient1: "Aerora", Ingredient2: "Aero Slam" },

	// Fire Raid
	{ Commands: "Fire Raid", Ingredient1: "Strike Raid", Ingredient2: "Sliding Dash" },
	{ Commands: "Fire Raid", Ingredient1: "Rising Strike", Ingredient2: "Aero Raid" },
	{ Commands: "Fire Raid", Ingredient1: "Aerial Slam", Ingredient2: "Heat Dash" },
	{ Commands: "Fire Raid", Ingredient1: "Fire", Ingredient2: "Strike Raid" },
	{ Commands: "Fire Raid", Ingredient1: "Fira", Ingredient2: "Strike Raid" },

	// Blizzard Raid
	{ Commands: "Blizzard Raid", Ingredient1: "Strike Raid", Ingredient2: "Quick Blitz" },
	{ Commands: "Blizzard Raid", Ingredient1: "Rising Strike", Ingredient2: "Fire Raid" },
	{ Commands: "Blizzard Raid", Ingredient1: "Aerial Slam", Ingredient2: "Ice Dash" },
	{ Commands: "Blizzard Raid", Ingredient1: "Blizzard", Ingredient2: "Strike Raid" },
	{ Commands: "Blizzard Raid", Ingredient1: "Blizzara", Ingredient2: "Strike Raid" },

	// Thunder Raid
	{ Commands: "Thunder Raid", Ingredient1: "Strike Raid", Ingredient2: "Round Blitz" },
	{ Commands: "Thunder Raid", Ingredient1: "Rising Strike", Ingredient2: "Blizzard Raid" },
	{ Commands: "Thunder Raid", Ingredient1: "Aerial Slam", Ingredient2: "Spark Dash" },
	{ Commands: "Thunder Raid", Ingredient1: "Thunder", Ingredient2: "Strike Raid" },
	{ Commands: "Thunder Raid", Ingredient1: "Thundara", Ingredient2: "Strike Raid" },

	// Aero Raid
	{ Commands: "Aero Raid", Ingredient1: "Strike Raid", Ingredient2: "Land Crash" },
	{ Commands: "Aero Raid", Ingredient1: "Aerial Slam", Ingredient2: "Wind Dash" },
	{ Commands: "Aero Raid", Ingredient1: "Wind Dash", Ingredient2: "Thunder Raid" },
	{ Commands: "Aero Raid", Ingredient1: "Aero", Ingredient2: "Strike Raid" },
	{ Commands: "Aero Raid", Ingredient1: "Aerora", Ingredient2: "Strike Raid" },

	// Heat Sweep
	{ Commands: "Heat Sweep", Ingredient1: "Aerial Sweep", Ingredient2: "Sliding Rush" },
	{ Commands: "Heat Sweep", Ingredient1: "Fire", Ingredient2: "Aerial Sweep" },
	{ Commands: "Heat Sweep", Ingredient1: "Fire", Ingredient2: "Fire Blast" },
	{ Commands: "Heat Sweep", Ingredient1: "Fire", Ingredient2: "Wind Sweep" },
	{ Commands: "Heat Sweep", Ingredient1: "Fira", Ingredient2: "Aerial Sweep" },

	// Ice Sweep
	{ Commands: "Ice Sweep", Ingredient1: "Aerial Sweep", Ingredient2: "Air Spiral" },
	{ Commands: "Ice Sweep", Ingredient1: "Blizzard", Ingredient2: "Aerial Sweep" },
	{ Commands: "Ice Sweep", Ingredient1: "Blizzard", Ingredient2: "Blizzard Blast" },
	{ Commands: "Ice Sweep", Ingredient1: "Blizzard", Ingredient2: "Heat Sweep" },
	{ Commands: "Ice Sweep", Ingredient1: "Blizzara", Ingredient2: "Aerial Sweep" },

	// Spark Sweep
	{ Commands: "Spark Sweep", Ingredient1: "Aerial Sweep", Ingredient2: "Aerial Slam" },
	{ Commands: "Spark Sweep", Ingredient1: "Thunder", Ingredient2: "Aerial Sweep" },
	{ Commands: "Spark Sweep", Ingredient1: "Thunder", Ingredient2: "Thunder Blast" },
	{ Commands: "Spark Sweep", Ingredient1: "Thunder", Ingredient2: "Ice Sweep" },
	{ Commands: "Spark Sweep", Ingredient1: "Thundara", Ingredient2: "Aerial Sweep" },

	// Wind Sweep
	{ Commands: "Wind Sweep", Ingredient1: "Aerial Sweep", Ingredient2: "Strike Raid" },
	{ Commands: "Wind Sweep", Ingredient1: "Aero", Ingredient2: "Aerial Sweep" },
	{ Commands: "Wind Sweep", Ingredient1: "Aero", Ingredient2: "Aero Blast" },
	{ Commands: "Wind Sweep", Ingredient1: "Aero", Ingredient2: "Spark Sweep" },
	{ Commands: "Wind Sweep", Ingredient1: "Aerora", Ingredient2: "Aerial Sweep" },

	// Heat Storm
	{ Commands: "Heat Storm", Ingredient1: "Aerial Sweep", Ingredient2: "Heat Sweep" },
	{ Commands: "Heat Storm", Ingredient1: "Air Spiral", Ingredient2: "Sliding Dash" },
	{ Commands: "Heat Storm", Ingredient1: "Fire", Ingredient2: "Air Spiral" },
	{ Commands: "Heat Storm", Ingredient1: "Fire", Ingredient2: "Fire Buster" },
	{ Commands: "Heat Storm", Ingredient1: "Fire", Ingredient2: "Wind Storm" },
	{ Commands: "Heat Storm", Ingredient1: "Fira", Ingredient2: "Air Spiral" },

	// Ice Storm
	{ Commands: "Ice Storm", Ingredient1: "Aerial Sweep", Ingredient2: "Ice Sweep" },
	{ Commands: "Ice Storm", Ingredient1: "Air Spiral", Ingredient2: "Aerial Slam" },
	{ Commands: "Ice Storm", Ingredient1: "Blizzard", Ingredient2: "Air Spiral" },
	{ Commands: "Ice Storm", Ingredient1: "Blizzard", Ingredient2: "Blizzard Buster" },
	{ Commands: "Ice Storm", Ingredient1: "Blizzard", Ingredient2: "Heat Storm" },
	{ Commands: "Ice Storm", Ingredient1: "Blizzara", Ingredient2: "Air Spiral" },

	// Spark Storm
	{ Commands: "Spark Storm", Ingredient1: "Aerial Sweep", Ingredient2: "Spark Sweep" },
	{ Commands: "Spark Storm", Ingredient1: "Air Spiral", Ingredient2: "Strike Raid" },
	{ Commands: "Spark Storm", Ingredient1: "Thunder", Ingredient2: "Air Spiral" },
	{ Commands: "Spark Storm", Ingredient1: "Thunder", Ingredient2: "Thunder Buster" },
	{ Commands: "Spark Storm", Ingredient1: "Thunder", Ingredient2: "Ice Storm" },
	{ Commands: "Spark Storm", Ingredient1: "Thundara", Ingredient2: "Air Spiral" },

	// Wind Storm
	{ Commands: "Wind Storm", Ingredient1: "Aerial Sweep", Ingredient2: "Wind Sweep" },
	{ Commands: "Wind Storm", Ingredient1: "Air Spiral", Ingredient2: "Land Crash" },
	{ Commands: "Wind Storm", Ingredient1: "Aero", Ingredient2: "Air Spiral" },
	{ Commands: "Wind Storm", Ingredient1: "Aero", Ingredient2: "Aero Buster" },
	{ Commands: "Wind Storm", Ingredient1: "Aero", Ingredient2: "Spark Storm" },
	{ Commands: "Wind Storm", Ingredient1: "Aerora", Ingredient2: "Air Spiral" },

	// Chain Rave
	{ Commands: "Chain Rave", Ingredient1: "Fire Raid", Ingredient2: "Spark Dive" },
	{ Commands: "Chain Rave", Ingredient1: "Thunder Raid", Ingredient2: "Spark Dive" },
	{ Commands: "Chain Rave", Ingredient1: "Aero Raid", Ingredient2: "Spark Dive" },
	{ Commands: "Chain Rave", Ingredient1: "Aeroga", Ingredient2: "Curaga" },

	// Rising Rush
	{ Commands: "Rising Rush", Ingredient1: "Air Spiral", Ingredient2: "Wind Dive" },
	{ Commands: "Rising Rush", Ingredient1: "Ice Storm", Ingredient2: "Wind Dive" },
	{ Commands: "Rising Rush", Ingredient1: "Spark Storm", Ingredient2: "Wind Dive" },
	{ Commands: "Rising Rush", Ingredient1: "Magnega", Ingredient2: "Curaga" },
	{ Commands: "Rising Rush", Ingredient1: "Stop", Ingredient2: "Air Spiral" },
	{ Commands: "Rising Rush", Ingredient1: "Stop", Ingredient2: "Aero" },

	// Muscle Strike
	{ Commands: "Muscle Strike", Ingredient1: "Rising Strike", Ingredient2: "Land Crash" },
	{ Commands: "Muscle Strike", Ingredient1: "Thunder Slam", Ingredient2: "Land Crash" },
	{ Commands: "Muscle Strike", Ingredient1: "Aero Slam", Ingredient2: "Land Crash" },
	{ Commands: "Muscle Strike", Ingredient1: "Thundaga", Ingredient2: "Curaga" },

	// Stun Impact
	{ Commands: "Stun Impact", Ingredient1: "Heat Dive", Ingredient2: "Land Crash" },
	{ Commands: "Stun Impact", Ingredient1: "Spark Dive", Ingredient2: "Land Crash" },
	{ Commands: "Stun Impact", Ingredient1: "Wind Dive", Ingredient2: "Land Crash" },
	{ Commands: "Stun Impact", Ingredient1: "Blizzaga", Ingredient2: "Curaga" },

	// Eruption
	{ Commands: "Eruption", Ingredient1: "Magnet Grab", Ingredient2: "Rising Rush" },

	// Zantetsuken
	{ Commands: "Zantetsuken", Ingredient1: "Judgment Triad", Ingredient2: "Gravity Drop" },

	// Judgment Triad
	{ Commands: "Judgment Triad", Ingredient1: "Wind Tracer", Ingredient2: "Muscle Strike" },

	// Shock Fall
	{ Commands: "Shock Fall", Ingredient1: "Triple Firaga", Ingredient2: "Stun Impact" },

	// Gravity Drop
	{ Commands: "Gravity Drop", Ingredient1: "Wind Tracer", Ingredient2: "Chain Rave" },

	// === MAGIC ===

	// Fira
	{ Commands: "Fira", Ingredient1: "Fire Edge", Ingredient2: "Round Blitz" },
	{ Commands: "Fira", Ingredient1: "Fire", Ingredient2: "Fire Edge" },
	{ Commands: "Fira", Ingredient1: "Fire", Ingredient2: "Cure" },
	{ Commands: "Fira", Ingredient1: "Fire", Ingredient2: "Slow" },
	{ Commands: "Fira", Ingredient1: "Cure", Ingredient2: "Fire Edge" },
	{ Commands: "Fira", Ingredient1: "Slow", Ingredient2: "Fire Edge" },
	{ Commands: "Fira", Ingredient1: "Stop", Ingredient2: "Fire Edge" },

	// Firaga
	{ Commands: "Firaga", Ingredient1: "Fire Blast", Ingredient2: "Fire Raid" },
	{ Commands: "Firaga", Ingredient1: "Fira", Ingredient2: "Heat Storm" },
	{ Commands: "Firaga", Ingredient1: "Confuse", Ingredient2: "Heat Storm" },
	{ Commands: "Firaga", Ingredient1: "Esuna", Ingredient2: "Heat Storm" },

	// Triple Firaga
	{ Commands: "Triple Firaga", Ingredient1: "Heat Dive", Ingredient2: "Firaga" },
	{ Commands: "Triple Firaga", Ingredient1: "Muscle Strike", Ingredient2: "Rising Rush" },
	{ Commands: "Triple Firaga", Ingredient1: "Firaga", Ingredient2: "Firaga Burst" },
	{ Commands: "Triple Firaga", Ingredient1: "Triple Pursuit", Ingredient2: "Firaga" },

	// Firaga Burst
	{ Commands: "Firaga Burst", Ingredient1: "Stun Impact", Ingredient2: "Rising Rush" },
	{ Commands: "Firaga Burst", Ingredient1: "Fira", Ingredient2: "Triple Burst" },
	{ Commands: "Firaga Burst", Ingredient1: "Firaga", Ingredient2: "Fire Slam" },
	{ Commands: "Firaga Burst", Ingredient1: "Firaga", Ingredient2: "Triple Burst" },

	// Triple Burst
	{ Commands: "Triple Burst", Ingredient1: "Chain Rave", Ingredient2: "Rising Rush" },
	{ Commands: "Triple Burst", Ingredient1: "Fira", Ingredient2: "Fire Raid" },
	{ Commands: "Triple Burst", Ingredient1: "Fira", Ingredient2: "Triple Firaga" },
	{ Commands: "Triple Burst", Ingredient1: "Firaga", Ingredient2: "Triple Firaga" },

	// Flame Fall
	{ Commands: "Flame Fall", Ingredient1: "Blizzaga Pursuit", Ingredient2: "Thundaga" },

	// Blizzara
	{ Commands: "Blizzara", Ingredient1: "Ice Dash", Ingredient2: "Quick Blitz" },
	{ Commands: "Blizzara", Ingredient1: "Blizzard", Ingredient2: "Blizzard Edge" },
	{ Commands: "Blizzara", Ingredient1: "Blizzard", Ingredient2: "Fire" },
	{ Commands: "Blizzara", Ingredient1: "Blizzard", Ingredient2: "Thunder" },
	{ Commands: "Blizzara", Ingredient1: "Blizzard", Ingredient2: "Cure" },
	{ Commands: "Blizzara", Ingredient1: "Blizzard", Ingredient2: "Slow" },
	{ Commands: "Blizzara", Ingredient1: "Cure", Ingredient2: "Blizzard Edge" },
	{ Commands: "Blizzara", Ingredient1: "Slow", Ingredient2: "Blizzard Edge" },
	{ Commands: "Blizzara", Ingredient1: "Stop", Ingredient2: "Blizzard Edge" },

	// Blizzaga
	{ Commands: "Blizzaga", Ingredient1: "Ice Dash", Ingredient2: "Thunder Blast" },
	{ Commands: "Blizzaga", Ingredient1: "Aero Buster", Ingredient2: "Ice Storm" },
	{ Commands: "Blizzaga", Ingredient1: "Ice Dive", Ingredient2: "Blizzara" },
	{ Commands: "Blizzaga", Ingredient1: "Confuse", Ingredient2: "Ice Storm" },
	{ Commands: "Blizzaga", Ingredient1: "Esuna", Ingredient2: "Ice Storm" },

	// Triple Blizzaga
	{ Commands: "Triple Blizzaga", Ingredient1: "Chain Rave", Ingredient2: "Stun Impact" },
	{ Commands: "Triple Blizzaga", Ingredient1: "Blizzaga", Ingredient2: "Blizzaga Pursuit" },
	{ Commands: "Triple Blizzaga", Ingredient1: "Pulse Tracer", Ingredient2: "Blizzaga" },
	{ Commands: "Triple Blizzaga", Ingredient1: "Tornado Tracer", Ingredient2: "Blizzaga" },

	// Blizzaga Pursuit
	{ Commands: "Blizzaga Pursuit", Ingredient1: "Blizzard Raid", Ingredient2: "Blizzaga" },
	{ Commands: "Blizzaga Pursuit", Ingredient1: "Muscle Strike", Ingredient2: "Stun Impact" },
	{ Commands: "Blizzaga Pursuit", Ingredient1: "Blizzaga", Ingredient2: "Triple Blizzaga" },
	{ Commands: "Blizzaga Pursuit", Ingredient1: "Triple Pursuit", Ingredient2: "Blizzaga" },

	// Triple Pursuit
	{ Commands: "Triple Pursuit", Ingredient1: "Chain Rave", Ingredient2: "Muscle Strike" },
	{ Commands: "Triple Pursuit", Ingredient1: "Blizzara", Ingredient2: "Muscle Strike" },
	{ Commands: "Triple Pursuit", Ingredient1: "Blizzaga", Ingredient2: "Chain Rave" },
	{ Commands: "Triple Pursuit", Ingredient1: "Blizzaga Pursuit", Ingredient2: "Triple Blizzaga" },

	// Icicle Mine
	{ Commands: "Icicle Mine", Ingredient1: "Blizzaga Pursuit", Ingredient2: "Magnet Grab" },

	// Thundara
	{ Commands: "Thundara", Ingredient1: "Thunder Edge", Ingredient2: "Fire" },
	{ Commands: "Thundara", Ingredient1: "Spark Dash", Ingredient2: "Round Blitz" },
	{ Commands: "Thundara", Ingredient1: "Thunder", Ingredient2: "Thunder Edge" },
	{ Commands: "Thundara", Ingredient1: "Thunder", Ingredient2: "Fire" },
	{ Commands: "Thundara", Ingredient1: "Thunder", Ingredient2: "Cure" },
	{ Commands: "Thundara", Ingredient1: "Thunder", Ingredient2: "Slow" },
	{ Commands: "Thundara", Ingredient1: "Cure", Ingredient2: "Thunder Edge" },
	{ Commands: "Thundara", Ingredient1: "Slow", Ingredient2: "Thunder Edge" },
	{ Commands: "Thundara", Ingredient1: "Stop", Ingredient2: "Thunder Edge" },

	// Thundaga
	{ Commands: "Thundaga", Ingredient1: "Thunder Edge", Ingredient2: "Aero Raid" },
	{ Commands: "Thundaga", Ingredient1: "Thunder Edge", Ingredient2: "Wind Sweep" },
	{ Commands: "Thundaga", Ingredient1: "Thundara", Ingredient2: "Spark Storm" },
	{ Commands: "Thundaga", Ingredient1: "Confuse", Ingredient2: "Spark Storm" },
	{ Commands: "Thundaga", Ingredient1: "Esuna", Ingredient2: "Spark Storm" },

	// Thunder Tracer
	{ Commands: "Thunder Tracer", Ingredient1: "Thundara", Ingredient2: "Pulse Tracer" },
	{ Commands: "Thunder Tracer", Ingredient1: "Thundaga", Ingredient2: "Thunder Blast" },
	{ Commands: "Thunder Tracer", Ingredient1: "Thundaga", Ingredient2: "Firaga" },
	{ Commands: "Thunder Tracer", Ingredient1: "Thundaga", Ingredient2: "Pulse Tracer" },

	// Pulse Tracer
	{ Commands: "Pulse Tracer", Ingredient1: "Spark Sweep", Ingredient2: "Thundaga" },
	{ Commands: "Pulse Tracer", Ingredient1: "Thundara", Ingredient2: "Thundaga" },
	{ Commands: "Pulse Tracer", Ingredient1: "Thundaga", Ingredient2: "Aeroga" },
	{ Commands: "Pulse Tracer", Ingredient1: "Thundaga", Ingredient2: "Thunder Tracer" },

	// Exo Spark
	{ Commands: "Exo Spark", Ingredient1: "Triple Blizzaga", Ingredient2: "Thundaga" },

	// Aerora
	{ Commands: "Aerora", Ingredient1: "Aero", Ingredient2: "Aero Edge" },
	{ Commands: "Aerora", Ingredient1: "Cure", Ingredient2: "Aero Edge" },
	{ Commands: "Aerora", Ingredient1: "Slow", Ingredient2: "Aero Edge" },
	{ Commands: "Aerora", Ingredient1: "Stop", Ingredient2: "Aero Edge" },

	// Aeroga
	{ Commands: "Aeroga", Ingredient1: "Wind Sweep", Ingredient2: "Cure" },
	{ Commands: "Aeroga", Ingredient1: "Wind Sweep", Ingredient2: "Slow" },
	{ Commands: "Aeroga", Ingredient1: "Aerora", Ingredient2: "Wind Storm" },
	{ Commands: "Aeroga", Ingredient1: "Confuse", Ingredient2: "Wind Storm" },
	{ Commands: "Aeroga", Ingredient1: "Esuna", Ingredient2: "Wind Storm" },

	// Tornado Tracer
	{ Commands: "Tornado Tracer", Ingredient1: "Firaga", Ingredient2: "Curaga" },
	{ Commands: "Tornado Tracer", Ingredient1: "Aerora", Ingredient2: "Wind Dash" },
	{ Commands: "Tornado Tracer", Ingredient1: "Aerora", Ingredient2: "Wind Tracer" },
	{ Commands: "Tornado Tracer", Ingredient1: "Aeroga", Ingredient2: "Wind Tracer" },
	{ Commands: "Tornado Tracer", Ingredient1: "Magnega", Ingredient2: "Firaga" },

	// Wind Tracer
	{ Commands: "Wind Tracer", Ingredient1: "Aeroga", Ingredient2: "Firaga" },
	{ Commands: "Wind Tracer", Ingredient1: "Tornado Tracer", Ingredient2: "Aeroga" },
	{ Commands: "Wind Tracer", Ingredient1: "Esuna", Ingredient2: "Aerora" },
	{ Commands: "Wind Tracer", Ingredient1: "Esuna", Ingredient2: "Aeroga" },

	// Cyclone
	{ Commands: "Cyclone", Ingredient1: "Wind Tracer", Ingredient2: "Pulse Tracer" },

	// Cure
	{ Commands: "Cure", Ingredient1: "Round Blitz", Ingredient2: "Slow" },

	// Cura
	{ Commands: "Cura", Ingredient1: "Blizzard Raid", Ingredient2: "Cure" },
	{ Commands: "Cura", Ingredient1: "Magnera", Ingredient2: "Cure" },
	{ Commands: "Cura", Ingredient1: "Slow", Ingredient2: "Cure" },
	{ Commands: "Cura", Ingredient1: "Stop", Ingredient2: "Cure" },

	// Curaga
	{ Commands: "Curaga", Ingredient1: "Heat Dive", Ingredient2: "Cura" },
	{ Commands: "Curaga", Ingredient1: "Confuse", Ingredient2: "Cura" },
	{ Commands: "Curaga", Ingredient1: "Esuna", Ingredient2: "Cura" },

	// Magnera
	{ Commands: "Magnera", Ingredient1: "Blizzard Slam", Ingredient2: "Magnet" },
	{ Commands: "Magnera", Ingredient1: "Cure", Ingredient2: "Magnet" },
	{ Commands: "Magnera", Ingredient1: "Slow", Ingredient2: "Magnet" },
	{ Commands: "Magnera", Ingredient1: "Stop", Ingredient2: "Magnet" },

	// Magnega
	{ Commands: "Magnega", Ingredient1: "Curaga", Ingredient2: "Magnera" },
	{ Commands: "Magnega", Ingredient1: "Confuse", Ingredient2: "Magnera" },
	{ Commands: "Magnega", Ingredient1: "Esuna", Ingredient2: "Magnera" },

	// Magnet Grab
	{ Commands: "Magnet Grab", Ingredient1: "Magnera", Ingredient2: "Magnega" },
	{ Commands: "Magnet Grab", Ingredient1: "Magnega", Ingredient2: "Blizzaga" },
	{ Commands: "Magnet Grab", Ingredient1: "Stop", Ingredient2: "Magnega" },
	{ Commands: "Magnet Grab", Ingredient1: "Wind Tracer", Ingredient2: "Magnega" },

	// Slow
	{ Commands: "Slow", Ingredient1: "Sliding Dash", Ingredient2: "Cure" },
	{ Commands: "Slow", Ingredient1: "Rising Strike", Ingredient2: "Cure" },

	// Quake
	{ Commands: "Quake", Ingredient1: "Zantetsuken", Ingredient2: "Cyclone" },
];

const recodedCommandTypes = {
	// Physical
	"Rising Strike": "Physical", "Quick Blitz": "Physical",
	"Fire Edge": "Physical", "Blizzard Edge": "Physical", "Thunder Edge": "Physical", "Aero Edge": "Physical",
	"Sliding Dash": "Physical", "Heat Dash": "Physical", "Ice Dash": "Physical", "Spark Dash": "Physical", "Wind Dash": "Physical",
	"Round Blitz": "Physical", "Fire Blast": "Physical", "Blizzard Blast": "Physical", "Thunder Blast": "Physical", "Aero Blast": "Physical",
	"Sliding Rush": "Physical", "Fire Buster": "Physical", "Blizzard Buster": "Physical", "Thunder Buster": "Physical", "Aero Buster": "Physical",
	"Aerial Slam": "Physical", "Fire Slam": "Physical", "Blizzard Slam": "Physical", "Thunder Slam": "Physical", "Aero Slam": "Physical",
	"Land Crash": "Physical", "Heat Dive": "Physical", "Ice Dive": "Physical", "Spark Dive": "Physical", "Wind Dive": "Physical",
	"Strike Raid": "Physical", "Fire Raid": "Physical", "Blizzard Raid": "Physical", "Thunder Raid": "Physical", "Aero Raid": "Physical",
	"Aerial Sweep": "Physical", "Heat Sweep": "Physical", "Ice Sweep": "Physical", "Spark Sweep": "Physical", "Wind Sweep": "Physical",
	"Air Spiral": "Physical", "Heat Storm": "Physical", "Ice Storm": "Physical", "Spark Storm": "Physical", "Wind Storm": "Physical",
	"Chain Rave": "Physical", "Rising Rush": "Physical", "Muscle Strike": "Physical", "Stun Impact": "Physical",
	"Eruption": "Physical", "Zantetsuken": "Physical", "Judgment Triad": "Physical", "Shock Fall": "Physical", "Gravity Drop": "Physical",
	// Magic
	"Fire": "Magic", "Fira": "Magic", "Firaga": "Magic", "Triple Firaga": "Magic", "Firaga Burst": "Magic", "Triple Burst": "Magic", "Flame Fall": "Magic",
	"Blizzard": "Magic", "Blizzara": "Magic", "Blizzaga": "Magic", "Triple Blizzaga": "Magic", "Blizzaga Pursuit": "Magic", "Triple Pursuit": "Magic", "Icicle Mine": "Magic",
	"Thunder": "Magic", "Thundara": "Magic", "Thundaga": "Magic", "Thunder Tracer": "Magic", "Pulse Tracer": "Magic", "Exo Spark": "Magic",
	"Aero": "Magic", "Aerora": "Magic", "Aeroga": "Magic", "Tornado Tracer": "Magic", "Wind Tracer": "Magic", "Cyclone": "Magic",
	"Cure": "Magic", "Cura": "Magic", "Curaga": "Magic", "Esuna": "Magic",
	"Magnet": "Magic", "Magnera": "Magic", "Magnega": "Magic", "Magnet Grab": "Magic",
	"Slow": "Magic", "Stop": "Magic", "Confuse": "Magic", "Quake": "Magic",
};

const recodedCommandDescriptions = {
	// Physical
	"Rising Strike": "Smack foes high into the air.",
	"Quick Blitz": "Bash foes with a powerful jumping attack.",
	"Fire Edge": "Wrap your Keyblade in flame, then bash foes with a powerful jumping attack.",
	"Blizzard Edge": "Wrap your Keyblade in ice, then bash foes with a powerful jumping attack.",
	"Thunder Edge": "Wrap your Keyblade in lightning, then bash foes with a powerful jumping attack.",
	"Aero Edge": "Wrap your Keyblade in wind, then bash foes with a powerful jumping attack.",
	"Sliding Dash": "Hit faraway enemies with a sliding attack.",
	"Heat Dash": "Wrap yourself in flame, then hit faraway enemies with a sliding attack.",
	"Ice Dash": "Wrap yourself in ice, then hit faraway enemies with a sliding attack.",
	"Spark Dash": "Wrap yourself in lightning, then hit faraway enemies with a sliding attack.",
	"Wind Dash": "Wrap yourself in wind, then hit faraway enemies with a sliding attack.",
	"Round Blitz": "Punish surrounding foes with a spinning attack.",
	"Fire Blast": "Wrap yourself in flame, then punish surrounding foes with a spinning attack.",
	"Blizzard Blast": "Wrap yourself in ice, then punish surrounding foes with a spinning attack.",
	"Thunder Blast": "Wrap yourself in lightning, then punish surrounding foes with a spinning attack.",
	"Aero Blast": "Wrap yourself in wind, then punish surrounding foes with a spinning attack.",
	"Sliding Rush": "Lay into enemies with a powerful charging attack.",
	"Fire Buster": "Wrap your Keyblade in flame, then lay into enemies with a powerful charging attack.",
	"Blizzard Buster": "Wrap your Keyblade in ice, then lay into enemies with a powerful charging attack.",
	"Thunder Buster": "Wrap your Keyblade in lightning, then lay into enemies with a powerful charging attack.",
	"Aero Buster": "Wrap your Keyblade in wind, then lay into enemies with a powerful charging attack.",
	"Aerial Slam": "Smack foes over the head.",
	"Fire Slam": "Wrap your Keyblade in flame, then smack foes over the head.",
	"Blizzard Slam": "Wrap your Keyblade in ice, then smack foes over the head.",
	"Thunder Slam": "Wrap your Keyblade in lightning, then smack foes over the head.",
	"Aero Slam": "Wrap your Keyblade in wind, then smack foes over the head.",
	"Land Crash": "Dive at enemies with the Keyblade.",
	"Heat Dive": "Wrap yourself in flame, then dive at enemies with the Keyblade.",
	"Ice Dive": "Wrap yourself in ice, then dive at enemies with the Keyblade.",
	"Spark Dive": "Wrap yourself in lightning, then dive at enemies with the Keyblade.",
	"Wind Dive": "Wrap yourself in wind, then dive at enemies with the Keyblade.",
	"Strike Raid": "Hurl your Keyblade toward enemies.",
	"Fire Raid": "Wrap your Keyblade in flame, then hurl it toward enemies.",
	"Blizzard Raid": "Wrap your Keyblade in ice, then hurl it toward enemies.",
	"Thunder Raid": "Wrap your Keyblade in lightning, then hurl it toward enemies.",
	"Aero Raid": "Wrap your Keyblade in wind, then hurl it toward enemies.",
	"Aerial Sweep": "Crack down on surrounding foes with a jumping spin attack.",
	"Heat Sweep": "Wrap yourself in flame, then crack down on surrounding foes with a jumping spin attack.",
	"Ice Sweep": "Wrap yourself in ice, then crack down on surrounding foes with a jumping spin attack.",
	"Spark Sweep": "Wrap yourself in lightning, then crack down on surrounding foes with a jumping spin attack.",
	"Wind Sweep": "Wrap yourself in wind, then crack down on surrounding foes with a jumping spin attack.",
	"Air Spiral": "Deal multiple hits with a somersault attack.",
	"Heat Storm": "Wrap yourself in flame, then deal multiple hits with a somersault attack.",
	"Ice Storm": "Wrap yourself in ice, then deal multiple hits with a somersault attack.",
	"Spark Storm": "Wrap yourself in lightning, then deal multiple hits with a somersault attack.",
	"Wind Storm": "Wrap yourself in wind, then deal multiple hits with a somersault attack.",
	"Chain Rave": "Hold your Keyblade by the chain and swing it around as you charge. Enemy attacks will bounce right off.",
	"Rising Rush": "Charge through enemies and deal multiple hits, then finish by knocking them into the air.",
	"Muscle Strike": "Knock enemies into next week with a single, powerful attack.",
	"Stun Impact": "Send out a shock wave that knocks out some surrounding enemies.",
	"Eruption": "Drive your Keyblade into the ground and trigger a blast of light that rockets foes upward.",
	"Zantetsuken": "Potentially deal a devastating amount of damage with a single, impossibly fast strike.",
	"Judgment Triad": "Leap backwards, then produce three Keyblades that chase your foes down.",
	"Shock Fall": "Leap straight up, then slam your Keyblade into the ground and hit nearby foes with the shock wave.",
	"Gravity Drop": "Produce a sphere of gravity that pulls enemies in, then explodes as you slam them all into the ground.",
	// Magic
	"Fire": "Launch a ball of fire toward enemies.",
	"Fira": "Launch a larger ball of fire toward enemies.",
	"Firaga": "Launch a powerful ball of fire toward enemies.",
	"Triple Firaga": "Launch three consecutive balls of fire toward enemies.",
	"Firaga Burst": "Launch a swift ball of fire toward enemies. The impact will send them reeling.",
	"Triple Burst": "Launch a series of swift fireballs toward enemies. The impact will send them reeling.",
	"Flame Fall": "Launch a ball of fire into the air and send it crashing down on an enemy's position.",
	"Blizzard": "Launch a chunk of ice right at enemies. It can pass through multiple targets.",
	"Blizzara": "Launch a larger chunk of ice right at enemies. It can pass through multiple targets.",
	"Blizzaga": "Launch a powerful chunk of ice right at enemies. It can pass through multiple targets.",
	"Triple Blizzaga": "Launch three consecutive chunks of ice right at enemies. They can pass through multiple targets.",
	"Blizzaga Pursuit": "Launch a chunk of ice that changes direction, hunting down and passing through multiple targets.",
	"Triple Pursuit": "Launch a series of ice chunks that change direction, hunting down and passing through multiple targets.",
	"Icicle Mine": "Place an ice crystal in the middle of the air. It will explode if an enemy approaches.",
	"Thunder": "Hit the surrounding area with multiple lightning bolts.",
	"Thundara": "Hit the surrounding area with multiple stronger lightning bolts.",
	"Thundaga": "Hit the surrounding area with multiple powerful lightning bolts.",
	"Thunder Tracer": "Unleash a wave of lightning bolts that swiftly home in on enemies and deal continual damage.",
	"Pulse Tracer": "Unleash a wave of lightning bolts that slowly home in on enemies and deal continual damage.",
	"Exo Spark": "Discharge a torrent of electricity that deals continual damage to surrounding foes.",
	"Aero": "Shoot a gust of wind at enemies that lifts them into the air.",
	"Aerora": "Shoot a stronger gust of wind at enemies that lifts them into the air.",
	"Aeroga": "Shoot a powerful gust of wind at enemies that lifts them into the air.",
	"Tornado Tracer": "Shoot a gust of wind that homes in on enemies and keeps them airborne.",
	"Wind Tracer": "Shoot a gust of wind that homes in on enemies and deals continual damage.",
	"Cyclone": "Call upon the wind to pull surrounding enemies in, then fling them high into the air.",
	"Cure": "Recover a small amount of HP.",
	"Cura": "Recover a large amount of HP.",
	"Curaga": "Recover a huge amount of HP.",
	"Esuna": "Cure all negative status effects and restore a very small amount of HP.",
	"Magnet": "Use magnetic force to pull surrounding enemies toward you and deal a small amount of damage.",
	"Magnera": "Use stronger magnetic force to pull surrounding enemies toward you and deal a small amount of damage.",
	"Magnega": "Use powerful magnetic force to pull surrounding enemies toward you and deal a small amount of damage.",
	"Magnet Grab": "Launch a ball of magnetism toward foes. The enemy it hits will be pulled toward you.",
	"Slow": "Slow down the movement of surrounding enemies and deal a small amount of damage.",
	"Stop": "Stop surrounding enemies from moving and deal a small amount of damage.",
	"Confuse": "Cause surrounding enemies to attack each other, and deal a small amount of damage.",
	"Quake": "Generate an earthquake that stuns and deals major damage to foes near the ground.",
};

const recodedCommandMemory = {
	// Physical
	"Rising Strike": 8, "Quick Blitz": 11,
	"Fire Edge": 13, "Blizzard Edge": 13, "Thunder Edge": 13, "Aero Edge": 13,
	"Sliding Dash": 10, "Heat Dash": 11, "Ice Dash": 12, "Spark Dash": 11, "Wind Dash": 11,
	"Round Blitz": 10, "Fire Blast": 12, "Blizzard Blast": 12, "Thunder Blast": 12, "Aero Blast": 11,
	"Sliding Rush": 10, "Fire Buster": 12, "Blizzard Buster": 12, "Thunder Buster": 12, "Aero Buster": 12,
	"Aerial Slam": 9, "Fire Slam": 12, "Blizzard Slam": 12, "Thunder Slam": 12, "Aero Slam": 12,
	"Land Crash": 10, "Heat Dive": 12, "Ice Dive": 12, "Spark Dive": 12, "Wind Dive": 12,
	"Strike Raid": 15, "Fire Raid": 17, "Blizzard Raid": 18, "Thunder Raid": 18, "Aero Raid": 16,
	"Aerial Sweep": 11, "Heat Sweep": 14, "Ice Sweep": 14, "Spark Sweep": 14, "Wind Sweep": 13,
	"Air Spiral": 13, "Heat Storm": 16, "Ice Storm": 16, "Spark Storm": 16, "Wind Storm": 15,
	"Chain Rave": 13, "Rising Rush": 15, "Muscle Strike": 19, "Stun Impact": 16,
	"Eruption": 18, "Zantetsuken": 22, "Judgment Triad": 24, "Shock Fall": 15, "Gravity Drop": 23,
	// Magic
	"Fire": 14, "Fira": 15, "Firaga": 16, "Triple Firaga": 16, "Firaga Burst": 16, "Triple Burst": 16, "Flame Fall": 24,
	"Blizzard": 19, "Blizzara": 21, "Blizzaga": 22, "Triple Blizzaga": 22, "Blizzaga Pursuit": 20, "Triple Pursuit": 22, "Icicle Mine": 20,
	"Thunder": 12, "Thundara": 15, "Thundaga": 16, "Thunder Tracer": 18, "Pulse Tracer": 18, "Exo Spark": 20,
	"Aero": 15, "Aerora": 16, "Aeroga": 17, "Tornado Tracer": 18, "Wind Tracer": 18, "Cyclone": 17,
	"Cure": 9, "Cura": 10, "Curaga": 11, "Esuna": 10,
	"Magnet": 17, "Magnera": 17, "Magnega": 21, "Magnet Grab": 18,
	"Slow": 14, "Stop": 14, "Confuse": 14, "Quake": 15,
};

const recodedTypeIcons = {
	"Magic": "<img src='/images/cmd_magic.png' alt='Magic' class='type-icon'>",
	"Physical": "<img src='/images/cmd_attack.png' alt='Attack' class='type-icon'>",
};

function toggleRecodedMode() {
	const selected = document.querySelector('input[name="recoded-mode"]:checked');
	const synthesizeContainer = document.getElementById('recoded-meld-mode-container');
	const findContainer = document.getElementById('recoded-reverse-mode-container');
	const resultDiv = document.getElementById('recoded-result');
	const ingredientsDiv = document.getElementById('recoded-ingredients-result');

	const resultsWrapper = document.getElementById('command-list-wrapper');
	if (selected.value === 'reverse') {
		synthesizeContainer.style.display = 'none';
		resultDiv.style.display = 'none';
		findContainer.style.display = 'block';
		ingredientsDiv.style.display = 'flex';
		if (resultsWrapper) resultsWrapper.style.visibility = ingredientsDiv.innerHTML.trim() ? 'visible' : 'hidden';
	} else {
		synthesizeContainer.style.display = 'block';
		resultDiv.style.display = 'flex';
		findContainer.style.display = 'none';
		ingredientsDiv.style.display = 'none';
		if (resultsWrapper) resultsWrapper.style.visibility = 'visible';
	}
}

function populateRecodedDropdowns() {
	const cmd1Container = document.querySelector('[data-dropdown="recoded-cmd1"]');
	const cmd1List = cmd1Container.querySelector('.dropdown-list');
	cmd1List.innerHTML = '';

	const uniqueCommands = new Set();
	recodedCommandData.forEach((c) => {
		uniqueCommands.add(c.Ingredient1);
		uniqueCommands.add(c.Ingredient2);
	});

	[...uniqueCommands].sort().forEach((cmd) => {
		if (cmd) {
			const item = document.createElement('div');
			item.className = 'dropdown-item';
			item.dataset.value = cmd;
			const iconHTML = recodedTypeIcons[recodedCommandTypes[cmd.trim()]] || '';
			item.innerHTML = `<span class="dropdown-item-icon">${iconHTML}</span><span class="dropdown-item-text">${cmd}</span>`;
			item.addEventListener('click', () => {
				recodedSelectDropdownItem(cmd1Container, cmd);
				filterRecodedSecondDropdown();
			});
			cmd1List.appendChild(item);
		}
	});
}

function filterRecodedSecondDropdown() {
	const cmd1Container = document.querySelector('[data-dropdown="recoded-cmd1"]');
	const cmd1 = cmd1Container.dataset.value || '';

	const type1 = recodedCommandTypes[cmd1.trim()];
	document.getElementById('recoded-cmd1icon').innerHTML = recodedTypeIcons[type1] || '';

	const cmd2Container = document.querySelector('[data-dropdown="recoded-cmd2"]');
	const cmd2Input = cmd2Container.querySelector('.dropdown-search');
	const cmd2List = cmd2Container.querySelector('.dropdown-list');

	cmd2List.innerHTML = '';
	cmd2Input.value = '';
	cmd2Container.dataset.value = '';
	cmd2Container.classList.toggle('disabled', !cmd1);

	if (cmd1) {
		const validCommands = new Set();
		recodedCommandData.forEach((entry) => {
			if (entry.Ingredient1 === cmd1) validCommands.add(entry.Ingredient2);
			if (entry.Ingredient2 === cmd1) validCommands.add(entry.Ingredient1);
		});

		[...validCommands].sort().forEach((cmd) => {
			const item = document.createElement('div');
			item.className = 'dropdown-item';
			item.dataset.value = cmd;
			const iconHTML = recodedTypeIcons[recodedCommandTypes[cmd.trim()]] || '';
			item.innerHTML = `<span class="dropdown-item-icon">${iconHTML}</span><span class="dropdown-item-text">${cmd}</span>`;
			item.addEventListener('click', () => {
				recodedSelectDropdownItem(cmd2Container, cmd);
				const type2 = recodedCommandTypes[cmd.trim()];
				document.getElementById('recoded-cmd2icon').innerHTML = recodedTypeIcons[type2] || '';
				synthesizeCommands();
			});
			cmd2List.appendChild(item);
		});

		cmd2Container.classList.toggle('disabled', validCommands.size === 0);
	}
}

function synthesizeCommands() {
	const cmd1 = document.querySelector('[data-dropdown="recoded-cmd1"]').dataset.value || '';
	const cmd2 = document.querySelector('[data-dropdown="recoded-cmd2"]').dataset.value || '';
	const resultDiv = document.getElementById('recoded-result');

	if (!cmd1 || !cmd2) {
		resultDiv.innerHTML = '';
		return;
	}

	const matches = recodedCommandData.filter(
		(e) => (e.Ingredient1 === cmd1 && e.Ingredient2 === cmd2) ||
			(e.Ingredient1 === cmd2 && e.Ingredient2 === cmd1)
	);

	if (matches.length > 0) {
		resultDiv.innerHTML = matches.map((m) => {
			const icon = recodedTypeIcons[recodedCommandTypes[m.Commands]] || '';
			const desc = recodedCommandDescriptions[m.Commands] || '';
			const mem = recodedCommandMemory[m.Commands];
			const meta = (desc || mem) ? `<div class="command-description">${desc}${mem ? ` <span class="command-memory">${mem}% memory</span>` : ''}</div>` : '';
			return `<div class="command-list-item"><div class="command">${icon} ${m.Commands}</div>${meta}</div>`;
		}).join('');
	} else {
		resultDiv.innerHTML = '<div class="command-list-item">These commands cannot be synthesized together.</div>';
	}
}

function populateRecodedResultsDropdown() {
	const container = document.querySelector('[data-dropdown="recoded-result-cmd"]');
	const list = container.querySelector('.dropdown-list');
	list.innerHTML = '';

	const uniqueResults = new Set();
	recodedCommandData.forEach((c) => uniqueResults.add(c.Commands));

	[...uniqueResults].sort().forEach((cmd) => {
		if (cmd) {
			const item = document.createElement('div');
			item.className = 'dropdown-item';
			item.dataset.value = cmd;
			const iconHTML = recodedTypeIcons[recodedCommandTypes[cmd.trim()]] || '';
			item.innerHTML = `<span class="dropdown-item-icon">${iconHTML}</span><span class="dropdown-item-text">${cmd}</span>`;
			item.addEventListener('click', () => {
				recodedSelectDropdownItem(container, cmd);
				findRecodedIngredients();
			});
			list.appendChild(item);
		}
	});
}

function findRecodedIngredients() {
	const container = document.querySelector('[data-dropdown="recoded-result-cmd"]');
	const resultCmd = container.dataset.value || '';
	const ingredientsDiv = document.getElementById('recoded-ingredients-result');

	const typeResult = recodedCommandTypes[resultCmd.trim()];
	document.getElementById('recoded-result-cmd-icon').innerHTML = recodedTypeIcons[typeResult] || '';

	if (!resultCmd) {
		ingredientsDiv.innerHTML = 'Please select a command to find its recipes.';
		const descDiv = document.getElementById('recoded-cmd-description');
		if (descDiv) descDiv.textContent = '';
		return;
	}

	const matches = recodedCommandData.filter((e) => e.Commands === resultCmd);

	const descDiv = document.getElementById('recoded-cmd-description');
	if (descDiv) {
		const desc = recodedCommandDescriptions[resultCmd] || '';
		const mem = recodedCommandMemory[resultCmd];
		descDiv.innerHTML = desc + (mem ? ` <span class="command-memory">${mem}% memory</span>` : '');
	}

	const resultsWrapper = document.getElementById('command-list-wrapper');
	if (resultsWrapper) resultsWrapper.style.visibility = 'visible';

	if (matches.length > 0) {
		ingredientsDiv.innerHTML = matches.map((m) => {
			const icon1 = recodedTypeIcons[recodedCommandTypes[m.Ingredient1.trim()]] || '';
			const icon2 = recodedTypeIcons[recodedCommandTypes[m.Ingredient2.trim()]] || '';
			return `
				<div class="command-list-item">
					<div class="recipe-ingredients">
						<div class="command">${icon1} ${m.Ingredient1}</div>
						<div class="recipe-plus">+</div>
						<div class="command">${icon2} ${m.Ingredient2}</div>
					</div>
				</div>`;
		}).join('');
	} else {
		ingredientsDiv.innerHTML = 'No recipes found for this command.';
	}
}

function recodedSelectDropdownItem(container, value) {
	const input = container.querySelector('.dropdown-search');
	input.value = value;
	container.dataset.value = value;
	container.classList.remove('active');
}

function recodedFilterDropdownItems(container) {
	const searchText = container.querySelector('.dropdown-search').value.toLowerCase();
	let hasVisible = false;
	container.querySelectorAll('.dropdown-item').forEach((item) => {
		const match = item.textContent.toLowerCase().includes(searchText);
		item.classList.toggle('hidden', !match);
		if (match) hasVisible = true;
	});
	return hasVisible;
}

function recodedToggleDropdown(container) {
	const isActive = container.classList.contains('active');
	document.querySelectorAll('.custom-dropdown').forEach((d) => d.classList.remove('active'));
	container.classList.toggle('active', !isActive);
	if (!isActive) container.querySelector('.dropdown-search').focus();
}

function recodedPreselectDropdown(dropdownId, value) {
	const dropdown = document.querySelector(`.custom-dropdown[data-dropdown="${dropdownId}"]`);
	if (!dropdown) return;
	for (const item of dropdown.querySelectorAll('.dropdown-item')) {
		if (item.dataset.value.toLowerCase() === value.toLowerCase()) {
			item.dispatchEvent(new Event('click'));
			break;
		}
	}
}

function setRecodedInitialModeFromURL() {
	const params = new URLSearchParams(window.location.search);
	const mode = params.get('mode');
	if (mode === 'simulator') {
		document.getElementById('recoded-meld').click();
	} else if (mode === 'finder') {
		document.getElementById('recoded-finder-tab').click();
	}
	const cmd1 = params.get('cmd1');
	const cmd2 = params.get('cmd2');
	if (cmd1) recodedPreselectDropdown('recoded-cmd1', cmd1);
	if (cmd2) recodedPreselectDropdown('recoded-cmd2', cmd2);
}

document.addEventListener('click', (e) => {
	document.querySelectorAll('.custom-dropdown').forEach((d) => {
		if (!d.contains(e.target)) d.classList.remove('active');
	});
});

document.addEventListener('DOMContentLoaded', () => {
	populateRecodedDropdowns();
	populateRecodedResultsDropdown();

	document.querySelectorAll('input[name="recoded-mode"]').forEach((radio) => {
		radio.addEventListener('click', toggleRecodedMode);
	});
	toggleRecodedMode();
	setRecodedInitialModeFromURL();
});
