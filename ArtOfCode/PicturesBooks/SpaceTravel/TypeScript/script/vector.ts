/**
 * copyright ShingoHosoda
 * P5jsのグローバルモードで使いたい場合は1番下にあるexportをコメントアウトしてください。
 * Warrning!! 現在vector3は未テストです。
 */
class Vector2 {
    public x : number = 0;
    public y : number = 0;
    /**
     * @constructor
     * @param {number} x - x value
     * @param {number} y - y value
     */
    public constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }

    /**
     * Vector addition
     * @method add
     * @param {Vector2} v vector value
     */
    public add(v : Vector2): Vector2 {
        this.x = this.x + v.x;
        this.y = this.y + v.y;

        return new Vector2(this.x, this.y);
    }

    /**
     * Vector addition
     * @method add static method
     * @param {Vector2} v vector value
     * @param {Vector2} w vector value
     */
    public static add(v : Vector2, w : Vector2): Vector2{
        return new Vector2(v.x + w.x, v.y + w.y);
    }

    /**
     * Vector  subtraction
     * @method sub
     * @param {Vector2} v vector value
     */
    public sub(v : Vector2): Vector2 {
        this.x = this.x - v.x;
        this.y = this.y - v.y;

        return new Vector2(this.x, this.y);
    }

      /**
     * Vector  subtraction
     * @method sub static method
     * @param {Vector2} v vector value
     * @param {Vector2} w vector value
     */
    public static sub(v : Vector2, w : Vector2): Vector2{
        return new Vector2(v.x - w.x, v.y - w.y);
    }

    /**
     * Scalar-vector multiplication
     * @method multi 
     * @param {number} m scalar value
     */
    public multi(m : number): Vector2 {
        this.x = this.x * m;
        this.y = this.y * m;

        return new Vector2(this.x, this.y);
    }

      /**
     * Scalar-vector multiplication
     * @method multi static method
     * @param {Vector2} v vector value 
     * @param {number} m scalar value
     */
    public static multi(v : Vector2, m : number): Vector2{
        return new Vector2(v.x * m, v.y * m);
    }

    /**
     * Scalar-vector  division
     * @method div
     * @param {number} d scalar value 
     */
    public div(d : number): Vector2 {
        this.x = this.x / d;
        this.y = this.y / d;

        return new Vector2(this.x, this.y);
    }

     /**
     * Scalar-vector  division
     * @method div static method
     * @param {Vector2} v vector value
     * @param {number} d scalar value 
     */
    public static div(v : Vector2, d : number): Vector2{
        return new Vector2(v.x / d, v.y / d);
    }

    /**
     * dot product
     * @method dot 
     * @param {Vector2} v 
     */
    public dot(v : Vector2): number{
        this.x = this.x * v.x;
        this.y = this.y * v.y;

        return this.x + this.y;
    }

    /**
     * dot product
     * @method dot static method
     * @param {Vector2} v 
     * @param {Vector2} w 
     */
    public static dot(v : Vector2, w : Vector2): number{
        return (v.x * w.x) + (v.y * w.y);
    }

    /*
    public angle(v : Vector2, w : Vector2): number{
        let vv = v.normalize();
    }*/
    
    /**
     * Euclidean distance 
     * @method dist
     * @param {number} v 
     */
    /*
    public dist(v : Vector2): number{

    }*/

    /**
     * @method mag
     * Vector Magnitude 
     * vector length
     */
    public mag() : number{
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * @method normalize
     * Vector Normalize
     */
    public normalize() : Vector2 {
       this.x = this.x / this.mag();
       this.y = this.y / this.mag();

       return new Vector2(this.x, this.y);
    }
}

class Vector3 extends Vector2 {
    public z : number = 0;
    /**
     * @constructor
     * @param {number} x 
     * @param {number} y 
     * @param {number} z 
     */
    constructor(x : number, y : number, z : number){
        super(x, y);
        this.z = z;
    }

    /**
     * Vector addition
     * @method add
     * @param {Vector3} v vector value
     */
    public add(v : Vector3): Vector3 {
        this.x = this.x + v.x;
        this.y = this.y + v.y;
        this.z = this.z + v.z;

        return new Vector3(this.x, this.y, this.z);
    }

    /**
     * Vector addition
     * @method add static method
     * @param {Vector3} v vector value
     * @param {Vector3} w vector value
     */
    public static add(v : Vector3, w : Vector3): Vector3{
        return new Vector3(v.x + w.x, v.y + w.y, v.z + w.z);
    }

    /**
     * Vector  subtraction
     * @method sub
     * @param {Vector3} v vector value
     */
    public sub(v : Vector3): Vector3 {
        this.x = this.x - v.x;
        this.y = this.y - v.y;
        this.z = this.z - v.z;

        return new Vector3(this.x, this.y, this.z);
    }

      /**
     * Vector  subtraction
     * @method sub static method
     * @param {Vector3} v vector value
     * @param {Vector3} w vector value
     */
    public static sub(v : Vector3, w : Vector3): Vector3{
        return new Vector3(v.x - w.x, v.y - w.y, v.z - w.z);
    }

    /**
     * Scalar-vector multiplication
     * @method multi 
     * @param {number} m scalar value
     */
    public multi(m : number): Vector3 {
        this.x = this.x * m;
        this.y = this.y * m;
        this.z = this.z * m;

        return new Vector3(this.x, this.y, this.z);
    }

      /**
     * Scalar-vector multiplication
     * @method multi static method
     * @param {Vector3} v vector value 
     * @param {number} m scalar value
     */
    public static multi(v : Vector3, m : number): Vector3{
        return new Vector3(v.x * m, v.y * m, v.z * m);
    }

    /**
     * Scalar-vector  division
     * @method div
     * @param {number} d scalar value 
     */
    public div(d : number): Vector3 {
        this.x = this.x / d;
        this.y = this.y / d;
        this.z = this.z / d;

        return new Vector3(this.x, this.y, this.z);
    }

     /**
     * Scalar-vector  division
     * @method div static method
     * @param {Vector3} v vector value
     * @param {number} d scalar value 
     */
    public static div(v : Vector3, d : number): Vector3{
        return new Vector3(v.x / d, v.y / d, v.z / d);
    }
}

//P5jsで使いたい場合はここはコメントアウトする。
export {Vector2, Vector3}