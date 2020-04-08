var y = 50;
    var x = 0;
    var lineHeight = 50;
    var lineWidth = 50;
var r = 600;


function setup() {
	createCanvas(640, 640);
	background("white");
	
   }
    
    function draw() { 
        
    stroke("black");
    strokeWeight(20);
    noFill();
    rect(10, 10, 400, 400, 50, 50);
    
      push();
        if (x > 0) {
    x = width;
    translate(frameCount/2, 0); 
            
        } 
        
        
    strokeWeight(2);
    stroke("red");
    fill("gray");
    ellipse(107, 80, 15, 15);
    ellipse(257, 230, 15, 15); 
    
     
        pop();
        
       
        
    fill("black");
    strokeWeight(4);
    stroke("blue");
    textSize(40);
    textStyle(BOLD);
      
    y+= lineHeight;
    x+= lineWidth;
    text("V", x, y);
       
    
    stroke("red");
    textSize(50);
    y+= lineHeight;
    x+= lineWidth;
    text("I", x, y);
    
    textSize(40);
    y+= lineHeight; 
    x+= lineWidth;
    text("K", x, y);
    
    stroke("blue");
     y+= lineHeight;
    x+= lineWidth;
    text("V", x, y);
    
    stroke("red");
    textSize(50);
    y+= lineHeight;
    x+= lineWidth;
    text("I", x, y);
    
    textSize(40);
    y+= lineHeight; 
    x+= lineWidth;
    text("K", x, y);
     
}