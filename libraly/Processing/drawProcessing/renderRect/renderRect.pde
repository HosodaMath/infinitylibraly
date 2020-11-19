Vector2 v2Position, v2Size;
Rectangle v2Rect;
void setup() {
    size(500, 500);
    frameRate(60); 
    noLoop();
    v2Position = new Vector2(0, 0);
    v2Size = new Vector2(50, 50);
    v2Rect = new Rectangle(v2Position, v2Size);
}

void draw() {
    backPaints(color(0, 0, 0));
    
    drawBox();

}

void backPaints(color backColor){
    background(backColor);
}

void drawBox(){
    Vector2  windowSize = new Vector2(width, height); 
    for(float locationX = 0; locationX < windowSize.x; locationX+=50){
        for(float locationY = 0; locationY < windowSize.y;locationY+=50){
            v2Position = new Vector2(locationX, locationY);
            v2Rect = new Rectangle(v2Position, v2Size);
            color fillColor = color(locationX , locationY, 255);
            color stColor = color(0, 0, 0);
            println(locationX, locationY);
            v2Rect.drawRect2(fillColor, stColor, 1.0);
        }
    }
}
