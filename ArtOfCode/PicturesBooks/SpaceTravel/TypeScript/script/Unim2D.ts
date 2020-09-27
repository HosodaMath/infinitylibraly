import { Vector2 } from "./vector.js";

class Unim1D {
    private locationX: number = 0;
    private velocityX: number = 0;
    protected location : Vector2 = new Vector2(0, 0);
    protected velocity : Vector2 = new Vector2(0, 0);
    protected deltaTime: number = 0;
    private totalTime: number = 0;
    protected steps: number = 0;
    /**
     * @constructor
     * @param initX Initial value of x coordinate
     * @param initVX Initial value of velocity x
     * @param deltaTime incremental time
     * @param totalTime total time
     */
    public constructor(initX: number, initVX: number, deltaTime: number, totalTime: number) {
        this.locationX = initX;
        this.velocityX = initVX;
        this.deltaTime = deltaTime;
        this.totalTime = totalTime;
        this.steps = Math.floor(this.totalTime / this.deltaTime);
        this.location = new Vector2(this.locationX, 0);
        this.velocity = new Vector2(this.velocityX, 0);
    }

    /**
     * 
     * @param nowTime now time
     */
    protected calcX(nowTime: number): number {
        return this.location.x + this.velocity.x * nowTime;
    }

    //1次元ではベクトルは扱わない
    public dataWrite(): void {
        let nowlocX : number = 0, nowTime : number = 0;
        for(let count = 1; count <= this.steps; count++){
            nowlocX = this.calcX(nowTime);
            console.log(nowTime, nowlocX);
            nowTime = nowTime + this.deltaTime;
        }
    }
}

class Unim2D extends Unim1D {
    private locationY : number = 0;
    private velocityY : number = 0;
    /**
     * @constructor
     * @param initX Initial value of x coordinate
     * @param initY Initial value of y coordinate
     * @param initVX Initial value of velocity x
     *  @param initVY Initial value of velocity y
     * @param deltaTime incremental time
     * @param totalTime total time
     */
    public constructor(initX: number, initY : number, initVX: number, initVY : number,deltaTime: number, totalTime: number) {
        super(initX, initVX, deltaTime, totalTime);
        this.locationY = initY;
        this.velocityY = initVY;
        this.location.y = this.locationY;
        this.velocity.y = this.velocityY;
    }

    /**
     * 
     * @param nowTime now time
     */
    private calcY(nowTime : number) : number {
        return this.location.y + this.velocity.y * nowTime;
    }

    public dataWrite() : void {
        let nowlocX = 0, nowlocY = 0;
        let nowlocation : Vector2 = new Vector2(nowlocX, nowlocY);
        let nowTime = 0;
        for(let count = 0; count < this.steps; count++){
            nowlocation.x = this.calcX(nowTime);
            nowlocation.y = this.calcY(nowTime);
            console.log(nowlocation.x, nowlocation.y);
            nowTime = nowTime + this.deltaTime;
        } 
    }
}

let render = () => {
    let initX : number = 0.0 //座標xの初期値
    let initY = 0.0//座標xの初期値
    let initVX : number= 2.0 //速度xの初期値
    let initVY = 5.0//速度yの初期値
    let deltaTime : number = 0.1 //経過時間の値
    let totalTime : number = 4.0 //総合時間
    
    let unim2d = new Unim2D(initX, initY,initVX, initVY,deltaTime, totalTime);
    unim2d.dataWrite();
}

render();