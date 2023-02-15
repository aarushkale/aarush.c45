let ground;
let lander;
var lander_img;
var bg_img;
var thrust, crash, land;
var rcs_left;
var rcs_right;
var obs;

var vx = 0;
var g = 0.05;
var vy = 0;
var fuel=100;
var timer;
var obstacle_img;
var lz_img;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  thrust = loadAnimation("b_thrust_1.png", "b_thrust_2.png", "b_thrust_3..png");
  crash = loadAnimation("crash1.png", "crash2.png", "crash3.png");
  land = loadAnimation("landing1.png", "landing2.png", "landing_3.png");
  rcs_left = loadAnimation("left_thruster_1.png", "left_thruster_2.png");
  rcs_right = loadAnimation("right_thruster_1.png", "right_thruster_2.png");
  normal = loadAnimation("normal.png");
  obstacle_img = loadImage("obstacles.png");
  lz_img = loadImage("lz.png");

  thrust.playing = true;
  thrust.looping = false;
  land.looping = false;
  crash.looping = false;
  rcs_left.looping = false;
  rcs_right.looping = false;
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  timer = 1500;

  thrust.frameDelay = 5;
  land.frameDelay = 5;
  crash.frameDelay = 5;
  rcs_left.frameDelay = 5;

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200);


  lander.addAnimation('thrusting', thrust);
  lander.addAnimation('crashing', crash);
  lander.addAnimation('landing', land);
  lander.addAnimation('left', rcs_left);
  lander.addAnimation('normal', normal);
  lander.addAnimation('right', rcs_right);

  obs = createSprite(320, 530, 50, 100);
  obs.addImage(obstacle_img);
  obs.scale = 0.5;
  obs.setCollider("rectangle",0,100,300,300);
  
  ground = createSprite(500,690,1000,20);
  lz = createSprite(880,610,50,30);
  lz.addImage(lz_img);
  lz.scale = 0.3;

  lz.setCollider("rectangle",0,180,400,100);
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Horizontal Velocity: "+round(vx,2),800,50);
  text("Fuel: "+fuel,800,25);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;
  drawSprites();
}


