//GLOBAL VARIABLES
var data; //hold the JSON data that will be loaded
var images; //an array of imagesss

//P5 SETUP
function setup() {
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvas");


    //url to local file
    var url = "js/data/setup.json";

    //load the json file with jsonLoaded function as a callback
    loadJSON(url, jsonLoaded);
    console.log('setup complete');
} //end setup


//P5 Draw
function draw() {


    //p5js-play requires this to draw the sprites you create
    drawSprites();
} //end draw


//JSON loaded callback
function jsonLoaded(jsonData) {
    console.log('json loaded', jsonData);
    data = jsonData;
    
    //Usually you only need one of these. Showing both so there are examples of each way of showing an image.

    //show the images using standard p5js code
    showImages();

    //show the images using p5js-play sprites
    showSpriteImages();
} //end jsonLoaded


// =========================================
// The next two are for normal loading of images
// =========================================

function showImages() {
    console.log('showimages');
    //create images
    //loop through images
    for (var i = 0; i < data.images.length; i++) {
        //here I used i*100 for the x position but you could also store the x and y in the JSON and access those too (each image in JSON would then need to be an object with x, y and path properties)
        displayImage(100*i, data.images[i]);
    } //end for
}//end showImages

function displayImage(x, path){
    // here we use a callback to display the image after loading
        loadImage("images/"+path, function (img) {
            //this shows the image once it's loaded
            image(img, x, 0);
        });
}//end displayImage

// =========================================
// code below relies on p5js-play library to load imgages as sprites
// =========================================

function showSpriteImages(){
     console.log('showSpriteimages');
    //create sprites
    //loop through images
    for (var i = 0; i < data.images.length; i++) {
        displaySprite(100*i+50, data.images[i]); //add 50 because in sprites the location will be the center of the image.
    } //end for
    
}//end showSpriteImages

function displaySprite(x, path){
    //create normal image       
    var img = loadImage("images/"+path);
    //create a p5-play sprite
    var sp = createSprite(x,200);
    //set the image as the sprite image
    sp.addImage("main",img);
}//end displaySprite