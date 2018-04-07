var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

for (var i = 0; i < channels.length; i++) {
	$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + channels[i] +'?callback=?', function(data) {
	 	
		// If channel is transmiting(not null)
		if (data.stream != null) {
			
		}
			// Add class 'online' to channel element
			// Add the correct information to each text next to the icons

		// If channel isn't transmitting
			// Add class 'offline' to channel element 
			// We delete its views and followers icons

	});
}

// When online button is clicked
	// Remove elements with class .online

// When offline button is clicked
	// Remove elements with class .offline

// When all button is clicked
	// Show all elements