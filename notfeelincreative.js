var svg = document.getElementById("vimage");
var stopit = document.getElementById("stop");
var sizeChange = document.getElementById("size");
var bounce = document.getElementById("bounce");

var shape = 0;
var xpos, ypos;
var id;
var size = 30;
var counter = true;

var width = 500;
var height = 500;
var counterX, counterY;

var change = function(e){
  e.preventDefault();
  this.setAttribute("fill", "green");
}

var clicked = function(e){
  if (e.toElement == this){
    xpos = e.offsetX;
    ypos = e.offsetY;
      drawDot(xpos, ypos, size);
  }
};

var drawDot = function(x,y,size){
  var newthing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  newthing.setAttribute("cx", x);
  newthing.setAttribute("cy", y);
  newthing.setAttribute("r", size);
  newthing.setAttribute("fill", "yellow");
  newthing.setAttribute("stroke", "black");
  newthing.addEventListener("click", change);
  svg.appendChild(newthing);
  console.log(xpos);
  console.log(ypos);
}

svg.addEventListener("click", clicked);

var innout = function(e){
    e.preventDefault();
    counter = !counter;
    //window.cancelAnimationFrame(id);
    window.requestAnimationFrame(grownshrink);
}

var grownshrink = function(){
  if (counter){
    if (size < 300){
      size ++;
      drawDot(xpos, ypos, size)
    }
    else{
      counter = !counter;
      size --;
      drawDot(xpos, ypos, size);
    }
  }
  else{
    if (size > 5){
      size --;
      drawDot(xpos, ypos, size)
    }
    else{
      counter = !counter;
      size ++;
      drawDot(xpos, ypos, size);
    }
  }
  window.cancelAnimationFrame(id);
  id = window.requestAnimationFrame(grownshrink);
  //console.log(id);
}

var stop = function(e){
  window.cancelAnimationFrame(id);
}

var clear = function(e){
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }
    counter = 0;
};


var multX = 1;
var multY = 1;
var dvdz = function(){
  clear();
  var img = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image"
  );
  img.setAttribute('href' ,'dvdlogo.jpg');
  img.setAttribute("width", 150);
  img.setAttribute("height", 100);
  img.setAttribute("x", xpos);
  img.setAttribute("y", ypos);
/*  if (xpos <= 0 || xpos >= 440){
      multX *= -1;
  }
  if (ypos <= 0 || ypos >= 440){
      multY *= -1;
  }
  var speed = 4;

  xpos += speed * multX;
  ypos += speed * multY;
  //window.cancelAnimationFrame(id2);
  id2 = window.requestAnimationFrame(dvdz);
}*/
  svg.appendChild(img);
  console.log(xpos);
}


stopit.addEventListener("click", stop);
sizeChange.addEventListener("click", innout);
bounce.addEventListener("click", dvdz);
