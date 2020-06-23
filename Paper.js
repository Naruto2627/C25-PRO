class Paper{
    constructor(){
        var options ={
            //isStatic :false,
            restitution :0,
            friction :0,
            density :1.2
        }
        this.body = Bodies.circle(250,540,20,options);
        this.width =33;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
    }
}