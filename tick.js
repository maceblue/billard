function tick() {

    moveBall();

    var anyballmoving = false;

    for (var x=0; x<ballsArray.length; x++) {
        for (var y=x+1; y<ballsArray.length; y++) {
        	var distance_x = Math.abs(ballsArray[x].left-ballsArray[y].left);
        	var distance_y = Math.abs(ballsArray[x].top-ballsArray[y].top);
        	var distance = Math.sqrt(distance_x*distance_x+distance_y*distance_y);
        	if (distance<=ballsize 
        		&& (ballsArray[x].collision == 0 || ballsArray[y].collision == 0)
        	) {
        		ballsArray[x].collision = 1;
                ballsArray[y].collision = 1;
// console.log('bounce');
                manage_bounce(ballsArray[x], ballsArray[y]);
        	} else if (distance>ballsize) {
                ballsArray[x].collision = 0;
                ballsArray[y].collision = 0;
            }
        }

        var totalspeed = Math.abs(ballsArray[x].xspeed) + Math.abs(ballsArray[x].yspeed);
// console.log(totalspeed);		        	
    	if (totalspeed>0.1) {
        	anyballmoving = true;
        }
    }

    // play while anyball is moving
    if (anyballmoving) {
    	requestAnimFrame( tick );//RUN THE NEXT TICK	
    } else {
console.log('end');
		if (white_ball_dropped) {
			add_white_ball();	
		} else if (black_ball_dropped) {
			manage_black_ball_dropped();
			black_ball_dropped = false;
		}
    }
}