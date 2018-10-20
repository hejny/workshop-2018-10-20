export class Vector2{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    addInPlace(vector2){
        this.x += vector2.x;
        this.y += vector2.y;
        return this;
    }

    scaleInPlace(ratio){
        this.x *= ratio;
        this.y *= ratio;
        return this;
    }

    scale(ratio){
        return new Vector2(
            this.x * ratio,
            this.y * ratio,
        );
    }

}