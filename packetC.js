class packetC{
    constructor(){
        
        this.body = Bodies.rectangle(300,100,20,20,{isStatic : true, restitution: .2});
        World.add(world,this.body);
        
    }

    display(){
       // rectMode(CENTER);

       rect(this.body.position.x,this.body.position.y,20,20);
	}
}