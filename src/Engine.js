import { Vector2 } from "./Vector2.js";

export class Engine{
    constructor(canvas,gravity,friction){
        this.canvas = canvas;
        this.gravity = gravity;
        this.friction = friction;
        this.objects = [];
        this.enhancers = [];
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

            for(const enhancer of this.enhancers){
                enhancer(ctx);
            }

            timeLast = time;
            requestAnimationFrame(loop);
        }

        requestAnimationFrame(loop);
    }

    addObject(object){
        this.objects.push(object);
    }

    enhance(enhancer){
        this.enhancers.push(enhancer);
    }

    get size(){
        return(new Vector2(
            scene.width,scene.height
        ));
    }
}

