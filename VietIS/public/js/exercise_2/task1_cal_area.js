class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    getArea(){
        return this.height * this.width;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }
}

function calAreaRectangle() {
    try {
        let width =  parseInt(document.getElementById("width").value);
        let height = parseInt(document.getElementById("height").value);
        let rectangle = document.getElementById('rectangle')
        rectangle.setAttribute("width", width);
        rectangle.setAttribute("height", height);
        let rect_instant = new Rectangle(height, width);
        document.getElementById("rectangleArea").innerHTML = rect_instant.getArea();
    } catch (error) {
        console.log(error);
    }
    
}
function calAreaSquare() {
    try {
        var size =  parseInt(document.getElementById("size").value);
        var square = document.getElementById('square')
        square.setAttribute("width", size);
        square.setAttribute("height", size);
        let square_instant = new Square(size);
        document.getElementById("squareArea").innerHTML = square_instant.getArea();
    } catch (error) {
        console.log(error);
    }
}