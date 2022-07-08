var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var num = 70;
var check = false;
var green, blue, red, pink;
var arrow1 = 20
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");

  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");

  
}



function setup() {
  createCanvas(600, 400);
  
  //criar um plano de fundo
  scene = createSprite(400,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(580,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.5;
  
}

function draw() {
 background(0);
  // mover o chão
    scene.velocityX = -3 
    if (scene.x < 290){
      scene.x = scene.width - 308;
    }
  
  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    arrow1 = arrow1 - 1;
    createArrow();
  }
  if(arrow1 < 0){
    check = true
  }
  
  console.log(scene.x)
  if(keyDown("o")){
    num = 10;
  }
  //mude o valor do balão aleatório para 4
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % num == 0) {
   switch(select_balloon){
    case 1:blueBalloon();
    break;
    case 2:redBalloon();
    break;
    case 3:greenBalloon();
    break;
    case 4:pinkBalloon();
    break;

  }}
  
  drawSprites();
}


// criar flechas para o arco
 function createArrow() {
  if(check == false){
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 590;
  arrow.y=bow.y;
  arrow.velocityX = -10;
  arrow.lifetime = 150;
  arrow.scale = 0.07;
  
}

}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 220;
  red.scale = 0.15;

}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20,370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 5;
  blue.scale = 0.15;
  
}

function greenBalloon() {
  green = createSprite(0,Math.round(random(20,370)), 10, 10); 
  green.addImage(green_balloonImage);
  green.velocityX = 7;
  green.scale = 0.15;
  green.lifetime = 150;
}

function pinkBalloon() {
  pink = createSprite(0,Math.round(random(20,370)), 10, 10); 
  pink.addImage(pink_balloonImage);
  pink.velocityX = 12;
  pink.scale = 0.15;
  pink.lifetime = 150;
}
