//GLOBAL VARIABLES
var data; //hold the JSON data that will be loaded
var player; //the player
var enemies; //the enemies

//P5 SETUP
function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("canvas");
    
    
    //url to local file
    var url = "js/data/setup.json";

    //load the json file with jsonLoaded function as a callback
    loadJSON(url, jsonLoaded);
    console.log('setup complete');
}//end setup


//P5 Draw
function draw(){
    
    
    //p5js-play requires this to draw the sprites you create
    drawSprites();
}//end draw


//JSON loaded callback
function jsonLoaded(jsonData){
    data = jsonData; console.log('data',data);
    console.log('json loaded');
    setupGame(); //now that data is loaded we can setup the game
    fill(data.player.fill);
        strokeWeight(2);
        stroke(data.player.stroke);
        ellipse(50,50,20,20);
}//end jsonLoaded

function setupGame(){
    console.log('setupGame');
    //create player
    player = createSprite(data.player.x, data.player.y);
    
    //this overrides the draw function to allow you to use p5 
    player.draw = function(){
        smooth();
        fill(data.player.fill);
        strokeWeight(2);
        stroke(data.player.stroke);
        ellipse(0,0,30,30);
    }//end draw
    
    //use for loop to create enemies
    for(var i=0; i< data.enemies.length; i++){
        var enemy = createSprite(data.enemies[i].x, data.enemies[i].y);
        //we need to save the fill and stroke data because we can't use the i variable in the draw function
        enemy.settings = data.enemies[i];
        enemy.draw = function(){
            fill(this.settings.fill);
            stroke(this.settings.stroke);
            ellipse(0,0,30,30);
        }
    }//end for
    
    
}