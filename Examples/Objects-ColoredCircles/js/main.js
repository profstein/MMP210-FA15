//GLOBAL VARIABLES
var circles;

//SETUP CODE (runs once at the start)
function setup() {

    createCanvas(displayWidth, displayHeight);

    //run the start screen function
    createCircles();

}

function createCircles() {
    console.log('create circles');

    //create blank circles array
    circles = [];
    var x = 20;
    var y = 20;
    //add circles to the array
    var c;
    for (var i = 0; i < 100; i++) {

//        circles[i] = new ClickableCircle(x, y);
//        circles[i].drawCircle();
        c = new ClickableCircle(x,y);
        c.drawCircle(); console.log('c',c);
        circles.push(c);
        x += 30;
        if (x > width) {
            x = 20;
            y += 30;
        }
    }
} //end createCircles

function ClickableCircle(sX, sY) {
    this.x = sX;
    this.y = sY;
    this.r = 10;
    this.fillColor = 'red';

    this.drawCircle = function () {
        console.log('draw circles');
        fill(this.fillColor);
        ellipse(this.x, this.y, this.r * 2, this.r * 2)
    }
} //end ClickableCircle



// When the user clicks the mouse
function mousePressed() {
    var d;
    //loop through the circles
    for (var i = 0; i < circles.length; i++) {
        d = dist(mouseX, mouseY, circles[i].x, circles[i].y);
        if (d < circles[i].r) {
            circles[i].fillColor = 'blue';
            circles[i].drawCircle();
        }
    }

}