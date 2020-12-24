class Polygon{
    constructor(){
        var options = {
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0,
            'isStatic' : true
        }
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(70,140,20,options);
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y ,40,40);
        pop();
    }
}