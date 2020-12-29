class helicopterC{
    constructor(){
        
        this.body = Bodies.rectangle(300,100,20,20,{isStatic : true});
        World.add(world,this.body);
        
    }

    display(){

        helicopter = createSprite(this.body.position.x,this.body.position.y,20,20);
        helicopter.addImage(helicopter_img);
        helicopter.scale = 0.5;
    }       
}