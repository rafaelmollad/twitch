var channels = ["ESL_SC2", "freecodecamp", "OgamingSC2", "cretetion", "noobs2ninjas", "RobotCaleb", "storbeck", "habathcx"];

channels.forEach(function(channel, index) {
	$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + channel +'?callback=?', function(data) {

		console.log(data);

		console.log(index);
		// If channel is streaming(not null)
		if (data.stream != null) {
			// Add class 'online' to current channel
			$( '#' + channel ).addClass( "online" );

			// Change channel info div to green indicating that this channel is streaming now
			$("#" + channel + ' .channel-info').css( "background-color", "lightgreen" );

			// Add more info about online channels
			$('#' + channel + ' .views').append("<span>" + data.stream.channel.views + "</span");
			$('#' + channel + ' .users').append("<span>" + data.stream.channel.followers + "</span");


		} else {
			// If channel isn't streaming, add class 'offline' to current channel
			$('#' + channel).addClass( "offline" );

			// Change channel info div to red indicating that this channel is streaming now
			$("#" + channel + ' .channel-info').css( "background-color", "indianred" );

		}

	});

})

// When online button is clicked
$( "#online" ).click(function() {
	
	// Remove background from previous section
	$("#all").removeClass("selected");

	// Add background to online
	$(this).addClass("selected");

	// Remove elements with class .offline
	$( ".offline" ).remove();

});

// When offline button is clicked
	// Remove elements with class .offline

// When all button is clicked
	// Show all elements