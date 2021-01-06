const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var particles=[];
var divisions=[];
var plinkos=[];

var divisionHeight=300;

var division;
var plinko;

function setup() {
  createCanvas(820,800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(400,790,800,10);

  
  
  //division=new Division(10,700,10,100);

  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

 
  

  for(var k=0; k<=this.width; k=k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    
}

for(var k=0;k<20;k++){
  divisions[k].display();
}

/*for(var j=40;j<=10;j+=50){
  plinkos.push(new Plinko(j,75))
}*/
  

}