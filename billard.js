var speed = 10;

function move(ball='ball_blue', angle, dist) {
    
    // pure javascript
    var elem = document.getElementById(ball); 
    var pos_x = 0;
    var pos_y = 0;
    var intv = setInterval(frame, speed);
    function frame() {
        if (pos_x == x || pos_y == y) {
            clearInterval(intv);
        } else {
            pos_x++;
            pos_y++; 
            elem.style.top = pos_y + 'px'; 
            elem.style.left = pos_x + 'px'; 
        }
    }

    // or with jquery
    var x = Math.cos(angle*Math.PI/-180) * dist;
    var y = Math.sin(angle*Math.PI/-180) * dist;
    $("#"+ball).animate({'left': '+='+x+'px', 'top': '+='+y+'px'}, 1000); 
    
    
}