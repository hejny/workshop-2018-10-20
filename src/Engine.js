import { Vector2 } from "./Vector2.js";

export class Engine{
    constructor(canvas,gravity,friction){
        this.canvas = canvas;
        this.gravity = gravity;
        this.friction = friction;
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

    get size(){
        return(new Vector2(
            scene.width,scene.height
        ));
    }
}

