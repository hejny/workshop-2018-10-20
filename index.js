

class Vector2{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}


class Ball{
    constructor(color,position){
        this.color = color;
        this.position = position;
    }

    render(ctx){
    
        ctx.beginPath();
        ctx.arc(
            this.position.x,
            this.position.y,
            60,
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
        this.position.y -= delta*100;
    }
}


//-----------------------------------------------------


const scene = document.getElementById('scene');
const ctx = scene.getContext('2d');

const ball = new Ball(
    '#906090',
    new Vector2(100,100)
);

let timeLast = null;
function loop(time){
    ctx.clearRect(0,0,scene.width,scene.height);
    if(timeLast){
        ball.update((timeLast-time)/1000);
    }
    timeLast = time;
    ball.render(ctx);
    requestAnimationFrame(loop);
}



requestAnimationFrame(loop);





