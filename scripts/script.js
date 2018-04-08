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
			$("#" + channel + ' .channel-info').css( "background-color", "#2ecc71" );

			// Add more info about online channels
			$('#' + channel + ' .views').append("<span>" + data.stream.channel.views + "</span");
			$('#' + channel + ' .users').append("<span>" + data.stream.channel.followers + "</span");


		} else {
			// If channel isn't streaming, add class 'offline' to current channel
			$('#' + channel).addClass( "offline" );

			// Change channel info div to red indicating that this channel is streaming now
			$("#" + channel + ' .channel-info').css( "background-color", "#e74c3c" );

		}

	});

})

// When online button is clicked
$( "#online" ).click(function() {

	unselectSiblings( $(this) );

	checkClass( $(this) );

	showOnlineChannels();
});

// When offline button is clicked
$( "#offline" ).click(function() {

	unselectSiblings( $(this) );

	checkClass( $(this) );

	showOfflineChannels();

});

// When all button is clicked
$( "#all").click(function() {

	unselectSiblings( $(this) );

	checkClass( $(this) );

	showAllChannels();

});

// If the siblings of 'siblingClicked' are selected, then we unselect them
function unselectSiblings(siblingClicked) {

	if ( $( siblingClicked ).siblings().hasClass("selected")) {
		$( siblingClicked ).siblings().removeClass("selected");
	}
}

// Check that the same class isn't added again
function checkClass( channelState ) {
	if ( !$( channelState ).hasClass("selected") ) {
		$( channelState ).addClass("selected");
	}
}

// Shows all channels 
function showAllChannels() {

	// Show online channels
	$( ".online" ).show();

	// Show offline channels
	$( ".offline" ).show();
}


// Shows online channels
function showOnlineChannels() {
	
	// Show online channels
	$( ".online" ).show();

	// Show offline channels
	$( ".offline" ).hide();
}

// Shows offline channels
function showOfflineChannels() {

	// Show offline channels
	$( ".offline ").show();

	// Hide online channels
	$(" .online ").hide();
}

