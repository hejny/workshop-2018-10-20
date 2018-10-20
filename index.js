
const scene = document.getElementById('scene');
const ctx = scene.getContext('2d');




function loop(time){

    ctx.clearRect(0,0,scene.width,scene.height);
    ctx.beginPath();

    ctx.arc(
        200,
        200+time/100,
        60,
        0,
        Math.PI * 2,
        true,
    );



    /*for(let i=0;i<500;i++){
        (i===0?ctx.moveTo:ctx.lineTo).call(ctx,i+time/100,Math.sin(i/10)*100+250);
    }*/

    ctx.fillStyle='#906090';
    ctx.lineWidth = 5;

    ctx.stroke();
    ctx.fill();

    requestAnimationFrame(loop);
}



requestAnimationFrame(loop);






