import { Ball } from "./Ball.js";
import { Vector2 } from "./Vector2.js";

export class Engine{
    constructor(canvas){
        this.canvas = canvas;
        this.objects = [];
    }

    run(){
        const ctx = this.canvas.getContext('2d');

        let timeLast = null;
        const loop = (time)=>{
            ctx.clearRect(0,0,scene.width,scene.height);

            for(const object of this.objects){
                if(timeLast){
                    object.update((time-timeLast)/1000);
                }
                object.render(ctx);
            }

            timeLast = time;
            requestAnimationFrame(loop);
        }

        requestAnimationFrame(loop);
    }

    addObject(object){
        this.objects.push(object);
    }
}

