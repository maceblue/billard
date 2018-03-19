function manage_bounce(ball, ball2) {
    var dx = ball.left-ball2.left;
    var dy = ball.top-ball2.top;
    var collisionision_angle = Math.atan2(dy, dx);
    var distance = Math.sqrt(dx*dx + dy*dy);
	
    // resolve stickyness
    if (distance<ballsize) {
// console.log('sticky!', dx, dy);
		ball.left += Math.cos(collisionision_angle) * (ballsize-distance);
        ball.top += Math.sin(collisionision_angle) * (ballsize-distance);
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
    ball.xspeed = precisionRound(Math.cos(collisionision_angle)*final_xspeed_1+Math.cos(collisionision_angle+Math.PI/2)*final_yspeed_1);
    ball.yspeed = precisionRound(Math.sin(collisionision_angle)*final_xspeed_1+Math.sin(collisionision_angle+Math.PI/2)*final_yspeed_1);
    ball2.xspeed = precisionRound(Math.cos(collisionision_angle)*final_xspeed_2+Math.cos(collisionision_angle+Math.PI/2)*final_yspeed_2);
    ball2.yspeed = precisionRound(Math.sin(collisionision_angle)*final_xspeed_2+Math.sin(collisionision_angle+Math.PI/2)*final_yspeed_2);

    ball.xspeed *= collision_friction;
    ball.yspeed *= collision_friction;
    ball2.xspeed *= collision_friction;
    ball2.yspeed *= collision_friction;
}