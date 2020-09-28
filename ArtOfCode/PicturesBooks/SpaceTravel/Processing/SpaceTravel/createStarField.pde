public class createStar {
   private Vector2 location;
   private Vector2 velocity;
   private float radius;
   private color col;
   public createStar(Vector2 location, Vector2 velocity, float radius, color col){
       this.location = location;
       this.velocity = velocity;
       this.radius = radius;
       this.col = col;
    }

    public void stepStar(){
        this.location.sub(this.velocity);

        if(this.location.x < 0){
            this.location.x = width;
            this.location.y = random(0, height);
        }
    }

    public void drawStar(){
        push();
        stroke(this.col);
        fill(this.col);
        circle(this.location.x, this.location.y, this.radius);
        pop();
    }
}
