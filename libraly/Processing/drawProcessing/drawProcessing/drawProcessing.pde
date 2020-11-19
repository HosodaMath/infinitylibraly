import gifAnimation.*;
GifMaker gifExport;

Vector2 v2Position;
Vector2 v2Velocity;
//Rectangle v2Rect;
//Vector2 v2Size;
Text v2Text;
void setup(){
    size(512, 512);
    frameRate(30);
    v2Position = new Vector2(width / 2, height / 2);
    v2Velocity = new Vector2(0.1, 0.1);
    v2Text = new Text(v2Position, "HelloWorld", 40);
    //v2Size = new Vector2(100, 100);
     //v2Rect = new Rectangle(v2Position, v2Size);
    gifExport = new GifMaker(this, "data/helloworld.gif");
    gifExport.setRepeat(0); 
    gifExport.setQuality(10); 
    gifExport.setDelay(20); 
    
    

}

void draw(){
    backPaints(color(255, 255, 0));
    color fillColor = color(0, 0, 0);
    v2Position.add(v2Velocity);
    v2Text.drawText2(fillColor, "c", "c");
    //v2Rect.drawRect1(fillColor);

    if(frameCount <= 30*15){
        gifExport.addFrame(); 
    } else {
        gifExport.finish(); 
    }
    
}

void backPaints(color backColor){
    background(backColor);
}
