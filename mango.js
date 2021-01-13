class Mango{
    constructor(x, y, radius) {
        var options = {
            'isStatic': true,
            'restitution':0,
            'friction':1
            
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 30,50);
      }
    }