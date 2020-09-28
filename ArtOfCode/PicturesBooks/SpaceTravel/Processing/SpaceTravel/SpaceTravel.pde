float Origin;
int starMax = 40;
Vector2[] star = new Vector2[starMax];
void setup() {
    size(1920, 1080);
    frameRate(60);

    Origin = 0;
    
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
    Vector2[] locationData = new Vector2[starMax];
    Vector2[] velocityData = new Vector2[starMax];
    float[] radiusData = new float[starMax];
    color[] colorData = new color[starMax];

    color[] tmpColor = {color(255, 100, 100), color(255, 255, 100), 
        color(100, 255,100),color(100, 255, 255)};

    for(int count = 0; count < starMax; count++){
        locationData[count] = new Vector2(random(0, width), random(0, height));
        velocityData[count] = new Vector2(1, 0);
        radiusData[count] = random(2, 30);
        color tmp = floor(random(0, tmpColor.length));
        colorData[count] = tmpColor[tmp];
    }

    for(int count = 0; count < starMax; count++){
        
    }
}


