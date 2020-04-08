function setup() {
    createCanvas(740, 740);
    background("white");
    
    noFill();
    rectMode(CENTER);
    
   
    var columns = 32;
    var rows = 12;
   
    var w = width/columns;
    var h = height/rows;
    
    
   
    
     shearX(-10);
    for (var x = 350; x < width * 1.3; x += w) {
        for (var y = 100; y < height; y += h) {
        
            var r = random(0,100);
            var g = random(0,1);
            var b = random(0,1);
            
            if (x > w*3 && x < w*7 && y > h*3 && y < h*7) {
                fill(r * 10, g, b);
            } else {
                fill(r * y, g, b);
            }
            
            var rs = random(-5, 10);
            
            rect(x + w/2, y + h/2, w + rs, h + rs);
            
          
        }
    }
    
    
    
    shearY(15);
    for (var x = 350; x < width/1.5; x += w) {
        for (var y = 350; y < height * 1.4; y += h) {
        
           
            
            var r = random(0,255);
            var g = random(0,1);
            var b = random(0,1);
            
            if (x > w*3 && x < w*7 && y > h*3 && y < h*7) {
                fill(r * 10, g, b * x);
            } else {
                fill(r, g, b * x);
            }
            
            var rs = random(-5, 10);
            
            rect(x + w/2, y + h/2, w + rs, h + rs);
            
          
        }
    }
    
    
  
    shearX(10);
    shearY(-20);
    for (var x = -270; x < width/2.5; x += w) {
        for (var y = 840; y < height * 2; y += h) {
        
           
            
            var r = random(0,255);
            var g = random(0,255);
            var b = random(0,255);
            
           
            
            fill(r, g, b);
            
             var randomSize = 0;
            if (y < height/2) {
                randomSize = random(-10, 0);
            } else {
                randomSize = random(-20, 0);
            }
            
            rect(x, y, w + randomSize, h + randomSize);
            
          
        }
    }
    
    
    
   
}

    