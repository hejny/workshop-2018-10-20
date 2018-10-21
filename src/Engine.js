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
        
        let timeLast = null;
        const updateLoop = (time)=>{
            for(const object of this.objects){
                if(timeLast){
                    object.update((time-timeLast)/1000);
                }
            }
            for(let i=0;i<3;i++){
                for(const object of this.objects){
                    object.applyCollisions();
                }
            }
            timeLast = time;
            requestAnimationFrame(updateLoop);
        }
        updateLoop();

        const ctx = this.canvas.getContext('2d');
        const renderLoop = ()=>{
            ctx.clearRect(0,0,scene.width,scene.height);
            for(const object of this.objects){
                object.render(ctx);
            }
            for(const enhancer of this.enhancers){
                enhancer(ctx);
            }
            requestAnimationFrame(renderLoop);
        }
        renderLoop();
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

