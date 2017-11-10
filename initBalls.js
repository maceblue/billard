function initBalls() {
		    
	var ball_yellow_full = new Object();
	ball_yellow_full.color = 'yellow';
	ball_yellow_full.number = '1';
	ball_yellow_full.full = true;
	ball_yellow_full.top = tableheight/2-ballsize/2;
	ball_yellow_full.left = (tablewidth/4)-ballsize/2+54;
	ball_yellow_full.dropped = false;
	billardballs.push(ball_yellow_full);

	var ball_yellow_half = new Object();
	ball_yellow_half.color = 'yellow';
	ball_yellow_half.number = '9';
	ball_yellow_half.full = false;
	ball_yellow_half.top = tableheight/2-ballsize;
	ball_yellow_half.left = (tablewidth/4)-ballsize/2+27;
	ball_yellow_half.dropped = false;
	billardballs.push(ball_yellow_half);

	var ball_blue_full = new Object();
	ball_blue_full.color = 'blue';
	ball_blue_full.number = '2';
	ball_blue_full.full = true;
	ball_blue_full.top = tableheight/2;
	ball_blue_full.left = (tablewidth/4)-ballsize/2+27;//173;
	ball_blue_full.dropped = false;
	billardballs.push(ball_blue_full);

	var ball_blue_half = new Object();
	ball_blue_half.color = 'blue';
	ball_blue_half.number = '10';
	ball_blue_half.full = false;
	ball_blue_half.top = tableheight/2-ballsize*1.5;
	ball_blue_half.left = (tablewidth/4)-ballsize/2;
	ball_blue_half.dropped = false;
	billardballs.push(ball_blue_half);

	var ball_red_full = new Object();
	ball_red_full.color = 'red';
	ball_red_full.number = '3';
	ball_red_full.full = true;
	ball_red_full.top = tableheight/2+ballsize/2;
	ball_red_full.left = (tablewidth/4)-ballsize/2;
	ball_red_full.dropped = false;
	billardballs.push(ball_red_full);

	var ball_red_half = new Object();
	ball_red_half.color = 'red';
	ball_red_half.number = '11';
	ball_red_half.full = false;
	ball_red_half.top = tableheight/2-ballsize*2;
	ball_red_half.left = (tablewidth/4)-ballsize/2-27;
	ball_red_half.dropped = false;
	billardballs.push(ball_red_half);

	var ball_pink_full = new Object();
	ball_pink_full.color = 'pink';
	ball_pink_full.number = '4';
	ball_pink_full.full = true;
	ball_pink_full.top = tableheight/2+ballsize;
	ball_pink_full.left = (tablewidth/4)-ballsize/2-27;
	ball_pink_full.dropped = false;
	billardballs.push(ball_pink_full);

	var ball_pink_half = new Object();
	ball_pink_half.color = 'pink';
	ball_pink_half.number = '12';
	ball_pink_half.full = false;
	ball_pink_half.top = tableheight/2+ballsize*1.5;
	ball_pink_half.left = (tablewidth/4)-ballsize/2-54;
	ball_pink_half.dropped = false;
	billardballs.push(ball_pink_half);

	var ball_orange_full = new Object();
	ball_orange_full.color = 'orange';
	ball_orange_full.number = '5';
	ball_orange_full.full = true;
	ball_orange_full.top = tableheight/2-ballsize*2.5;
	ball_orange_full.left = (tablewidth/4)-ballsize/2-54;
	ball_orange_full.dropped = false;
	billardballs.push(ball_orange_full);

	var ball_orange_half = new Object();
	ball_orange_half.color = 'orange';
	ball_orange_half.number = '13';
	ball_orange_half.full = false;
	ball_orange_half.top = tableheight/2-ballsize*1.5;
	ball_orange_half.left = (tablewidth/4)-ballsize/2-54;
	ball_orange_half.dropped = false;
	billardballs.push(ball_orange_half);

	var ball_green_full = new Object();
	ball_green_full.color = 'green';
	ball_green_full.number = '6';
	ball_green_full.full = true;
	ball_green_full.top = tableheight/2+ballsize/2;
	ball_green_full.left = (tablewidth/4)-ballsize/2-54;
	ball_green_full.dropped = false;
	billardballs.push(ball_green_full);

	var ball_green_half = new Object();
	ball_green_half.color = 'green';
	ball_green_half.number = '14';
	ball_green_half.full = false;
	ball_green_half.top = tableheight/2;
	ball_green_half.left = (tablewidth/4)-ballsize/2-27;
	ball_green_half.dropped = false;
	billardballs.push(ball_green_half);

	var ball_brown_full = new Object();
	ball_brown_full.color = 'brown';
	ball_brown_full.number = '7';
	ball_brown_full.full = true;
	ball_brown_full.top = tableheight/2-ballsize;
	ball_brown_full.left = (tablewidth/4)-ballsize/2-27;
	ball_brown_full.dropped = false;
	billardballs.push(ball_brown_full);

	var ball_brown_half = new Object();
	ball_brown_half.color = 'brown';
	ball_brown_half.number = '15';
	ball_brown_half.full = false;
	ball_brown_half.top = tableheight/2-ballsize/2;
	ball_brown_half.left = (tablewidth/4)-ballsize/2-54;
	ball_brown_half.dropped = false;
	billardballs.push(ball_brown_half);

	var ball_black_full = new Object();
	ball_black_full.color = 'black';
	ball_black_full.number = '8';
	ball_black_full.full = true;
	ball_black_full.top = tableheight/2-ballsize/2;
	ball_black_full.left = (tablewidth/4)-ballsize/2; //163 vorher 146;
	ball_black_full.dropped = false;
	billardballs.push(ball_black_full);

	var ball_white_full = new Object();
	ball_white_full.color = 'white';
	ball_white_full.number = '';
	ball_white_full.full = true;
	ball_white_full.top = tableheight/2-ballsize/2;
	ball_white_full.left = (tablewidth/4)*3-ballsize/2;
	ball_white_full.dropped = false;
	billardballs.push(ball_white_full);


	//ADD billardballs
	for (var i=0;i<billardballs.length;i++) { 
		var ball = document.createElement("div");
		if (billardballs[i].full==false) {
			ball.className = "ball half " + billardballs[i].color;	
		} else {
			ball.className = "ball " + billardballs[i].color;
		}
			
		var innerdiv = document.createElement('div');
		var innerspan = document.createElement('span');
		innerspan.innerHTML = billardballs[i].number;
		innerdiv.appendChild(innerspan);
		ball.appendChild(innerdiv);
		document.getElementById('table_inner').appendChild(ball);

		ball.collision = 0;
		ball.collision_delay = 0;
		ball.mass = 1;
		ball.color = billardballs[i].color;
		ball.full = billardballs[i].full;

		// defined position and speed
		ball.xspeed = 0;
		ball.yspeed = 0;
		ball.left = billardballs[i].left;
        ball.top = billardballs[i].top;
		ball.style.WebkitTransform = "translate3D("+ball.left+"px,"+ball.top+"px,0px)";
        ball.style.MozTransform = "translate3D("+ball.left+"px,"+ball.top+"px,0px)";
		
		ballsArray.push(ball);
	}

}