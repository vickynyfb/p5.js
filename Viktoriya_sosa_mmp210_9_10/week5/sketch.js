function setup() {
    createCanvas(640, 480);
    background("lightgray");
    stroke("red"); 
    strokeWeight(6);
    drawEllipse(320, 250, 650);
    drawWindow(100, 50, 100, 200, 8);
    drawWindow(250, 100, 50, 100, 4);
    drawWindow(350, 100, 50, 100, 4);
    drawWindow(300, 300, 80, 150, 6);
    drawWindow(450, 50, 100, 200, 8);      
}



var drawWindow = function(x, y, w, h, m) {
    
    
   
    fill("yellow");
   if (x > width/2) {
		fill("black");
	} 
    ellipse(x + 6.5*m, y + 12.5*m, w, h);
    
    
    
    fill("gray");
    if (x > width/2) {
		fill("black");
	} 
    rect(x + 3*m, y - 4*m, w/2, h/8, m);

    noFill();
    rect(x, y, w, h);
    fill("lightblue");
    if (x > width/2) {
		fill("lightgray");
	} 
    rect(x, y - m, w, h/8, m);
    
    
    
     fill("white");
    rect(x + 2.5*m, y + 4*m, w/2.5 - 2*m, h/3);
    rect(x + m/2 + w/2, y + 4*m, w/2.5 - 2*m, h/3);
    
    rect(x + 2.5*m, y + 2*m + h/2, w/2.5 - 2*m, h/2.5 - 3*m);
    rect(x + m/2 + w/2, y + 2*m + h/2, w/2.5 - 2*m, h/2.5 - 3*m);
      
}

var drawEllipse = function(x, y, r){
 ellipse(x, y, r, r);

}