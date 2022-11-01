function preload(){
}

function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();

tint_color=""

}

function draw(){
image(video,230,150,220,200);
fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);

fill(255,0,0);
stroke(255,0,0);
circle(570,50,80);

fill(255,0,0);
stroke(255,0,0);
circle(50,420,80);

fill(255,0,0);
stroke(255,0,0);
circle(570,420,80);

fill(0,128,0);
stroke(0,128,0);
rect(90,40,440,20);

rect(90,410,440,20);

rect(40,90,20,290);

rect(560,90,20,290);
}

function take_snapshot(){
save('student_name.png');
}
