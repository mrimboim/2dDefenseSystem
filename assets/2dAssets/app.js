
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

let ground = Matter.Bodies.rectangle(400,600,810, 60,{isStatic: true});
let boxA = Matter.Bodies.rectangle(400,200,80,80);

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        render : {visible:false}
    }
});
render.mouse = mouse;

Matter.World.add(engine.world,[ground, boxA, mouseConstraint]);
Matter.Runner.run(engine);
Render.run(render);