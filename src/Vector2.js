export class Vector2{
    constructor(x,y){
        if(isNaN(x)||isNaN(y)){
            throw new Error(`Can not create Vector2 with NaN value.`);
        }
        this.x = x;
        this.y = y;
    }

    static Zero(){
        return new Vector2(0,0);
    }

    static distance(vector2_1,vector2_2){
        return Math.sqrt(Math.pow(vector2_1.x-vector2_2.x,2)+Math.pow(vector2_1.y-vector2_2.y,2));
    }

    addInPlace(vector2){
        this.x += vector2.x;
        this.y += vector2.y;
        return this;
    }

    add(vector2){
        return new Vector2(
            this.x + vector2.x,
            this.y + vector2.y,
        );
    }

    subtractInPlace(vector2){
        this.x -= vector2.x;
        this.y -= vector2.y;
        return this;
    }

    subtract(vector2){
        return new Vector2(
            this.x - vector2.x,
            this.y - vector2.y,
        );
    }


    scaleInPlace(ratio){
        this.x *= ratio;
        this.y *= ratio;
        return this;
    }

    scale(ratio){
        if(isNaN(ratio)){
            throw new Error(`Can not scale Vector2 with NaN value.`);
        }
        return new Vector2(
            this.x * ratio,
            this.y * ratio,
        );
    }

    get length(){
        //todo optimize cache
        return Vector2.distance(this,Vector2.Zero());
    }

    lengthInPlace(length){
        if(this.length!==0){
            this.scaleInPlace(length/this.length);
        }
        return this;
    }


}