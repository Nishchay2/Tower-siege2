class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0.5,
          'density':0.5
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);

      
    }
    display(){
      if(this.body.speed<6){
      var pos =this.body.position;
      var angle = this.body.angle;
      console.log(this.body.speed)


      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body)
      }
    }
  };