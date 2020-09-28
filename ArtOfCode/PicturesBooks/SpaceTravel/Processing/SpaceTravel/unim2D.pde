public class Unim1D {
   private float initX = 0;
   private float initVX = 0;
   private float deltaTime = 0;
   private float totalTime = 0;
   private float steps = 0;
   private Vector2 location= new Vector2(0, 0);
   private Vector2 velocity = new Vector2(0, 0);
    public Unim1D(float initX, float initVX, float deltaTime, float totalTime){
        this.initX = initX;
        this.initVX = initVX;
        this.deltaTime = deltaTime;
        this.totalTime = totalTime;
        this.steps = floor(this.totalTime/ this.deltaTime);
        this.location = new Vector2(initX, height / 2);
        this.velocity = new Vector2(initVX, 0);
    }

    public void stepButterFly(){
        float nowTime  = 0;
        Vector2 tmp = new Vector2(0, 0);
        nowTime  = nowTime + this.deltaTime;
        tmp = this.location.add(this.velocity);
        tmp.multi(nowTime);

        if(this.location.x > width){
            this.location.x = 0;
            
        }
    }
    public void drawButterfly(PImage img) {
        translate(this.location.x, this.location.y);
        image(img, this.location.x, this.location.y);
    }
}