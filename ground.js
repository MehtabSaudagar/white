class Ground{

    constructor(x,y,width,height){

        var ground_options={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,ground_options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        
       // console.log(this.body.angle)
    }

    display(){
        var pos=this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }
}