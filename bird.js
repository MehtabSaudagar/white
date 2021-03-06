class Bird{

    constructor(x,y){

        var options={
            restitution:0.8,
            density:1.5,
            friction:0.4
        }

        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
        console.log(this.body.angle)
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        angleMode(RADIANS)
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("red")
        fill("yellow")
        rect(0,0,this.width,this.height);

        pop();
    }
}