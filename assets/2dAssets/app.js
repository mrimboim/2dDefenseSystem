
console.log("brobrobro");

let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites;
var canvas = document.getElementById('matterWindow');
let engine = Engine.create();
let render = Render.create({
    element: document.body,
    canvas: canvas,
    engine: engine
});
Matter.Runner.run(engine);
Render.run(render);