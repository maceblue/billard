function add_white_ball() {
	white_ball_elem.top = tableheight/2-ballsize/2;
	white_ball_elem.left = (tablewidth/4)*3-ballsize/2;
	ballsArray.push(white_ball_elem);
	document.getElementById('table_inner').appendChild(white_ball_elem);
	white_ball_elem.style.WebkitTransform = "translate3D("+white_ball_elem.left+"px,"+white_ball_elem.top+"px,0px)";
    white_ball_elem.style.MozTransform = "translate3D("+white_ball_elem.left+"px,"+white_ball_elem.top+"px,0px)";
    white_ball_dropped = false;
}

function push_white_ball(xspeed, yspeed) {
	for (var i=0; i<ballsArray.length; i++) {
		if (ballsArray[i].color=='white') {		
			ballsArray[i].xspeed = xspeed;
			ballsArray[i].yspeed = yspeed;
		}
	}
	window.requestAnimationFrame(tick);
}