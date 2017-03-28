var newHeight = 100;
var newWidth  = 100;
var jahbariRed = 50;
var jahbariGreen = 255;
var jahbariBlue = 50;


function setup(){
   createCanvas(600,400);
   background(0,0,0);
}

function draw(){
  
  //background(226, 255, 232);
   
   if(mouseIsPressed){
  
   noStroke();
   fill(jahbariRed,jahbariBlue,jahbariGreen);
   ellipse(mouseX,mouseY,newWidth,newHeight);
  
 jahbariBlue = random(0,255);
 jahbariBlue = random(0,255);
  jahbariRed = random(0,255);
 }
 

}