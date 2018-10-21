import { Vector2 } from "./Vector2.js";

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
        //ctx.lineWidth = 5;

        //ctx.stroke();
        ctx.fill();
    }

    update(delta){

        this.position.addInPlace(this.movement.scale(delta));
        this.movement.addInPlace(this.engine.gravity.scale(delta))
        this.movement.scaleInPlace(Math.pow(this.engine.friction,delta));

    }

    applyCollisions(){

        for(const object of this.engine.objects){
            if(this.collideWith(object)){
                this.position = object.position.add(
                    this.position.subtract(object.position).lengthInPlace(this.size+object.size)
                )

            }
        }

        if(this.position.x<this.size)this.position.x = this.size;
        if(this.position.y<this.size)this.position.y = this.size;
        if(this.position.x>this.engine.size.x-this.size)this.position.x = this.engine.size.x-this.size;
        if(this.position.y>this.engine.size.y-this.size)this.position.y = this.engine.size.y-this.size;


    }

    collideWith(ball){
        return Vector2.distance(this.position,ball.position)<this.size+ball.size;
    }
}