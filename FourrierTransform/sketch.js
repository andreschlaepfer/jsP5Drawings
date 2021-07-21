let time = 0;
let graph = [];
let slider;

function setup() {
  createCanvas(1920, 400);
  slider = createSlider(1, 100, 1);
}

function draw() {
  background(0);
  translate(200,200);

  let x = 0;
  let y = 0;
  for (let i = 0; i < slider.value(); i++){
    
    let prevx = x;
    let prevy = y;
    let n = i * 2 + 1
    let radius = 100 * (4 / (n * PI));

    x += radius  * cos( n * time);
    y += radius  * sin(n * time);
    
  
  
    
    stroke(255)
    noFill()
    ellipse(prevx,prevy,radius *2);


    fill(255);
    line(prevx,prevy, x, y);
    ellipse(x,y,1)

    
    
    // translate(200, 0);
    // line(x - 200, y, 0, graph[0])
  }
  graph.unshift(y);
  translate(200, 0);
  line(x - 200, y, 0, graph[0])
  beginShape();
  noFill();
  
  for (let i = 0; i < graph.length; i++){
    vertex(i,graph[i]);
  }
  endShape();

  time += 0.03;

  if (graph.lenght  > 600){
    graph.pop()
  }
}
