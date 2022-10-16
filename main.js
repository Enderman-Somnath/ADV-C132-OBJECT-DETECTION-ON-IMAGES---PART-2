console.log("be")
img = ""
Status = "";
function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}
function modelLoaded() {
    console.log("Model has Loaded!")
    Status = true;
    objectDetector.detect(img, gotResult);
  }
  	
function gotResult(error, results) 
{
  if (error) {
    console.log(error);
  }
  console.log(results);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Dog", 40, 60);
    noFill();
    stroke("red");
    rect(30, 40, 420, 350);

    fill("red");
    text("Cat", 300, 120)
    noFill();
    stroke("red")
    rect(250, 100, 370, 300)
}
console.log("Js Loaded!");