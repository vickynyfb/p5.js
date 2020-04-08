var radius = 5;

function setup() {
    createCanvas(600, 450);
    
}

function draw() {
    
    background("black");
    strokeWeight(4);
    stroke("gold");
       
    var yellow = color(255, 253, 0);
    var x = 400;
    var y = 80;
    fill(yellow); 
    if (mouseX > width/2) {
		fill(yellow);
	} else {
		fill("red");
	} 
    if (frameCount < 50) { 
        fill("blue");
    }
    rect(x, y, radius, radius);
    if (frameCount < 100) {
       radius = frameCount;
    }
    
    
    var green = color(0, 233, 0);
    var x = 500;
    var y = 20;
    var r = 50;
    fill(green);
    if (mouseX > width/2) {
		fill("green");
	} else {
		fill("white");
	}
    rect(x, y, r, r);
    
    
      
    var red = color("red");
    var x = 200;
    var y = 200;
    var r = 200;
    fill(red);
    if (mouseX > width/2) {
		fill("red");
	} else {
		fill("green");
	}
    rect(x, y, r, r);
    
    
    
    var orange = color("#FF7400");
    var x = 250;
    var y = 250;
    var r = 100;
    var z = 6;
    var a = 40;
    fill(orange);
    if (frameCount > 50) { 
        fill("gray");
    }
    triangle(x, y, a, z, radius, radius);
    if (frameCount < 100) {
       radius = frameCount;
    } 
    
    
    
    
    var pink = color(243, 0, 137);
    var x = 100;
    var y = 100;
    var r = 100;
    fill(pink);
    if (mouseX > width/2) {
		fill(pink);
	} else {
		fill("orange");
	}
    ellipse(x, y, radius, radius);
    if (frameCount < 100) {
       radius = frameCount;
    }
    
    
    
    var lilac = color(146, 104, 128);
    var x = 50;
    var y = 50;
    var r = 100;
    fill(lilac);
    if (mouseX > width/2) {
		fill(lilac);
	} else {
		fill("beige");
	}
    triangle(x, y, x, r, r, x);
    
    
    var c = color(8, 146, 146);
    var x = 100;
    var y = 100;
    var r = 100;
    fill(c);
    if (mouseX > width/2) {
		fill(c);
	} else {
		fill("white");
	}
    
    
    
ellipse(mouseX, mouseY, x, radius);
    if (frameCount < 100) {
       radius = frameCount;
    }  
   
}