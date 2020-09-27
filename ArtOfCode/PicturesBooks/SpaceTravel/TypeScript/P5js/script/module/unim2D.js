"use strict";
class Unim1D {
    /**
     * @constructor
     * @param initX Initial value of x coordinate
     * @param initVX Initial value of velocity x
     * @param deltaTime incremental time
     * @param totalTime total time
     */
    constructor(initX, initVX, deltaTime, totalTime) {
        this.locationX = 0;
        this.velocityX = 0;
        this.deltaTime = 0;
        this.totalTime = 0;
        this.steps = 0;
        this.locationX = initX;
        this.velocityX = initVX;
        this.deltaTime = deltaTime;
        this.totalTime = totalTime;
        this.steps = Math.floor(this.totalTime / this.deltaTime);
        this.partLocation = new Vector2(this.locationX, height / 2);
        this.partVelocity = new Vector2(this.velocityX,0);
    }
    /**
     *
     * @param nowTime now time
     */
    stepButterfly() {
        let nowTime  = 0;
        nowTime  = nowTime + this.deltaTime;
        this.partLocation.add(this.partVelocity) * nowTime;

        if(this.partLocation.x > width){
            this.partLocation.x = 0;
            
        }
    }

    drawButterfly(fillColor, stColor) {
        const e = 2.718281828459045;
        const Max = 12 * e;
        const radius = 20;
        let x = 0, y = 0;
        translate(this.partLocation.x, this.partLocation.y);
        rotate(-90 * PI / 180);
        beginShape();
        drawingContext.shadowBlur = 10;
        drawingContext.shadowColor = color(fillColor);
        fill(fillColor);
        stroke(stColor);
        push();
        for(let theta = 0; theta < Max; theta += 0.01 ){
            x = Math.sin(theta) * ((e ** Math.cos(theta)) - 2 * 
            Math.cos(4 * theta) - Math.sin(theta / 12) ** 5) * radius;
    
            y = Math.cos(theta) * ((e ** Math.cos(theta)) - 2 * 
            Math.cos(4 * theta) - Math.sin(theta / 12) ** 5) * radius;
            
            vertex(x, y);
        }
        endShape();
        pop();
    }
}
class Unim2D extends Unim1D {
    /**
     * @constructor
     * @param initX Initial value of x coordinate
     * @param initY Initial value of y coordinate
     * @param initVX Initial value of velocity x
     *  @param initVY Initial value of velocity y
     * @param deltaTime incremental time
     * @param totalTime total time
     */
    constructor(initX, initY, initVX, initVY, deltaTime, totalTime) {
        super(initX, initVX, deltaTime, totalTime);
        this.locationY = 0;
        this.velocityY = 0;
        this.locationY = initY;
        this.velocityY = initVY;
        this.partLocation.y = this.locationY;
        this.partVelocity.y = this.velocityY;
    }
    /**
     *
     * @param nowTime now time
     */
    stepButterfly() {
        let nowTime  = 0;
        nowTime  = nowTime + this.deltaTime;
        this.partLocation.add(this.partVelocity) * nowTime;

        if(this.partLocation.x > width){
            this.partLocation.x = 0;
            this.partVelocity.x = 0;
            this.deltaTime = 0.1;
            nowTime = 0;
        }
    }

    drawButterfly() {
        const e = 2.718281828459045;
        const Max = 12 * e;
        const radius = 20;
        let x = 0, y = 0;
        beginShape();
        
        drawingContext.shadowBlur = 10;
        drawingContext.shadowColor = color(fillColor);
        fill(fillColor);
        stroke(stColor);
        push();
        for(let theta = 0; theta < Max; theta += 0.01 ){
            x = Math.sin(theta) * ((e ** Math.cos(theta)) - 2 * 
            Math.cos(4 * theta) - Math.sin(theta / 12) ** 5) * radius;
    
            y = Math.cos(theta) * ((e ** Math.cos(theta)) - 2 * 
            Math.cos(4 * theta) - Math.sin(theta / 12) ** 5) * radius;
            
            vertex(x + this.partLocation.x, y + this.partLocation.y);
        }
        endShape();
        pop();
    }
}




