function manage_black_ball_droped() {
	if (ballsArray.length <= 1) {
		// Regular Game Over
		var text = 'Win!';
	} else {
		// Failure Game Over
		var text = 'Lost!';
	}

	var layer = document.createElement('div');
	layer.id = 'end_game_layer';
	var table_inner = document.getElementById('table_inner');
	table_inner.appendChild(layer);
	var text_span = document.createElement('span');
	text_span.innerHTML = text;
	layer.appendChild(text_span);
}