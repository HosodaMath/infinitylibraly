public class Text {
    Vector2 v2Position = new Vector2(0, 0);
    String setText = "";
    float setTextSize = 0;
    public Text(Vector2 init_v2Position, String initText, float initTextSize){
        v2Position = init_v2Position;
        setText = initText;
        setTextSize = initTextSize;;
    }

    public void drawText1(color fillColor){
        push();
        fill(fillColor);
        textSize(setTextSize);
        text(setText, v2Position.x, v2Position.y);
        pop();
    }

    public void drawText2(color fillColor, String left, String right){
        if(left == "c" && right == "c"){
            push();
            fill(fillColor);
            textSize(setTextSize);
            textAlign(CENTER, CENTER);
            text(setText, v2Position.x, v2Position.y);
            pop();
        }
    }
}