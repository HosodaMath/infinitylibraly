Vector2 v, w;
Vector3 v3, w3;
float m, m3;
float d, d3;
void setup() {
    size(512, 512);
    noLoop();

    v = new Vector2(3, 4);
    w = new Vector2(7, 6);
    m = 5;
    d= 3;

    v3 = new Vector3(3, 4, 5);
    w3 = new Vector3(7, 6, 5);
    m3 = 5;
    d3 = 3;
}

void draw() {
    color backColor = color(0, 0, 0);
    backPaints(backColor);
    
    drawVector2();

    drawVector3();

}

void backPaints(color backColor){
    background(backColor);
}

void backPaints(PImage img){
    image(img, 0, 0, width, height);
}

void drawVector2(){
    println("Vector2");

    v.add(w);
    println(v.x, v.y);
    
    v.sub(w);
    println(v.x, v.y);

    v.multi(m);
    w.multi(m);
    println(v.x, v.y, w.x, w.y);

    v.div(d);
    w.div(d);
    println(v.x, v.y, w.x, w.y);
}

void drawVector3(){
    println("Vector3");

    v3.add(w3);
    println(v3.x, v3.y);

    v3.sub(w3);
    println(v3.x, v3.y);

    v3.multi(m3);
    w3.multi(m3);
    println(v3.x, v3.y, w3.x, w3.y);

    v3.div(d3);
    w3.div(d3);
    println(v3.x, v3.y, w3.x, w3.y);
}
