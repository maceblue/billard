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
	var player_layer = document.createElement('p');
	player_layer.id = 'player_layer';
	player_layer.innerText = 'Spieler' + parseInt(x+1) + ' is am Zug.'
	document.body.appendChild(player_layer);
	player1.full = null;
	player2.full = null;
}

function manage_players_when_ball_dropped(ball) {
	if (player1.full == null) { // no ball dropped yet - apply color
		if (current_player == 1) {
			player1.full = ball.full;
			player2.full = !(ball.full);
		} else {
			player2.full = ball.full;
			player1.full = !(ball.full);
		}
	} else { // players have their colors
		if (current_player == 1) {
			if (!ball.full) {
				current_player = 2;
				document.getElementById('player_layer').innerText = 'Spieler2 ist am Zug.';
			}
		} else {
			if (ball.full) {
				current_player = 1;
				document.getElementById('player_layer').innerText = 'Spieler1 ist am Zug.';
			}
		}
	}

if (player1.full) {
	console.log('Spieler1 hat die Vollen');
	console.log('Spieler2 hat die Halben');
} else {
	console.log('Spieler1 hat die Halben');
	console.log('Spieler2 hat die Vollen');
}
console.log('Spieler'+current_player+' am Zug');

}