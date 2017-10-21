function init() {
	// Create Table
	var table = document.createElement('div');
	table.id = 'table';
	document.body.appendChild(table);

	var table_inner = document.createElement('div');
	table_inner.id = 'table_inner';
	table.appendChild(table_inner);

	// add mouse function to push white ball
	table_inner.addEventListener("mousedown", function() {
		mousepower = 0;
	    mousedowntimer=setInterval(function() {
	    	if (mousepower<=speedLimit) {
	    		mousepower++;
	    	}
	        console.log('mousepower: ' + mousepower);
	    }, 100);
	});
	table_inner.addEventListener("mouseup", function(e){
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
}
