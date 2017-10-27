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

	// random player start
	random_player_start();

	// init server-connection via websocket
	// if user is running mozilla then use it's built-in WebSocket
	window.WebSocket = window.WebSocket || window.MozWebSocket;
	server_connection = new WebSocket('ws://127.0.0.1:1337');
	server_connection.onopen = function () {
	// connection is opened and ready to use
	};
	server_connection.onerror = function (error) {
	// an error occurred when sending/receiving data
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
		for (var i=0; i<ballsArray.length; i++) {
			ballsArray[i].top = json.balls[i].top;
			ballsArray[i].left = json.balls[i].left;
		}
console.log('received ballsArray from server');
		moveBall();
	};


    // loop
	tick();
}
