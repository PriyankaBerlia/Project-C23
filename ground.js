class ground{
    constructor(){
        var g_options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(width/2,height-20,width,20,g_options);
        World.add(world,this.body);
        
    }

    display(){

        ground1 = createSprite(this.body.position.x,this.body.position.y,width,20);
        
    }       
}