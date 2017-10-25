function random_player_start() {
	x = Math.round(Math.random())
	if (x==0) {
		current_player = 1;
		player1.mygame = true;
		player2.mygame = false;
	} else {
		current_player = 2;
		player2.mygame = true;
		player1.mygame = false;
	}
	var player_layer = document.createElement('div');
	player_layer.id = 'player_layer';
	player_layer.innerHTML = 'Spieler' + parseInt(x+1) + ' is am Zug.'
	document.body.appendChild(player_layer);
	player1.full = null;
	player2.full = null;
}

function manage_players() {
	var dropped_full = false;
	var dropped_half = false;
	var infotext_color = '';
	if (balls_dropped_this_turn.length > 0 && !white_ball_dropped) {
		for (var i=0; i<balls_dropped_this_turn.length; i++) {
			var ball = balls_dropped_this_turn[i];
			if (ball.full) {
				dropped_full = true;
			} else {
				dropped_half = true;
			}
			if (player1.full == null 	// no ball dropped yet - apply color
				&& ball.color!='white' 	// exclude white ball
				&& ball.color!='black' 	// exclude black ball
			) { 
		 		if (current_player == 1) {
		 			player1.full = ball.full;
		 			player2.full = !(ball.full);
		 		} else {
		 			player2.full = ball.full;
		 			player1.full = !(ball.full);
		 		}
		 	} 
		}
		// switch to player2 when...
		if (current_player == 1) {
			if (dropped_full && player1.full == false
				||
				player1.full && dropped_half
			) {
				current_player = 2;
			}
		// switch to player1 when...
		} else if (current_player == 2) {
 			if (dropped_full && player2.full == false
 				||
 				dropped_half && player2.full
 			) {
 				current_player = 1;
 			}
 		} 
	} else { // no ball dropped - next player
		if (current_player == 1) {
			current_player = 2;
		} else {
			current_player = 1;
		}
	}
if (player1.full) {
	infotext_color = 'Spieler1 hat die Vollen<br>Spieler2 hat die Halben<br>'
} else if (player2.full) {
	infotext_color = 'Spieler1 hat die Halben<br>Spieler2 hat die Vollen<br>'
}
	document.getElementById('player_layer').innerHTML = infotext_color + 'Spieler'+current_player+' ist am Zug';
}