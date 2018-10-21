import { Engine } from './Engine.js';
import { Ball } from './Ball.js';
import { Vector2 } from './Vector2.js';


window.addEventListener('load', () => {
    
    const scene = document.getElementById('scene');
    const { width, height } = scene.getBoundingClientRect();
    scene.width = width;
    scene.height = height;
    const engine = new Engine(
        scene,
        {
            gravity: new Vector2(0,100),
            friction: 0.2,
            iterations: 5
        }
    );

    const balls = [];
    for(let i=0;i<10;i++){
        balls.push(new Ball(
            engine,
            '#906090',
            Math.random()*10+10,
            new Vector2(Math.random()*engine.size.x,Math.random()*engine.size.y),
            new Vector2((Math.random()-.5)*100,(Math.random()-.5)*100),
        ));
    }
    engine.run();

    /*let currentAcceleration = new Vector2(0,0);
    engine.enhance((ctx)=>{
        if(currentAcceleration){
            ctx.beginPath();
            ctx.arc(
                currentAcceleration.x*30 + 250,
                currentAcceleration.y*30 + 250,
                10,
                0,
                Math.PI * 2,
                true,
            );
            ctx.fillStyle='#ff0000';
            ctx.fill();
        }
    });*/

    //const debug = document.getElementById('debug');
    window.addEventListener('deviceorientation', (event)=>{


        engine.gravity = new Vector2(
            Math.sin(event.gamma / 180 *Math.PI)*1000,
            Math.sin(event.beta / 180 *Math.PI)*1000,

        );

        /*
        for(const ball of balls){
            ball.movement.addInPlace(new Vector2(
                Math.sin(event.gamma / 180 *Math.PI)*10,
                Math.sin(event.beta / 180 *Math.PI)*10,

            ));
        }

        //console.log(event);
        
        /*currentAcceleration = new Vector2(
            event.acceleration.x,
            event.acceleration.y
        );

        for(const ball of balls){
            ball.movement.addInPlace(currentAcceleration);
        }*/

    });

});