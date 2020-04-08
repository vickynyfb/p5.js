var x;
var y;
var r;
var z;
var a;

function setup() {
    createCanvas(600, 450);
    background("black");
    strokeWeight(4);
    stroke("gold");
    
    
    var yellow = color(255, 253, 0);
    var x = 400;
    var y = 80;
    var r = 100;
    fill(yellow);
    rect(x, y, r, r);
    
    var green = color(0, 233, 0);
    var x = 500;
    var y = 20;
    var r = 50;
    fill(green);
    rect(x, y, r, r);
    
    
    var red = color("red");
    var x = 200;
    var y = 200;
    var r = 200;
    fill(red);
    rect(x, y, r, r);
    
    var orange = color("#FF7400");
    var x = 250;
    var y = 250;
    var r = 100;
    var z = 6;
    var a = 40;
    fill(orange);
    triangle(x, y, a, z, r, r);
    
    var pink = color(243, 0, 137);
    var x = 100;
    var y = 100;
    var r = 100;
    fill(pink);
    ellipse(x, y, r, r);
    
    var lilac = color(146, 104, 128);
    var x = 50;
    var y = 50;
    var r = 100;
    fill(lilac);
    triangle(x, y, x, r, r, x);
    
    
}


