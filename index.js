const canvas = document.getElementById('scene');
const engine = new BABYLON.Engine(canvas,true);
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4.FromHexString('#000000ff');

const VRHelper = scene.createDefaultVRExperience();

var light1 = new BABYLON.PointLight('light', new BABYLON.Vector3(1,1,1), scene);

for(let i=0;i<666;i++){
const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
sphere.position = new BABYLON.Vector3(
	(Math.random()-.5)*100,
  (Math.random()-.5)*100,
  (Math.random()-.5)*100
);
const size = Math.random()*2.5;
sphere.scaling = new BABYLON.Vector3(size,size,size);
}

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});