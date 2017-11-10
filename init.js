function init() {
	// Create Table
	var table = document.createElement('div');
	table.id = 'table';
	document.body.appendChild(table);

	var table_inner = document.createElement('div');
	table_inner.id = 'table_inner';
	table.appendChild(table_inner);

	meter = document.createElement('div');
	meter.id = 'meter';
	table.appendChild(meter);
	meter_span = document.createElement('span');
	meter.appendChild(meter_span);

	cue = document.createElement('img');
	cue.id = 'cue';
	cue.src = 'cue.png'
	document.body.appendChild(cue);

	// add mouse function to push white ball
	table_inner.addEventListener("mousedown", function(e) {
		meter.style.display = 'block';
		mousepower = 0;
		meter_step = 100/speedLimit;
	    mousedowntimer=setInterval(function() {
	    	if (mousepower<=speedLimit) {
	    		meter_span.style.width = mousepower * meter_step + '%';
	    		mousepower++;
	    	}
// console.log('mousepower: ' + mousepower);
	        var mouseX = parseInt(e.clientX)-43-ballsize/2; // substract padding
	        var mouseY = parseInt(e.clientY)-39-ballsize/2;
	        var dx = mouseX - white_ball_elem.left;
	        var dy = mouseY - white_ball_elem.top;
	        var radianAngle = Math.atan2(dy, dx);
	        var xspeed = Math.cos(radianAngle) * mousepower;
	        var yspeed = Math.sin(radianAngle) * mousepower;
	        cue.style.left = parseInt(cue.style.left) - xspeed + 'px';
	        cue.style.top = parseInt(cue.style.top) - yspeed + 'px';
    
	    }, 100);
	});
	table_inner.addEventListener("mouseup", function(e){
		meter.style.display = 'none';
		meter_span.style.width = '0px';
	    if (mousedowntimer) clearInterval(mousedowntimer)
	    var mouseX = parseInt(e.clientX)-43-ballsize/2; // substract padding
        var mouseY = parseInt(e.clientY)-39-ballsize/2;
        var dx = mouseX - white_ball_elem.left;
        var dy = mouseY - white_ball_elem.top;
        var radianAngle = Math.atan2(dy, dx);
        var xspeed = Math.cos(radianAngle) * mousepower;
        var yspeed = Math.sin(radianAngle) * mousepower;
		push_white_ball(xspeed, yspeed);
		if (connected) {
            var json = JSON.stringify({ type: 'message', xspeed: xspeed, yspeed: yspeed });
            server_connection.send(json);
        }
	});
	
	//window.onmousemove = handleMouseMove;

	//INIT BALLS & PHYSICS
    initBalls();

    // Bind Cue to white ball
    table_inner.addEventListener("mousemove", function(e) {
    	var mouseX = parseInt(e.clientX)-43-ballsize/2; // substract padding
        var mouseY = parseInt(e.clientY)-39-ballsize/2;
        var dx = mouseX - white_ball_elem.left;
        var dy = mouseY - white_ball_elem.top;

		var radianAngle = Math.atan2(dy, dx) * 180 / Math.PI;
		radianAngle += 180;

		cue.style.top = white_ball_elem.top+49 + 'px';
		cue.style.left = white_ball_elem.left+74 + 'px';
  		cue.style.transform = 'rotate('+radianAngle+'deg)';
	});

	// SERVER-CONNECTION via websocket
	window.WebSocket = window.WebSocket || window.MozWebSocket;
	server_connection = new WebSocket('ws://'+server_host+':'+server_port);
	server_connection.onopen = function () {
		// connection is opened and ready to use
		connected = true;
	};
	server_connection.onerror = function (error) {
		// an error occurred when sending/receiving data
		connected = false;
	};
	server_connection.onmessage = function (message) {
		// try to decode json (I assume that each message
		// from server is json)
		try {
		  var json = JSON.parse(message.data);
		} catch (e) {
		  console.log('This doesn\'t look like a valid JSON: ', message.data);
		  return;
		}
		// handle incoming message
		if (typeof json.client !== 'undefined' && !client ) {
			client = json.client;
console.log('received client from server');
		}
		if (typeof json.balls !== 'undefined') {
			// TODO: ballsArray komplett neu aufbauen so wie es vom Gegener gesendet wurde
			
			for (var i=0; i<ballsArray.length; i++) {
				if (ballsArray[i].color == json.balls[i].color) {
					ballsArray[i].top = json.balls[i].top;
					ballsArray[i].left = json.balls[i].left;
				} else {
					// remove ball
					ballsArray[i].xspeed = 0;
					ballsArray[i].yspeed = 0;
					ballsArray[i].parentNode.removeChild(ballsArray[i]);
					ballsArray.splice(i, 1);
				}
			}
console.log('received ballsArray from server');
		}
		if (typeof json.xspeed != 'undefined' && typeof json.yspeed != 'undefined') {
console.log('received push from server');
			push_white_ball(json.xspeed, json.yspeed);
		}
		

		moveBall();
	};


	// random player start
	random_player_start();


    // loop
	tick();
}
