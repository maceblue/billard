function manage_black_ball_dropped() {
console.log(ballsArray.length);
	if (ballsArray.length <= 1) {
		// Regular Game Over
		var text = 'Gewinner!';
	} else {
		// Failure Game Over
		var text = 'verloren!';
	}

	var layer = document.createElement('div');
	layer.id = 'end_game_layer';
	var table_inner = document.getElementById('table_inner');
	table_inner.appendChild(layer);
	
	var text_span = document.createElement('span');
	text_span.innerHTML = text;
	layer.appendChild(text_span);

	var br = document.createElement('br');
	layer.appendChild(br);

	var button = document.createElement('button');
	button.type = 'button';
	button.onclick = function() {
		var table = document.getElementById('table');
		table.parentNode.removeChild(table);
		ballsArray = [];
		billardballs = [];
		init();
	};
	button.innerText = 'neues Spiel';
	layer.appendChild(button);
}