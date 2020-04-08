var x = 10;
var y = 100;
var r;
var g;
var b;

function setup() {
    createCanvas(640, 480);
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);   
}

function draw() {
    background("white");
    if (frameCount % 30 == 0) {
        
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
    }
    
    fill(r, g, b);
    
    rocket(x/2, y/2, 100);
    rocket(x, y, 10);
    track(x, 300, 150);
    
    x += 1;
  
    
    if (x > width) {
        x = 0;
    }
    
    
    
    if(x < width/2){
        y++;
        
    } else {
        
        y--;
    }
    
}

var rocket = function(x, y, size) {
    
    var fin = size/4;
    var cone = size * 1.5;
    var windowWidth = size/3.33;
    var distance = size/2
    
    
  
    rect(x, y, size * 2, size);
   
    triangle(x, y, x, y - fin, x + size, y);
    triangle(x, y + size, x, y + size + fin, x + size, y + size);
    arc(x + size*2, y + size/2, cone, size, PI + HALF_PI, HALF_PI);
    
    for (var i = 0; i < 3; i++) {
        ellipse(x + distance + i*distance, y + size/2, windowWidth, windowWidth);
        
    }
}
var track = function(x, y, size){
    var fin = size/2;
    var doble = size * 2;
    var windowWidth = size/3.33;
    var distance = size/2
    
   
    fill("red");
    ellipse(x + fin, y + size, fin, fin);
    ellipse(x + doble, y + size, fin, fin);
    fill("gold");
    rect(x, y, doble, size);
    fill("black");
    triangle(x + doble, y + distance, x + doble, y + size, x + size * 3, y + size);
    fill("white");
    rect(x + doble, y + distance/2, distance, fin);  
    
    

    
} 