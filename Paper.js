class Paper {

    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:0.5,
            density:1
        }
        this.r=r
        this.body=Matter.Bodies.circle(x,y,r,options)
        World.add(world, this.body);
    }
    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(0,0,this.r, this.r);
        pop();
      }
}