var gameState=0, database,playerCount,form;
var ;
var ;

function preload(){

}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);
  
  

}

function draw(){
  background("100")
  database.ref('gameState')
  this.gameState=gameState
  if (gameState===0){
    question1();
  }
}

