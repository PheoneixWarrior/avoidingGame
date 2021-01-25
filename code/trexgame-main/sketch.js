var gamestate = 1
//23 b vertical
//14 b horizontal
//8 r vertical
//11 r horizontal
var score = 0
var cps,die,hat,playerimg
function preload(){
  cps = loadSound("checkPoint.mp3")
  die = loadSound("die.mp3")
  hat = loadImage("hat.png")
  playerimg = loadImage("player.png")


}

function setup() {

  createCanvas(700,700);
player = createSprite(400, 200, 10, 10);
player.shapeColor = "violet"
player.addImage(playerimg)
player.scale = 0.25

stickGroup = new Group()

b1 = createSprite(350, 175, 50, 10);
b1.shapeColor = "black"
b1.velocityX = 0.5
b1.velocityY = -0.03
stickGroup.add(b1)

box1 = createSprite(100,100,5,50)
box1.shapeColor = "purple"
box2 = createSprite(100,100,5,25)
box2.shapeColor = "purple"
box3 = createSprite(100,100,50,5)
box3.shapeColor = "purple"
box4 = createSprite(100,100,50,5)
box4.shapeColor = "purple"


b2 = createSprite(350, 620, 92, 10);
b2.shapeColor = "black"
b2.velocityX = 0.8
stickGroup.add(b2)


b3 = createSprite(160, 450, 10, 150);
b3.shapeColor = "black"
b3.velocityX = -0.5
b3.velocityY = -1
stickGroup.add(b3)




b4 = createSprite(160, 200, 10, 87);
b4.shapeColor = "black"
b4.velocityX = 0.25
stickGroup.add(b4)



b5 = createSprite(540, 215, 10, 75);
b5.shapeColor = "red"
b5.velocityX = -0.9
stickGroup.add(b5)


b6 = createSprite(300, 400, 10, 500);
b6.shapeColor = "black"
b6.velocityX = 0.05
b6.velocityY = 0.12
b6.addImage(hat)
b6.scale = 0.25
stickGroup.add(b6)



b7 = createSprite(540, 560, 10, 100);
b7.shapeColor = "red"
b7.velocityY = -2
stickGroup.add(b7)



b8 = createSprite(500, 570, 75, 10);
b8.shapeColor = "black"
b8.velocityX = 0.5
stickGroup.add(b8)


b9 = createSprite(350, 175, 45, 10);
b9.shapeColor = "black"
b9.velocityX = 0.5
stickGroup.add(b9)


b10 = createSprite(350, 620, 60, 10);
b10.shapeColor = "black"
b10.velocityX = 0.8
stickGroup.add(b10)


b11 = createSprite(650, 450, 10, 82);
b11.shapeColor = "black"
b11.velocityX = 0.5
stickGroup.add(b11)


b12 = createSprite(160, 200, 10, 40);
b12.shapeColor = "black"
b12.velocityX = 1
stickGroup.add(b12)



b13 = createSprite(540, 62, 10, 75);
b13.shapeColor = "red"
b13.velocityX = 0.9
stickGroup.add(b13)


b14 = createSprite(700, 400, 10, 75);
b14.shapeColor = "black"
b14.velocityX = 0.5
stickGroup.add(b14)


b15 = createSprite(540, 300, 10, 20);
b15.shapeColor = "red"
b15.velocityX = 2
stickGroup.add(b15)


b16 = createSprite(500, 570, 75, 10);
b16.shapeColor = "black"
b16.velocityX = 0.5
stickGroup.add(b16)




border1 = createSprite(0, 350, 10, 700);
border1.shapeColor = "red"

border2 = createSprite(700, 350, 10, 700);
border2.shapeColor = "red"

border3 = createSprite(350, 0, 700, 10);
border3.shapeColor = "red"

border4 = createSprite(350, 700, 700, 10);
border4.shapeColor = "red"







}

