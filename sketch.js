var meteoro

function preload(){
  nave1Image=loadImage("nave1.png");
  nave2Image=loadImage("nave2.png");
  nave3Image=loadImage("nave3.png");
  galaxiaImage=loadImage("galaxia.jpg")
  meteoroImage=loadImage("meteoro.png")
}

function setup() {
  createCanvas(800,400);
  meteoro=createSprite(20,200,20,20)
}

function draw() {
  background("blue"); 
  meteoro.y=World.mouseY
  //criando naves continuamente
  var naves=Math.round(random(1,3));
  if(World.frameCount%100==0){

    if(naves==1){
      nave1()
    }else if(naves==2){
      nave2()
    }
    else{
      nave3()
    }
  }
  drawSprites();
}

function nave1(){
  var A = createSprite(700,Math.round(random(20, 370)), 10, 10); 
  A.addImage(nave1Image);
  A.velocityX = -15;
  A.lifetime = 270;
  A.scale = 0.2; 
}

function nave2(){
  var B = createSprite(700,Math.round(random(20, 370)), 10, 10); 
  B.addImage(nave2Image);
  B.velocityX = -12;
  B.lifetime = 270;
  B.scale = 0.3; 
}

function nave3(){
  var C = createSprite(700,Math.round(random(20, 370)), 10, 10); 
  C.addImage(nave3Image);
  C.velocityX = -12;
  C.lifetime = 270;
  C.scale = 0.2; 
}