let unim1d, unim2d;
let star;
const StarMax = 40;
const Origin = 0;
let width2, height2;
let width4, height4;

function setup(){
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    star = [];
    setupStar();
    setupUnim();
}

function draw(){
    let backColor = color(255, 255, 255);
    backPaints(backColor);
    createSpace();
    render();
}

let backPaints = (backColor) => {
    background(backColor);
}

let setupUnim = () => {
    let initX = 0.0; //座標xの初期値
    let initY = 0.0; //座標xの初期値
    let initVX = 2.0; //速度xの初期値
    let initVY = 5.0; //速度yの初期値
    let deltaTime = 0.05; //経過時間の値
    let totalTime = 4.0; //総合時間
    unim1d = new Unim1D(initX, initVX, deltaTime, totalTime);
    unim2d = new Unim2D(initX, initY, initVX, initVY, deltaTime, totalTime);
}

let render = () => {
    renderStar();
    unim1d.stepButterfly();
    unim1d.drawButterfly(color(255, 255, 100, 90), color(255, 100, 100));
    //unim2d.step();
    //unim2d.particleDraw();
}

let createSpace = () => {
    push();
    fill(color(0, 0, 0));
    beginShape();
    vertex(Origin, height);
    vertex(Origin, Origin);
    vertex(width, Origin);
    vertex(width, height);
    endShape();
    pop();
}

let setupStar = () => {
    let locationData = [], velocityData = [];
    let radiusData = [], colorData = [];
    let tmpColor = [
        color(255, 100, 100), color(255, 255, 100), 
        color(100, 255,100),color(100, 255, 255)
    ];
    for(let count = 0; count < StarMax; count++){
        locationData[count] = new Vector2(random(0, width), random(0, height));
        velocityData[count] = new Vector2(1, 0);
        radiusData[count] = random(2, 30);
        let tmp = Math.floor(random(0, tmpColor.length));
        colorData[count] = tmpColor[tmp];
    }

    for(let count = 0; count <StarMax; count++){
        star[count] = new createStar(
            locationData[count], velocityData[count],
            radiusData[count], colorData[count]
        );
    }
}

let renderStar = () => {
    for(let count = 0; count < StarMax;  count++){
        star[count].stepStar();
        star[count].drawStar();
    }
}


class createStar{
    constructor(position, speed, radius, col){
        this.loc = position;
        this.vel = speed;
        this.radius = radius;
        this.col = col;
    }

    stepStar(){
            this.loc.sub(this.vel);

            if(this.loc.x < 0){
                this.loc.x = width;
                this.loc.y = random(0, height);
            }
    }

    drawStar(){
        let size = 20;
        push();
        drawingContext.shadowBlur = size;
        drawingContext.shadowColor = this.col;
        stroke(this.col);
        fill(this.col);
        circle(this.loc.x, this.loc.y, this.radius);
        console.log(this.loc.x, this.loc.y);
        pop();
    }
    
}