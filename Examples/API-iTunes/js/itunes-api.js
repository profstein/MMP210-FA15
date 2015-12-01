function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(windowWidth,1600);
    cnv.parent("canvas");
    //ellipse(100,100,30,30); //test to see if p5 is working

    //url to NYC Social Media File
    url = "//itunes.apple.com/search?term=jack+johnson&limit=10&callback=?";
//    url = "https://itunes.apple.com/search?media=music&term=2&country=it&limit=60&attribute=genreIndex&entity=song&callback=me";
    //load the json file with jsonLoaded function as a callback
    //Can't get the loadJSON in p5js to work
    //loadJSON(url, jsonLoaded,jsonError,"jsonp");
    
    
    //this works. 
    var iTunesData = $.getJSON( url, function(data) {
  console.log( "success",data );
        jsonLoaded(iTunesData.responseJSON);
})
  .done(function(data) {
    console.log( "second success",data );
  })
  .fail(function(data) {
    console.log( "error",data );
  })
  .always(function(data) {
    console.log( "complete" );
  });
}//end setup

//callback function for the loadJSON
//the JSON data will be loaded into the nycData variable
function jsonLoaded(iTunesData){
    console.log("iTunes",iTunesData);//test that data loaded


    var results = iTunesData.results;
    var posY = 20;
    for(var i=0;i<results.length; i++){
        //this places them each 20px apart with a 50px offset from the top of the screen.
        if(results[i].artworkUrl100){
            console.log("image", results[i].artworkUrl100);
            
            //this code doesn't work because by the time the callback runs the loop is done so posY is the same for all
//            loadImage(results[i].artworkUrl100, function(img) {
//                    image(img, 50, posY);
//                    console.log('posy',posY);
//            });
//            posY+= 20;
            
            //this one uses objects to store information
            var result = new songResult();
            result.setPosition(50,posY);
            result.setData(results[i]);
            posY+= 110;
        }
    }//end for
}//end jsonLoaded


function songResult(){
    this.coverImage;
    this.data;
    this.x;
    this.y;
}

songResult.prototype.setData = function(data){
    this.data = data;
    
    if(data.artworkUrl100){
        this.display(data.artworkUrl100);
    }
}

songResult.prototype.display = function(imgUrl){
    //this will still no work because it will run this.imageLoaded in a different scope
    //this.coverImage = loadImage(imgUrl, this.imageLoaded);
//    image(this.coverImage, this.x,this.y);
//    console.log('this.coverImage',this.coverImage);
    console.log('loading image', this.x + ":"+this.y);
    //this requires a immediately invoked function expression to retain the information about the loc from the object. We pass in the this.x and this.y into a new object that is imgLoc.
    //then we return the function that will be the callback for the loadImage method.
    //if we were just creating dom elements this would be easier.
    loadImage(imgUrl, 
            (function(imgLoc){
                return(function(img){
                    console.log('in image loaded');
                    console.log('imgLoc',imgLoc);
                    image(img, imgLoc.x,imgLoc.y);
                })
            })({x:this.x,y:this.y})
    );
    
}

//songResult.prototype.imageLoaded = function(img)
//{
//    console.log('in image loaded');
//    console.log('img',img);
//    console.log('this',this);
////                    image(img, this.x,this.y);
//                    console.log('this.y',this.songResult.y);
//}
songResult.prototype.setPosition = function(x,y){
    this.x = x;
    this.y = y;
    console.log('this.x',this.x)
    console.log('this.y',this.y)
    console.log('this',this);
}

function jsonError(err){
    console.log('error',error);
}









