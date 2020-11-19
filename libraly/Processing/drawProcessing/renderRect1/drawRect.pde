public class Rectangle {
    Vector2 v2Position = new Vector2(0, 0);
    Vector2 v2Size = new Vector2(0, 0);
    public Rectangle(Vector2 init_v2Position, Vector2 init_v2Size){
        v2Position = init_v2Position;
        v2Size = init_v2Size;
    }

    public void drawRect1(color fillColor){
        push();
        noStroke();
        fill(fillColor);
        rect(v2Position.x, v2Position.y, v2Size.x, v2Size.y);
        pop();
    }

    public void drawRect2(color fillColor, color stColor, float stWeight){
        push();
        strokeWeight(stWeight);
        stroke(stColor);
        fill(fillColor);
        rect(v2Position.x, v2Position.y, v2Size.x, v2Size.y);
        pop();
    }

     public void drawRect3(color stColor, float stWeight){
        push();
        strokeWeight(stWeight);
        stroke(stColor);
        noFill();
        rect(v2Position.x, v2Position.y, v2Size.x, v2Size.y);
        pop();
    }
}

