class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    getArea(){
        return this.height * this.height;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }
}