function draw() {
  background("lavender"); 
  fill("black")
  textSize(30)
  text(score,350,30)
  player.bounceOff(border1)
  player.bounceOff(border2)
  player.bounceOff(border3)
  player.bounceOff(border4)

  player.collide(box1)
  player.collide(box2)
  player.collide(box3)
  player.collide(box4)

  

   b1.bounceOff(border1)
  b1.bounceOff(border2)
  b1.bounceOff(border3)
  b1.bounceOff(border4)
  b1.bounceOff(stickGroup)
  b1.bounceOff(box1)
  b1.bounceOff(box2)
  b1.bounceOff(box3)
  b1.bounceOff(box4)

  b2.bounceOff(border1)
  b2.bounceOff(border2)
  b2.bounceOff(border3)
  b2.bounceOff(border4)
  b2.bounceOff(stickGroup)
  b2.bounceOff(box1)
  b2.bounceOff(box2)
  b2.bounceOff(box3)
  b2.bounceOff(box4)
  
  b3.bounceOff(border1)
  b3.bounceOff(border2)
  b3.bounceOff(border3)
  b3.bounceOff(border4)
  b3.bounceOff(stickGroup)
  b3.bounceOff(b16)
  b3.bounceOff(box1)
  b3.bounceOff(box2)
  b3.bounceOff(box3)
  b3.bounceOff(box4)

  b4.bounceOff(border1)
  b4.bounceOff(border2)
  b4.bounceOff(border3)
  b4.bounceOff(border4)
  b4.bounceOff(stickGroup)
  b4.bounceOff(box1)
  b4.bounceOff(box2)
  b4.bounceOff(box3)
  b4.bounceOff(box4)

  b5.bounceOff(border1)
  b5.bounceOff(border2)
  b5.bounceOff(border3)
  b5.bounceOff(border4)
  b5.bounceOff(stickGroup)
  b5.bounceOff(box1)
  b5.bounceOff(box2)
  b5.bounceOff(box3)
  b5.bounceOff(box4)

  b6.bounceOff(border1)
  b6.bounceOff(border2)
  b6.bounceOff(border3)
  b6.bounceOff(border4)
  b6.bounceOff(stickGroup)
  b6.bounceOff(box1)
  b6.bounceOff(box2)
  b6.bounceOff(box3)
  b6.bounceOff(box4)
  
  b7.bounceOff(border1)
  b7.bounceOff(border2)
  b7.bounceOff(border3)
  b7.bounceOff(border4)
  b7.bounceOff(stickGroup)
  b7.bounceOff(box1)
  b7.bounceOff(box2)
  b7.bounceOff(box3)
  b7.bounceOff(box4)

  b8.bounceOff(border1)
  b8.bounceOff(border2)
  b8.bounceOff(border3)
  b8.bounceOff(border4)
  b8.bounceOff(stickGroup)
  b8.bounceOff(box1)
  b8.bounceOff(box2)
  b8.bounceOff(box3)
  b8.bounceOff(box4)

  b9.bounceOff(border1)
  b9.bounceOff(border2)
  b9.bounceOff(border3)
  b9.bounceOff(border4)
  b9.bounceOff(stickGroup)
  b9.bounceOff(box1)
  b9.bounceOff(box2)
  b9.bounceOff(box3)
  b9.bounceOff(box4)

  b10.bounceOff(border1)
  b10.bounceOff(border2)
  b10.bounceOff(border3)
  b10.bounceOff(border4)
  b10.bounceOff(stickGroup)
  b10.bounceOff(box1)
  b10.bounceOff(box2)
  b10.bounceOff(box3)
  b10.bounceOff(box4)
  
  b11.bounceOff(border1)
  b11.bounceOff(border2)
  b11.bounceOff(border3)
  b11.bounceOff(border4)
  b11.bounceOff(stickGroup)
  b11.bounceOff(box1)
  b11.bounceOff(box2)
  b11.bounceOff(box3)
  b11.bounceOff(box4)

  b12.bounceOff(border1)
  b12.bounceOff(border2)
  b12.bounceOff(border3)
  b12.bounceOff(border4)
  b12.bounceOff(stickGroup)
  b12.bounceOff(box1)
  b12.bounceOff(box2)
  b12.bounceOff(box3)
  b12.bounceOff(box4)

  b13.bounceOff(border1)
  b13.bounceOff(border2)
  b13.bounceOff(border3)
  b13.bounceOff(border4)
  b13.bounceOff(stickGroup)
  b13.bounceOff(box1)
  b13.bounceOff(box2)
  b13.bounceOff(box3)
  b13.bounceOff(box4)

  b14.bounceOff(border1)
  b14.bounceOff(border2)
  b14.bounceOff(border3)
  b14.bounceOff(border4)
  b14.bounceOff(stickGroup)
  b14.bounceOff(box1)
  b14.bounceOff(box2)
  b14.bounceOff(box3)
  b14.bounceOff(box4)
  

  
  b16.bounceOff(border1)
  b16.bounceOff(border2)
  b16.bounceOff(border3)
  b16.bounceOff(border4)
  b16.bounceOff(stickGroup)
  b16.bounceOff(box1)
  b16.bounceOff(box2)
  b16.bounceOff(box3)
  b16.bounceOff(box4)


  b15.bounceOff(border1)
  b15.bounceOff(border2)
  b15.bounceOff(border3)
  b15.bounceOff(border4)
  b5.bounceOff(stickGroup)
  b15.bounceOff(box1)
  b15.bounceOff(box2)
  b15.bounceOff(box3)
  b15.bounceOff(box4)

if(gamestate ===1){
  score = Math.round(frameCount%6000)
  if(score >6000){
gamestate = 3
  }
  if(score%100 ===0){
    cps.play()
  }
  if(keyDown(UP_ARROW)){
    player.y = player.y-5
  }
  if(keyDown(DOWN_ARROW)){
    player.y = player.y+5
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+5
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-5
  }

  player.collide(b1)
  player.collide(b2)
  player.collide(b3)
  player.collide(b4)
  player.collide(b6)
  player.collide(b8)
  player.collide(b9)
  player.collide(b10)
  player.collide(b11)
  player.collide(b12)
  player.collide(b14)
  player.collide(b16)



  if(player.isTouching(b5)||player.isTouching(b15)||player.isTouching(b13)||player.isTouching(b7)||player.isTouching(border1)||player.isTouching(border2)||player.isTouching(border3)||player.isTouching(border4)){
  player.destroy();
  die.play();
  b1.velocityX = 0
  b2.velocityX = 0
  b3.velocityX = 0
  b4.velocityX = 0
  b5.velocityX = 0
  b6.velocityX = 0
  b7.velocityX = 0
  b8.velocityX = 0
  b9.velocityX = 0
  b10.velocityX = 0
  b11.velocityX = 0
  b12.velocityX = 0
  b13.velocityX = 0
  b14.velocityX = 0
  b15.velocityX = 0
  b16.velocityX = 0
  gamestate = 2
  }
}
  if(gamestate ===2){
  fill("green")
  textSize(30)
  text("GAME OVER", 350, 350)
  }
  if(gamestate ===3){
    fill("blue")
    textSize(30)
    textFont("Georgia")
    text("You Won!", 350, 350)
    }





  

  drawSprites();
 
}