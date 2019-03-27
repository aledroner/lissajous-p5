class Curve {
  show(xPoints, yPoints) {    
    
    fill(0, 200, 255);
    circle(xPoints[xPoints.length-1], yPoints[yPoints.length-1], 3);
    noFill();
    
    stroke(150);    
    beginShape();
    for (let p in xPoints)
      curveVertex(xPoints[p], yPoints[p]);
    endShape();
    stroke(75);
  }  
}