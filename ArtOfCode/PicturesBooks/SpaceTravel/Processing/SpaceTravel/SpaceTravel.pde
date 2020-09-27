float Origin = 0;
void setup() {
    size(1920, 1080);
    
}

void draw() {
    color backColor = color(255, 255, 255);
    backPaints(backColor);
    
    createSpace();
}

void backPaints(color backColor){
    background(backColor);
}

void backPaints(PImage img){
    image(img, 0, 0, width, height);
}

void createSpace(){
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

void setupStar() {
    float[] locationData;
    float[] velocityData;
    float[] radiusData;
    color[] colorData;

    color[] tmpColor;
}