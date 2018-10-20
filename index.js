
const scene = document.getElementById('scene');
const ctx = scene.getContext('2d');




function loop(time){

    for(let i=0;i<500;i++){
        (i===0?ctx.moveTo:ctx.lineTo).call(ctx,i,Math.sin(i/10)*time/100+250);
    }
    ctx.stroke();

    requestAnimationFrame(loop);
}



requestAnimationFrame(loop);






