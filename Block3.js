class Block3{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':1.0,
          'density': 0.8
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      fill("green")
      strokeWeight(2);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
}