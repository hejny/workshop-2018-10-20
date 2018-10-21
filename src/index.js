import { Engine } from './Engine.js';
import { Ball } from './Ball.js';
import { Vector2 } from './Vector2.js';

//https://coolors.co/
const COLORS = 'edae49-d1495b-00798c-30638e-003d5b'.split('-').map((color)=>`#${color}`);

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
            iterations: 10
        }
    );

    const balls = [];
    for(let i=0;i<10;i++){
        balls.push(new Ball(
            engine,
            COLORS[Math.floor(Math.random()*COLORS.length)],
            Math.random()*10+10,
            new Vector2(Math.random()*engine.size.x,Math.random()*engine.size.y),
            new Vector2((Math.random()-.5)*100,(Math.random()-.5)*100),
        ));
    }
    engine.run();

    let gravityByOrientation = Vector2.Zero();
    /*window.addEventListener('deviceorientation', (event)=>{
        gravityByOrientation = new Vector2(
            Math.sin(event.gamma / 180 *Math.PI)*1000,
            Math.sin(event.beta / 180 *Math.PI)*1000,

        );
        updateGravity();
    });*/

    let gravityByMotion = Vector2.Zero();
    window.addEventListener('devicemotion', (event)=>{
        gravityByMotion = new Vector2(
            event.accelerationIncludingGravity.x*-1000,
            event.accelerationIncludingGravity.y*1000,

        );
        updateGravity();
    });
    
    function updateGravity(){
        engine.gravity = Vector2.Zero().addInPlace(gravityByOrientation).addInPlace(gravityByMotion);
    }
});