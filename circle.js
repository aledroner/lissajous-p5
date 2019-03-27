class Circle {
  constructor(x, y, r, v, type) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.v = v;
    this.type = type
    this.points = [];
    this.xPoint = 0;
    this.yPoint = 0;
  }

  show(angle) {
    circle(this.x, this.y, this.r);
    
    this.xPoint = this.x + this.r * cos(angle * this.v);
    this.yPoint = this.y - this.r * sin(angle * this.v);

    fill(255, 100, 50);
    circle(this.xPoint, this.yPoint, 3);
    noFill();

    stroke(40);
    if (this.type === 0)
      this.setLine(this.xPoint, 0, this.xPoint, windowHeight, this.xPoint);
    else {
      this.setLine(0, this.yPoint, windowWidth, this.yPoint, this.yPoint);
    }
    stroke(75);
  }
  
  setLine(x0, y0, x1, y1, point) {
    line(x0, y0, x1, y1);
    this.points.push(point);
  }
}