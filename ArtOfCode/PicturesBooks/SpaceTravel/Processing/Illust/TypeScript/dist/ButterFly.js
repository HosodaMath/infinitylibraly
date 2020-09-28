"use strict";
class DrawSVG {
    constructor(width, height) {
        this.width = 0;
        this.height = 0;
        this.width = width;
        this.height = height;
    }
    plotStart() {
        let start = "";
        const start1 = "<svg xmlns='http://www.w3.org/2000/svg' version='1.1'";
        const start2 = ` width='${this.width}' height='${this.height}'>`;
        console.log(start + start1 + start2);
    }
    colorProp(fill, stroke = false, sw = false, alpha = 1.0) {
        let back = "/>";
        let base;
        if ((stroke == false) && (sw == false)) {
            let fillCol = ` fill = '${fill}'`;
            let opacity = ` fill-opacity='${alpha}'`;
            base = fillCol + opacity + back;
        }
        else {
            let fillCol = ` fill = '${fill}'`;
            let strokeCol = ` stroke = '${stroke}'`;
            let strokeWidth = ` stroke-width = '${sw}'`;
            let opacity1 = ` fill-opacity = '${alpha}'`;
            let opacity2 = ` stroke-opacity = '${alpha}'`;
            base = fillCol + strokeCol + strokeWidth + opacity1 + opacity2 + back;
        }
        return base;
    }
    rect(x, y, width, height, rx = 0, ry = 0) {
        let front = "<rect";
        let xy = ` x = '${x}' y = '${y}'`;
        let wh = ` width =  '${width}' height = '${height}'`;
        let rxy = ` rx = '${rx}' ry = '${ry}'`;
        let drawRect = front + xy + wh + rxy;
        return drawRect;
    }
    circle(cx, cy, r) {
        let front = "<circle";
        let cxcy = ` cx = '${cx}' cy = '${cy}'`;
        let cr = ` r = '${r}'`;
        let drawCircle = front + cxcy + cr;
        return drawCircle;
    }
    ellipse(cx, cy, rx, ry) {
        let front = "<ellipse";
        let cxcy = ` cx = '${cx}' cy = '${cy}'`;
        let rxry = ` rx = '${rx}' ry = '${ry}'`;
        let drawEllipse = front + cxcy + rxry;
        return drawEllipse;
    }
    polygon(dataX, dataY) {
        let n = dataX.length;
        let xy = "";
        if (dataX.length == dataY.length) {
            let front = "<polygon";
            let point = " points = ";
            for (let count = 0; count < n; count++) {
                xy += `${dataX[count]} ${dataY[count]},`;
            }
            let drawPolygon = front + point + `'${xy}'`;
            return drawPolygon;
        }
        else {
            const out = "Error: xとyの個数は同じでなければなりません。";
            return out;
        }
    }
    plotEnd() {
        let stop = " ";
        stop = "</svg>";
        console.log(stop);
    }
}
const width = 1920, height = 1080;
const width2 = width / 2, height2 = height / 2;
const width4 = width / 4, height4 = height / 4;
const sketch = new DrawSVG(width, height);
let backPaints = () => {
    console.log(sketch.rect(0, 0, width, height) + sketch.colorProp("#000000"));
};
class ButterFly {
    constructor(locationX, locationY, fill, stroke) {
        this.location = [0, 0];
        this.fill = "";
        this.stroke = "";
        this.location = [locationX, locationY];
        this.fill = fill;
        this.stroke = stroke;
    }
    drawButterFly(setradius) {
        const e = 2.718281828459045;
        const Max = 12 * e;
        const radius = setradius;
        let dataX = [];
        let dataY = [];
        let x = 0, y = 0;
        for (let theta = 0; theta < Max; theta += 0.01) {
            x = Math.sin(theta) * ((e ** Math.cos(theta)) - 2 * Math.cos(4 * theta) - Math.sin(theta / 12) ** 5) * radius;
            y = Math.cos(theta) * ((e ** Math.cos(theta)) - 2 * Math.cos(4 * theta) - Math.sin(theta / 12) ** 5) * radius;
            dataX.push(this.location[0] + x);
            dataY.push(this.location[1] + y);
        }
        console.log(sketch.polygon(dataX, dataY) + sketch.colorProp(this.fill, this.stroke));
    }
}
let buttetFly = [];
const Max = 1;
let setup = () => {
    for (let count = 0; count < Max; count++) {
        buttetFly[count] = new ButterFly(Math.random() * width, Math.random() * height, "#ffff00", "#00ffff");
    }
};
setup();
let draw = () => {
    sketch.plotStart();
    backPaints();
    for (let count = 0; count < Max; count++) {
        buttetFly[count].drawButterFly(Math.random() * 100);
        //console.log(buttetFly[count]);
    }
    sketch.plotEnd();
};
draw();
