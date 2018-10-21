import { Vector2 } from "./Vector2.js";

export class Engine{
    constructor(canvas,options){
        this.canvas = canvas;
        this.gravity = options.gravity;
        this.friction = options.friction;
        this.iterations = options.iterations;
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
            //for(let i=0;i<this.iterations;i++){
                let order = 0;
                for(const object of this.objects.sort((a,b)=>{
                    const d1 = this.gravity.normalized;
                    const d2 = a.position.subtract(b.position).normalized

                    if(d1.add(d2).length>Math.sqrt(2)){
                        return -1;
                    }else{
                        return 1;
                    }
                
                })){
                    order ++;
                    //object.label = order++;
                    const a = order/this.objects.length*255;
                    object.color = `rgb(${a},${a},${a})`;
                    object.applyCollisions();
                }
            //}
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

