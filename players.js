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

}