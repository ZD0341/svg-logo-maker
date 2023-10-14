class Shape {

    constructor(color = 'black', text = '') {
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
            cx: 150,
            cy: 100,
            r: this.radius,
            fill: this.color,
        });

        svg.add(circle);
    }
}
class Triangle extends Shape {
    constructor(sideLength, color, text) {
        super(color, text);
        this.sideLength = sideLength;
    }

    addToSVG(svg) {
    }
}

class Square extends Shape {
    constructor(sideLength, color, text) {
        super(color, text);
        this.sideLength = sideLength;
    }

    addToSVG(svg) {
    }
}

module.exports = { Circle, Triangle, Square };