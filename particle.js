class Particle{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            'desnsity':0.5,
            'friction':1
        }

        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.color=color(random(0,255),random(0,255),random(0,255));


        World.add(world, this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0,0,this.radius);
        pop();
    }
}