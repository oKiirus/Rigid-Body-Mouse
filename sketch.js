var start = [500, 500]
var done = false
var points = [[0], [0, 0], [100, 0], [200, 0], [300, 0], [400, 0], [400, 0], [400, 0]]

function setup() {
  
  createCanvas(1000, 1000);
}

function draw() {
  
  dx = mouseX - 500
  dy = mouseY - 500
  angle = atan2(dy, dx)
  
  

  xVelocity = 1 * cos(angle)
  yVelocity = 1 * sin(angle)
  background(38);
  noStroke()
  fill('#72DB77')
  circle(mouseX, mouseY, 50)
  fill('#225B24')
  circle(mouseX, mouseY, 40)
  fill('#48C4FF')
  
  
  fill(0)
  
  if(dist(mouseX, mouseY, 500, 500) < 700){
    done = false
    while(done === false){
      
      for(let i = 1; i < points.length - 1; i++){
        points[0] = [mouseX, mouseY]
        dx = points[i][0] - points[i - 1][0]
        dy = points[i][1] - points[i - 1][1]
        
       angle = atan2(dy, dx)
        xVelocity = 1 * cos(angle)
        yVelocity = 1 * sin(angle)
        
        points[i][0] = points[i - 1][0] - (xVelocity * -1) * 100
        points[i][1] = points[i - 1][1] - (yVelocity * -1) * 100
      
        
      }
     for(let i = points.length - 3; i >= 1; i--){
        points[0] = [mouseX, mouseY]
        dx = points[i][0] - points[i + 1][0]
        dy = points[i][1] - points[i + 1][1]
        
       angle = atan2(dy, dx)
        xVelocity = 1 * cos(angle)
        yVelocity = 1 * sin(angle)
        
        points[i][0] = points[i + 1][0] - (xVelocity * -1) * 100
        points[i][1] = points[i + 1][1] - (yVelocity * -1) * 100
        
        
      }
      done = true
          }
    
    
    
  } 
  
  for(let i = 0; i < points.length - 2; i++){
    
    stroke(0)
    strokeWeight(8)
    line(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1])
  }
  for(let i = 1; i < points.length - 1; i++){
  circle(points[i][0], points[i][1], 20)
  }
  
}