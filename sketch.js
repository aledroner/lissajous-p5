const cols = 6;
const rows = 5;
const vel = 2;

let space, gutter, radio, angle, figures;

function setup() {
  angle = QUARTER_PI;
  frameRate(30);
  windowResized();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  space = windowWidth / cols;
  gutter = 20;
  radio = (space - gutter * 2) / 2;
  createFigures();
}

function draw() {
  background(22);
  
  for (let i in figures) {
    for (let j in figures[i]) {
      if (figures[i][j] instanceof Circle) {
        figures[i][j].show(angle);
      } else {
        figures[i][j].show(figures[0][j-1].points, figures[i][0].points);
      }
    }
  }

  angle += 0.01;
  if (angle >= PI + QUARTER_PI) {
    angle = QUARTER_PI;    
    createFigures();
  }
}

function createFigures() {
  figures = [];
  for (let i = 0; i < rows; i++) {

    figures.push([]);
    for (let j = 0; j < cols; j++) {

      let x = space / 2 + space * j;
      let y = space / 2 + space * i;

      if (i == 0 && j > 0)
        figures[i].push(new Circle(x, y, radio, vel * (i + j), 0));
      if (i > 0 && !j)
        figures[i].push(new Circle(x, y, radio, vel * (i + j), 1));
      else if (i)
        figures[i].push(new Curve(i, j));
    }
  }
}