class DrawSVG {
    private readonly width: number = 0;
    private readonly height: number = 0;
    public constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public plotStart(): void {
        let start: string = "";
        const start1: string = "<svg xmlns='http://www.w3.org/2000/svg' version='1.1'";
        const start2: string = ` width='${this.width}' height='${this.height}'>`;
        console.log(start + start1 + start2);
    }

    public colorProp(fill: string | boolean, stroke: string | boolean = false, sw: number | boolean = false, alpha: number = 1.0): string {
        let back: string = "/>";
        let base : string;
        if ((stroke == false) && (sw == false)) {
            let fillCol : string = ` fill = '${fill}'`;
            let opacity : string = ` fill-opacity='${alpha}'`;
            base = fillCol + opacity + back;
        } else {
            let fillCol : string = ` fill = '${fill}'`;
            let strokeCol : string = ` stroke = '${stroke}'`;
            let strokeWidth : string = ` stroke-width = '${sw}'`;
            let opacity1 : string = ` fill-opacity = '${alpha}'`;
            let opacity2 : string = ` stroke-opacity = '${alpha}'`;
            base = fillCol + strokeCol + strokeWidth + opacity1 + opacity2 + back;
        }

        return base;
    }

    public rect(x : number, y : number, width : number, height : number, rx : number = 0, ry : number = 0){
        let front : string = "<rect";
        let xy : string = ` x = '${x}' y = '${y}'`;
        let wh : string = ` width =  '${width}' height = '${height}'`;
        let rxy : string = ` rx = '${rx}' ry = '${ry}'`;
        let drawRect : string = front + xy + wh + rxy;

        return drawRect;
    }

    public circle(cx : number, cy : number, r : number) : string {
        let front  : string = "<circle";
        let cxcy : string = ` cx = '${cx}' cy = '${cy}'`;
        let cr : string = ` r = '${r}'`;
        let drawCircle : string = front + cxcy + cr;

        return drawCircle;
    }

    public ellipse(cx : number, cy : number, rx : number, ry : number) : string {
        let front : string = "<ellipse";
        let cxcy : string = ` cx = '${cx}' cy = '${cy}'`;
        let rxry : string = ` rx = '${rx}' ry = '${ry}'`;

        let drawEllipse : string = front + cxcy + rxry;

        return drawEllipse;
    }

    public polygon(dataX : number[], dataY : number[]) : string {
        let n : number = dataX.length;
        let xy : string = "";
        if(dataX.length == dataY.length){
            let front : string = "<polygon";
            let point : string = " points = ";
            for(let count = 0; count < n; count++){
                xy += `${dataX[count]} ${dataY[count]},`;
            }

            let drawPolygon : string = front + point + `'${xy}'`;

            return drawPolygon;
        } else {
            const out : string = "Error: xとyの個数は同じでなければなりません。";
            
            return out;
        }

    }

    public plotEnd(): void {
        let stop: string = " ";
        stop = "</svg>";
        console.log(stop);
    }
}

const width: number = 1920, height: number = 1080;
const width2 : number = width / 2, height2 : number = height / 2;
const width4 : number = width / 4, height4 : number = height / 4;
const sketch: DrawSVG = new DrawSVG(width, height);

let backPaints = () : void => {
    console.log(
        sketch.rect(0, 0, width, height) + sketch.colorProp("#000000") 
    );    
}

class ButterFly {
    private location : [number, number] = [0, 0];
    private fill : string = "";
    private stroke : string = "";
    public constructor(locationX : number, locationY : number, fill : string, stroke : string){
        this.location = [locationX, locationY];
        this.fill = fill;
        this.stroke = stroke;
    }

    public drawButterFly(setradius : number) : void {
        const e : number = 2.718281828459045;
        const Max : number = 12 * e;
        const radius : number = setradius;
        let dataX : number[] = [];
        let dataY : number[] = [];
        let x : number = 0, y : number = 0;
        for(let theta = 0; theta < Max; theta += 0.01){
            x = Math.sin(theta) * ((e ** Math.cos(theta)) - 2 *Math.cos(4 * theta) - Math.sin(theta / 12) ** 5 ) * radius;
            y = Math.cos(theta) * ((e ** Math.cos(theta)) - 2 *Math.cos(4 * theta) - Math.sin(theta / 12) ** 5 ) * radius;
            dataX.push(this.location[0] + x);
            dataY.push(this.location[1] + y);
        }
        
        console.log(sketch.polygon(dataX, dataY) + sketch.colorProp(this.fill, this.stroke));

    }
}
let buttetFly : ButterFly[] = [];
const Max : number = 1;
let setup = () => {
    for(let count = 0; count < Max; count++){
        buttetFly[count] = new ButterFly(
            Math.random() * width, Math.random() * height , 
            "#ffff00", "#00ffff"
        );
    }
}

setup();

let draw = () => {
    sketch.plotStart();
    backPaints();
    for(let count  = 0; count < Max; count++){
        buttetFly[count].drawButterFly(Math.random() * 100);
        //console.log(buttetFly[count]);
    }
    sketch.plotEnd();
}

draw();



