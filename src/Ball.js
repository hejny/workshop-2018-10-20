export class Ball{
    constructor(engine,color,size,position,movement){
        this.engine = engine;
        this.color = color;
        this.size = size;
        this.position = position;
        this.movement = movement;

        engine.addObject(this);
    }

    render(ctx){
    
        ctx.beginPath();
        ctx.arc(
            this.position.x,
            this.position.y,
            this.size,
            0,
            Math.PI * 2,
            true,
        );

        /*for(let i=0;i<500;i++){
            (i===0?ctx.moveTo:ctx.lineTo).call(ctx,i+time/100,Math.sin(i/10)*100+250);
        }*/

        ctx.fillStyle=this.color;
        ctx.lineWidth = 5;

        ctx.stroke();
        ctx.fill();
    }

    update(delta){
        this.position.x += this.movement.x * delta;
        this.position.y += this.movement.y * delta;
        this._detectEdges();
    }

    _detectEdges(){
        if(this.position.x<0)this.movement.x*=-1;
        if(this.position.y<0)this.movement.y*=-1;
        if(this.position.x>this.engine.size.x)this.movement.x*=-1;
        if(this.position.y>this.engine.size.y)this.movement.y*=-1;
    }
}