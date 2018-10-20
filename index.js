const canvas = document.getElementById('scene');
const engine = new BABYLON.Engine(canvas,true);
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4.FromHexString('#000000ff');

const VRHelper = scene.createDefaultVRExperience();

var light1 = new BABYLON.PointLight('light', new BABYLON.Vector3(1,1,1), scene);

const spheres = [];
for(let i=0;i<666;i++){
const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
sphere.position = new BABYLON.Vector3(
	(Math.random()-.5)*100,
  (Math.random()-.5)*100,
  (Math.random()-.5)*100
);
const size = Math.random()*2.5;
sphere.scaling = new BABYLON.Vector3(size,size,size);
spheres.push(sphere);
}

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});



window.addEventListener('devicemotion', function(event) {
    /*currentAcceleration = new Vector2(
        event.acceleration.x,
        event.acceleration.y
    );*/

    for(const sphere of spheres){
      sphere.position.addInPlace(new BABYLON.Vector3(
        event.acceleration.y * Math.random(),
        event.acceleration.z * Math.random(),
        event.acceleration.x * Math.random(),
      ));

      for(const axis of ['x','y','z']){
        if(sphere.position[axis]>50)sphere.position[axis]=-50;
        if(sphere.position[axis]<-50)sphere.position[axis]=50;
      }


    }

    //debug.innerHTML = event.acceleration.x + ' m/s2';
});