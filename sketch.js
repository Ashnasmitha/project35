var hipnoticBall,database,position,hipnoticBallPosition;
function setup() {
  database=firebase.database();
  console.log(database);
  createCanvas(500,500);
  hipnoticBall = createSprite(250, 250, 10, 10);
  hipnoticBall.shapeColor="red";
  hipnoticBallPosition = database.ref('ball/position');
  hipnoticBallPosition.on("value",readPosition);
}

function draw() {
  background(255,255,255);  

  if(position!==undefined){
  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
  }
  else if (keyDown(UP_ARROW)){
    writePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    writePosition(0,1);
  }
  


  drawSprites();
}
}

function writePosition(x,y){
      database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
      })

}

function readPosition(data){
  position=data.val();
  hipnoticBall.x=position.x;
  hipnoticBall.y=position.y;
}