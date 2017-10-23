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
console.log('mousepower: ' + mousepower);
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
		tick();
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

		cue.style.top = white_ball_elem.top+45 + 'px';
		cue.style.left = white_ball_elem.left+57 + 'px';
  		cue.style.transform = 'rotate('+radianAngle+'deg)';
	});

    // loop
	tick();
}
