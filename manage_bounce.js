function manage_bounce(ball, ball2) {
    var dx = ball.left-ball2.left;
    var dy = ball.top-ball2.top;
    var collisionision_angle = Math.atan2(dy, dx);
    var distance = Math.sqrt(dx*dx + dy*dy);
    magnitude_1 = Math.sqrt(ball.xspeed*ball.xspeed+ball.yspeed*ball.yspeed);
    magnitude_2 = Math.sqrt(ball2.xspeed*ball2.xspeed+ball2.yspeed*ball2.yspeed);
	if (distance<29) { //sticky!
console.log('sticky!', dx, dy);
			ball.left += Math.cos(magnitude_1) * dx;
        ball.top += Math.sin(magnitude_1) * dy;
		// ball.left += dx;
		// ball.top += dy;
	}

    
    magnitude_1 = Math.sqrt(ball.xspeed*ball.xspeed+ball.yspeed*ball.yspeed);
    magnitude_2 = Math.sqrt(ball2.xspeed*ball2.xspeed+ball2.yspeed*ball2.yspeed);
    direction_1 = Math.atan2(ball.yspeed, ball.xspeed);
    direction_2 = Math.atan2(ball2.yspeed, ball2.xspeed);
    new_xspeed_1 = magnitude_1*Math.cos(direction_1-collisionision_angle);
    new_yspeed_1 = magnitude_1*Math.sin(direction_1-collisionision_angle);
    new_xspeed_2 = magnitude_2*Math.cos(direction_2-collisionision_angle);
    new_yspeed_2 = magnitude_2*Math.sin(direction_2-collisionision_angle);
    final_xspeed_1 = ((ball.mass-ball2.mass)*new_xspeed_1+(ball2.mass+ball2.mass)*new_xspeed_2)/(ball.mass+ball2.mass);
    final_xspeed_2 = ((ball.mass+ball.mass)*new_xspeed_1+(ball2.mass-ball.mass)*new_xspeed_2)/(ball.mass+ball2.mass);
    final_yspeed_1 = new_yspeed_1;
    final_yspeed_2 = new_yspeed_2;
    ball.xspeed = Math.cos(collisionision_angle)*final_xspeed_1+Math.cos(collisionision_angle+Math.PI/2)*final_yspeed_1;
    ball.yspeed = Math.sin(collisionision_angle)*final_xspeed_1+Math.sin(collisionision_angle+Math.PI/2)*final_yspeed_1;
    ball2.xspeed = Math.cos(collisionision_angle)*final_xspeed_2+Math.cos(collisionision_angle+Math.PI/2)*final_yspeed_2;
    ball2.yspeed = Math.sin(collisionision_angle)*final_xspeed_2+Math.sin(collisionision_angle+Math.PI/2)*final_yspeed_2;

    

    // var absV = Math.abs(ball.xspeed) + Math.abs(ball2.xspeed); 
    // overlap = (30) - Math.abs(ball.left - ball2.left); 
    // ball.left += ball.xspeed / absV * overlap; 
    // ball2.left += ball2.xspeed / absV * overlap; 

    // test another elastic collision algorithm
    // var distx = ball.left-ball2.left;
	//       var disty = ball.top-ball2.top;
	//       var dist = Math.sqrt(distx * distx + disty * disty);
	//       if (dist < 30) {
	//           var xspeed1 = ball.xspeed;
	//           var yspeed1 = ball.yspeed;
	//           var speed1 = Math.sqrt(xspeed1 * xspeed1 + yspeed1 * yspeed1);
	//           var speed2 = 0;
	//           var angle1 = Math.atan(ball.yspeed / ball.xspeed);
	//           var anglecoll1 = Math.atan(disty / distx);
	//           var anglecoll = anglecoll1 - angle1;
	//           var speed1new = speed1 * Math.abs(Math.sin(anglecoll));
	//           var speed2new = speed1 * Math.abs(Math.cos(anglecoll));
	//           if (anglecoll < 0) var angle1new = angle1 + anglecoll + Math.PI / 2;
	//           else var angle1new = angle1 + anglecoll - Math.PI / 2;
	//           var angle2new = angle1 + anglecoll;
	//           ball.xspeed = speed1new * Math.cos(angle1new);
	//           ball.yspeed = speed1new * Math.sin(angle1new);
	//           ball2.xspeed = speed2new * Math.cos(angle2new);
	//           ball2.yspeed = speed2new * Math.sin(angle2new);
	//       }

    
    ball.xspeed *= collision_friction;
    ball.yspeed *= collision_friction;
    ball2.xspeed *= collision_friction;
    ball2.yspeed *= collision_friction;

    // if ((ball.top <= ball2.top+(ballsize/2) && ball.left <= ball2.left+(ballsize/2)) 
    // 	|| (ball.top >= ball2.top-(ballsize/2) && ball.left >= ball2.left+(ballsize/2))
    // ) {
    // 	ball.top += 1;
    // 	ball.left += 1;
    // }
}