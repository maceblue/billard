
function moveBall() {		
	for (var i=0;i<ballsArray.length;i++) { 

		// save white balls element for later
		if (ballsArray[i].color=='white') {
			white_ball_elem = ballsArray[i];
		} 

		// check boundries and holes
		if (
			(	// HOLE top left
				ballsArray[i].top<=ballsize/4
				&& ballsArray[i].left<=ballsize/4
			)
			||
			(	// HOLE top middle
				ballsArray[i].top<=0
				&& ballsArray[i].left>tablewidth/2-ballsize
				&& ballsArray[i].left<tablewidth/2
			)
			||
			(	// HOLE top right
				ballsArray[i].top<=ballsize/4
				&& ballsArray[i].left>=tablewidth-ballsize*1.25
			)
			||
			(	// HOLE bottom left
				ballsArray[i].left<=0+ballsize/4 
				&& ballsArray[i].top>=tableheight-ballsize
			)
			||
			(	// HOLE bottom middle
				ballsArray[i].top>=tableheight-ballsize
				&& ballsArray[i].left>tablewidth/2-ballsize
				&& ballsArray[i].left<tablewidth/2
			)
			||
			(	// HOLE bottom right
				ballsArray[i].top>=tableheight-ballsize*1.25
				&& ballsArray[i].left>=tablewidth-ballsize*1.25
			)
		) {
			// BALL DROPPED

			// black or white?
			if (ballsArray[i].color=='white') {
				white_ball_dropped = true;
			} else if (ballsArray[i].color=='black') {
				black_ball_dropped = true;
			}

			// save balls dropped this turn
			balls_dropped_this_turn.push(ballsArray[i]);

			// update billardballs array
			for (var a=0; a<billardballs.length; a++) {
				if (ballsArray[i].color == billardballs[a].color) {
					billardballs[a].dropped = true;
				}
			}

			// remove ball
			ballsArray[i].xspeed = 0;
			ballsArray[i].yspeed = 0;
			ballsArray[i].parentNode.removeChild(ballsArray[i]);
			ballsArray.splice(i, 1);

			continue;
		}
		
		
		// BOUNDRIES Left
		if (ballsArray[i].left<0) {
			ballsArray[i].left = 0;
			ballsArray[i].xspeed *= -1;
			ballsArray[i].xspeed *= collision_friction;
		}
		// BOUNDRIES Right		
		if (ballsArray[i].left>tablewidth-ballsize) {
			ballsArray[i].left = tablewidth-ballsize;
			ballsArray[i].xspeed *= -1;
			ballsArray[i].xspeed *= collision_friction;
		}	
		// BOUNDRIES Top
		if (ballsArray[i].top<0) {
			ballsArray[i].top = 0;
			ballsArray[i].yspeed *= -1;
			ballsArray[i].yspeed *= collision_friction;
		}		
		// BOUNDRIES Bottom
		if (ballsArray[i].top>tableheight-ballsize) {
			ballsArray[i].top = tableheight-ballsize;
			ballsArray[i].yspeed *= -1;
			ballsArray[i].yspeed *= collision_friction;
		}	

		
		//GET THE NEW POSITION
		ballsArray[i].left += ballsArray[i].xspeed;
		ballsArray[i].top += ballsArray[i].yspeed;

		// slowing down 
		var totalspeed = Math.abs(ballsArray[i].xspeed) + Math.abs(ballsArray[i].yspeed);
// console.log(totalspeed);
		// totalspeed is mainly between 0.4 and 4
		// friction has to be between 0.95 (slow balls) and 0.99 (fast balls)
		if (totalspeed < 1) {
			friction = 0.985;
		} else if (totalspeed >1 && totalspeed <2){
			friction = 0.985;
		}else if (totalspeed >2 && totalspeed <3){
			friction = 0.990;
		}else if (totalspeed >3 && totalspeed <4){
			friction = 0.990;
		}else if (totalspeed >4 && totalspeed <50){
			friction = 0.992;
		}
		// var t = totalspeed / 100;
		// var t_friction = 0.93 + t;
// console.log(t_friction);
		if (friction_active) {
			ballsArray[i].xspeed = ballsArray[i].xspeed*friction;
			ballsArray[i].yspeed = ballsArray[i].yspeed*friction;
		}
		
		//APPLY THE NEW POSITION
		ballsArray[i].style.WebkitTransform = "translate3D("+ballsArray[i].left+"px,"+ballsArray[i].top+"px,0px)";
        ballsArray[i].style.MozTransform = "translate3D("+ballsArray[i].left+"px,"+ballsArray[i].top+"px,0px)";
	}
}