function setup() {

    createCanvas(windowWidth, windowHeight);

    //  drawWindow(50,50); //call the function
    //    drawWindow(200,50); //call the function
    //    drawWindow(350,50); //call the function

    for (var i = 0; i < 100; i++) {
        console.log(i);
        drawWindow(50 * i, 50);
    }

}

function drawWindow(startX, startY) {
    fill('peru');
    rect(startX, startY, 100, 250);
}
