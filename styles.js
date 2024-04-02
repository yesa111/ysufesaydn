body {
  font-family: 'Roboto Mono', monospace;
  margin: 0;
  padding: 0;
  background-color: #000000; 
  color: #FF0000; 
}

.container {
  width: 80%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 5px;
}

h1, h2, h3, h4, h5, h6 {
  color: #0000CD;
}

a {
  color: #FF0000; 
  text-decoration: none;
}

a:hover {
  color: #8B0000; 
}

header {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  text-align: center;
}

footer {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
let angle = 0;
let w = 24;
let ma;
let maxD;

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(0);
  ortho(-400, 400, 400, -400, 0, 1000);
  rotateX(-QUARTER_PI);
  rotateY(ma);
  
  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 300));
      translate(x - width / 2, 0, z - height / 2);
      box(w - 2, h, w - 2);
      pop();
    }
  }
  
  angle -= 0.1;
 