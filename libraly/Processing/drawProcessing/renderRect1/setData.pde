public class setData {
    int Max = 0;
    public setData(int initMax){
        Max = initMax;
    }

    Vector2[] setPositionData(Vector2 v2Size){
        Vector2  windowSize = new Vector2(width, height); 
        Vector2[] v2PositionData = new Vector2[Max];
        int tmpData = -1;
        for(int positionX = 0; positionX < windowSize.x; positionX += v2Size.x){
            for(int positionY = 0; positionY < windowSize.y; positionY += v2Size.y){
                tmpData = tmpData + 1;
                v2PositionData[tmpData] = new Vector2(positionX, positionY);

            }
        }

        return v2PositionData;
    }
}
