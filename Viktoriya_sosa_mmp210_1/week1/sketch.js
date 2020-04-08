function setup() {
    createCanvas(640, 200);
    background("pink");
    noStroke();

    var y = 100;
    var g = 0;
    var b = 0;
    var rIncrement = 50;

    for (var r = 0; r < width; r += rIncrement) {
        fill(r, g, b);
        ellipse(r, y, rIncrement, rIncrement);
    }
}  
    
}