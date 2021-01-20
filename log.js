class Log{

    constructor(x,y,height,angle){

        var options={
            restitution:0.8,
            //density:1.5,
           friction:1
        }

        this.body=Bodies.rectangle(x,y,20,height,options);
        this.width=20;
        this.height=height;
        World.add(world,this.body);
        console.log(this.body.angle)
        Matter.Body.setAngle(this.body,angle)
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        angleMode(RADIANS)
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("brown")
        fill("white")
        rect(0,0,this.width,this.height);

        pop();
    }
}