import { Ball } from "./Ball.js";
import { Vector2 } from "./Vector2.js";

export class Engine{
    constructor(canvas){
        this.canvas = canvas;
    }

    run(){
        const ctx = this.canvas.getContext('2d');

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
    }
}

