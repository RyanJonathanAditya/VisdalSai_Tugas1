let j;
function setup() {
  // put setup code here
  createCanvas(400,200);

  j = 0;
}

function draw() {
  // put drawing code here
  background(200);
  
  line(200,0,200,200);
  fill(102,178,255);
  beginShape();
  vertex(50,100);
  vertex(150,100);
  vertex(125,125);
  vertex(75,125);
  endShape(CLOSE);
  line(100,50,100,100);
  fill(255,0,0);
  rect(100,50,30,8);
  fill(255,255,255);
  rect(100,58,30,8);
  fill(102,178,255);

  var y = 100 + 50*Math.sin(PI*j/60)
  j += 1
  beginShape();
  vertex(250,y);
  vertex(350,y);
  var y = 125 + 50*Math.sin(PI*j/60)
  j += 1
  vertex(325,y);
  vertex(275,y);
  endShape(CLOSE);
  var y = 50 + 50*Math.sin(PI*j/60)
  j += 1
  line(300,y,300,50);
  fill(255,0,0);
  var y = 50 + 50*Math.sin(PI*j/60)
  j += 1
  rect(300,y,30,8);
  fill(255,255,255);
  var y = 58 +50*Math.sin(PI*j/60)
  j += 1
  rect(300,y,30,8);
  fill(102,178,255);
  
}
