float Origin;
int starMax = 40;
createStar[] star = new createStar[starMax];
Unim1D unim1d;
void setup() {
    size(1920, 1080);
    frameRate(60);

    Origin = 0;
    setupStar();
    
}

void draw() {
    color backColor = color(255, 255, 255);
    backPaints(backColor);
    
    createSpace();
    renderStarFIeld();
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

void setupUnim(){
    float initX = 0.0; //座標xの初期値
    float initY = 0.0; //座標xの初期値
    float initVX = 2.0; //速度xの初期値
    float initVY = 5.0; //速度yの初期値
    float deltaTime = 0.05; //経過時間の値
    float totalTime = 4.0; //総合時間
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
        star[count] = new createStar(locationData[count], velocityData[count], radiusData[count], colorData[count]);
    }
}

void renderStarFIeld(){
    for(int count = 0; count < starMax; count++){
        star[count].stepStar();
        star[count].drawStar();
    }
}


