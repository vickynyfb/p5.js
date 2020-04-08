function setup() {
  createCanvas(720, 400);   
  noStroke();
  noLoop();
}

function draw() {
  drawCircle(width/2, 280, 6);
  drawTarget(width*0.5, height*0.7, 80, 6);
  drawTarget(width*0.7, height*0.4, 30, 9);
  drawTarget(width*0.3, height*0.4, 30, 9)    
}

function drawTarget(xloc, yloc, size, num) {
  grayvalues = 255/num;
  steps = size/num;
  for (i = 0; i < num; i++) {
    fill(i*grayvalues);
    ellipse(xloc, yloc, size - i*steps, size - i*steps);
  }
    
    }

function drawCircle(x, radius, level) {
      
  var tt = 126 * level/4.0;
  fill(tt);
  ellipse(x, height/4, radius*2, radius*2);      
  if(level > 1) {
      
   level = level - 1;  
    drawCircle(x - radius/2, radius/3, level);
    drawCircle(x + radius/2, radius/3, level);    
    
  }   
    
}