var ballsArray = [];
var billardballs = [];
var ballsize = 30;

var speedLimit = 30;
var tableheight = 322;
var tablewidth = 714;

var collision_friction = 0.98;
var delta = 1 / 60;
var friction = 1;
var friction_active = true;

var white_ball_dropped = false;
var black_ball_dropped = false;
var white_ball_elem = new Object();

var mousedowntimer;
var mousepower = 0;

window.requestAnimFrame = (function() {
    return  window.requestAnimationFrame       || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame    || 
			window.oRequestAnimationFrame      || 
			window.msRequestAnimationFrame     || 
			function(/* function */ callback, /* DOMElement */ element) {
				window.setTimeout(callback, 1000 / 60);
			};
    })();

function handleMouseMove(e) {
    e.preventDefault();
    // mouseX = parseInt(e.clientX);
    // mouseY = parseInt(e.clientY);
    // var dx = mouseX - white_ball_elem.left;
    // var dy = mouseY - white_ball_elem.top;
    // radianAngle = Math.atan2(dy, dx);
    // xspeed = Math.cos(radianAngle) * offSet;
    // yspeed = Math.sin(radianAngle) * offSet;

}