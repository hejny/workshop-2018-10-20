export class Ball{
    constructor(color,size,position,movement){
        this.color = color;
        this.size = size;
        this.position = position;
        this.movement = movement;
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
    }
}