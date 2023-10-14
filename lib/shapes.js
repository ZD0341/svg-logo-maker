class Shape {

    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    getTextSvg(){
        return`<text x="25%" y="50%" fill="${this.textColor}" font-size="48">${this.text}</text>`
    }

}
class Circle extends Shape {

    constructor(radius, color, text, textColor) {
        super(color, text, textColor);
        this.radius = radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getShapeSvg(){
        return`<circle cx="50%" cy="50%" r="${this.radius}" fill="${this.color}"/>`
    }

}
class Triangle extends Shape {
    constructor(sideLength, color, text, textColor) {
        super(color, text, textColor);
        this.sideLength = sideLength;
    }

    getShapeSvg() {
        return `<polygon points="${100-(this.sideLength/2)},200 100,${200 - (this.sideLength * .866)} ${100 + (this.sideLength/2)},200" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    constructor(sideLength, color, text, textColor) {
        super(color, text, textColor);
        this.sideLength = sideLength;
    }
    getShapeSvg() {
        return `<rect x="0" y="0" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}"/>`;
    }
}

module.exports = { Circle, Triangle, Square };