public class Vector2 {
    float x = 0;
    float y = 0;
    public Vector2(float initX, float initY){
        this.x = initX;
        this.y = initY;
    }

    public Vector2 add(Vector2 v){
        this.x = this.x + v.x;
        this.y = this.y + v.y;

        return new Vector2(this.x, this.y);
    }

    public Vector2 sub(Vector2 v){
        this.x = this.x - v.x;
        this.y = this.y - v.y;

        return new Vector2(this.x, this.y);
    }

    public Vector2 multi(float m){
        this.x = this.x * m;
        this.y = this.y * m;

        return new Vector2(this.x, this.y);
    }

    public Vector2 div(float d){
        this.x = this.x / d;
        this.y = this.y / d;

        return new Vector2(this.x, this.y);
    }




}