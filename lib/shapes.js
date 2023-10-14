class Shape {

    constructor( color = 'black', text = '') {
        this.color = color
        this.text = text;
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    printShapeInfo() {
        console.log(`Color of Shape is ${this.color}`);
        console.log(`Text on Shape is ${this.text}`);
    }
}
class Circle extends Shape {

    constructor(radius = 0, color = 'black', text = '') {
        super(color, text)
        this.radius = radius
    }

    setRadius(radius) {
        this.radius = radius
    }

    print() {
        console.log(`Radius of circle is ${this.radius}`);
        console.log(`Color of circle is ${this.color}`);
        console.log(`Text on circle is ${this.text}`);
    }
}
class Triangle extends Shape {
    constructor(sideLength = 0, color = 'black', text = '') {
        super(color, text);
        this.sideLength = sideLength;
    }
}
class Square extends Shape {
    constructor(sideLength = 0, color = 'black', text = '') {
        super(color, text);
        this.sideLength = sideLength;
    }

}

var circle = new Circle();
var shape = new Shape()
console.log(circle);
circle.setRadius(10)
console.log(circle);
circle.print()
circle.printShapeInfo()
var circleNew = new Circle(15, 'red', 'ZDL')
console.log(circleNew)
circleNew.print()

module.exports = { Circle, Triangle, Square };