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
        new Vector2(0,0),
        0.5
    );

    const balls = [];
    for(let i=0;i<100;i++){
        balls.push(new Ball(
            engine,
            '#906090',
            Math.random()*10+10,
            new Vector2(Math.random()*engine.size.x,Math.random()*engine.size.y),
            new Vector2((Math.random()-.5)*100,(Math.random()-.5)*100),
        ));
    }
    engine.run();

    let currentAcceleration = new Vector2(0,0);
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
    });

    const debug = document.getElementById('debug');
    window.addEventListener('devicemotion', function(event) {
        currentAcceleration = new Vector2(
            event.acceleration.x,
            event.acceleration.y
        );

        for(const ball of balls){
            ball.movement.addInPlace(currentAcceleration);
        }

        //debug.innerHTML = event.acceleration.x + ' m/s2';
    });

});