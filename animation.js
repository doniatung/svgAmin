var s = document.getElementById("vimage");
var stopp = document.getElementById("stop");
var circle = document.getElementById("size");
var id;

var stop = function(){
    clearInterval(id);
}

var clear = function(){
    for(i = s.children.length-1; i >= 0; i--){
	     s.removeChild(s.children[i]);
    }
}

var circleGrow = function(){
    clear();
    var radius = 30;
    var bigger = true;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 300);
    circle.setAttribute("cy", 300);
    circle.setAttribute("fill", "blue");
    circle.setAttribute("stroke", "black");
    s.appendChild(circle);

    var bigger = function(){
	if(bigger){
	    radius++;
	    circle.setAttribute("r", radius);
	    if(radius >= 300){
		bigger= false;
	    }
	}
	else{
	    shrink();
	}
    }

    var shrink = function(){
	radius--;
	circle.setAttribute("r", radius);
	if(radius <= 0 ){
	    bigger = true;
	}
    }

    id = setInterval(bigger, 10);
}


var dvd = document.getElementById("bounce");

var dvdMove = function(){
    clear();
    var imgW = 200;
    var imgH = 150;
    var x = Math.random()*(600-imgW);
    var y = Math.random()*(600-imgH);
    var dX = 1;
    var dY = 1;
    var dvdLogo = document.createElementNS("http://www.w3.org/2000/svg", "image");
    dvdLogo.setAttribute("width", imgW);
    dvdLogo.setAttribute("height", imgH);
    dvdLogo.setAttribute("href", 'dvdlogo.jpeg');
    s.appendChild(dvdLogo);

    var move = function() {
	dvdLogo.setAttribute("x", x);
	dvdLogo.setAttribute("y", y);
	if(x+imgW >= 600 || x < 0){
	    dX *= -1;
	}
	if(y+imgH >= 600 || y < 0){
	    dY *= -1;
	}
	x+=dX;
	y+=dY;
    }

    id = setInterval(move, 10);
}

circle.addEventListener("click", circleGrow);
dvd.addEventListener("click", dvdMove);
stopp.addEventListener("click", stop);
