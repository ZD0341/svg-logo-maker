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

    addToSVG(svg) {

    }
}
class Circle extends Shape {

    constructor(radius, color, text) {
        super(color, text);
        this.radius = radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    addToSVG(svg) {
        const circle = svg.circle({

        });
    }
class Triangle extends Shape {
    constructor(sideLength, color, text) {
        super(color, text);
        this.sideLength = sideLength;
    }

    // Method for customizing and adding the triangle to SVG (you need to implement this)
    addToSVG(svg) {
        // Customize and add the triangle to the SVG here
    }
    class Square extends Shape {
        constructor(sideLength, color, text) {
            super(color, text);
            this.sideLength = sideLength;
        }
    
        // Method for customizing and adding the square to SVG (you need to implement this)
        addToSVG(svg) {
            // Customize and add the square to the SVG here
        }
    }
    
    module.exports = { Circle, Triangle, Square };