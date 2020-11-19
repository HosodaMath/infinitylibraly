//sizeと同じく
int Max = 100;
setData data = new setData(Max);
Vector2[] v2Position = new Vector2[Max];
//ArrayList<Vector2> arraylist = new ArrayList<Vector2>();
Vector2 v2Size;

void setup() {
    size(500, 500);
    noLoop();
    v2Size = new Vector2(50, 50);
    v2Position = data.setPositionData(v2Size);
}

void draw() {
    //int tmpData = -1;
    for(int countX = 0; countX < Max; countX++){
        for(int countY = 0; countY < Max; countY++){
            //tmpData = tmpData + 1;
            //Rectangle newRect = new Rectangle(v2Position[tmpData], v2Size);
            //color fillColor = color(255, 255, 255);
            //color stColor = color(0, 0, 0);
            //float stWeight = 1.0;
            //newRect. drawRect2(fillColor, stColor, stWeight);
            println(v2Position[countX].x, v2Position[countY].y);
        }
    }
}
