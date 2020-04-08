function setup() {
    createCanvas(640, 480);
    background("white");
    
    stroke("red");
    strokeWeight(1);

    var x = 0;
    var y = 0;
    var w = 50;
    var h = 80;
    var radius = 100;
    
    var ratio = 4;
    var xunit = width/ratio;
    var yunit = height/ratio;

    for (var i = 0; i < ratio * ratio; i++) {
        if ( x >= width) {
            x = 0;
            y += yunit;
        }        
        if (x >= width/2) fill("lightblue");
        else fill("pink");
        
        rect(x + xunit/2, y + yunit/8, w, h/4);
        rect(x + xunit/2, y + yunit/4, w, h);
        rect(x + xunit/2.95, y + yunit/4, w/2, h);
        rect(x + xunit/1.22, y + yunit/4, w/2, h);
        ellipse(x + xunit/1.5, y + yunit/1.6, radius/4, radius/1.5);
         
        x += xunit;
    }
}