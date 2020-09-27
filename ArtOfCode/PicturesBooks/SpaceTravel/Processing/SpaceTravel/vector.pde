/**
 *  Vector Class
 *
 *	@author ShingoHosoda
 */
public class Vector2  {
    public float x;
    public float y;
    public Vector2 (float x, float y) {
        this.x = x;
        this.y = y;
    }

    public Vector2 add(Vector2 v){
        this.x = this.x + v.x;
        this.y = this.y + v.y;

        return this;
    }

    public Vector2 sub(Vector2 v){
        this.x = this.x - v.x;
        this.y = this.y - v.y;

        return this;
    }

    public Vector2 multi(float m){
        this.x = this.x * m;
        this.y = this.y * m;

        return this;
    }

    public Vector2 div(float d){
        this.x = this.x / d;
        this.y = this.y / d;

        return this;
    }
} 

public class Vector3  {
    public float x;
    public float y;
    public float z;
    public Vector3 (float x, float y, float z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public Vector3 add(Vector3 v){
        this.x = this.x + v.x;
        this.y = this.y + v.y;
        this.z = this.z + v.z;

        return this;
    }

    public Vector3 sub(Vector3 v){
        this.x = this.x - v.x;
        this.y = this.y - v.y;
        this.z = this.z - v.z;

        return this;
    }

    public Vector3 multi(float m){
        this.x = this.x * m;
        this.y = this.y * m;
        this.z = this.z * m;

        return this;
    }

    public Vector3 div(float d){
        this.x = this.x / d;
        this.y = this.y / d;
        this.z = this.z / d;

        return this;
    }
} 

