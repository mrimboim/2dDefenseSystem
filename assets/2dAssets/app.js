
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
    engine: engine,
    options: {
        wireframes: false
    }
});

let ground = Matter.Bodies.rectangle(400,600,810, 60,{
    isStatic: true,
    render: {
        wireframes: false,
        fillStyle: "black"
    }    
});


let boxA = Matter.Bodies.rectangle(400,200,80,80);

let paddle = Matter.Bodies.trapezoid(400, 200, 20, 80, 0.33, {
    label: 'paddleLeft',
    angle: 1.57,
    chamfer: {},
    render: {
        fillStyle: 'yellow'
    }
});

let paddleHinge = Matter.Bodies.circle(400, 200, 5, {
    isStatic: true,
    render: {
        visible: true,
        fillStyle: "green"
    }
});

paddleLeftCons = Matter.Constraint.create({
    bodyA: paddle,
    pointA: { x: 0, y: 0 },
    bodyB: paddleHinge,
    length: 0,
    stiffness: 0
    
});


let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        render : {visible:false}
    }
});
render.mouse = mouse;

Matter.World.add(engine.world,[ground,paddle, paddleLeftCons, paddleHinge, boxA, mouseConstraint]);
Matter.Body.rotate(paddle, -0.57, { x: 308, y: 660 });
Matter.Runner.run(engine);
Render.run(render);
