const { Circle, Triangle, Square } = require('./shapes');

describe('Shape', () => {
    it('should set color, text, and textColor properties', () => {
        const shape = new Circle(100, 'red', 'Hello', 'black');
        expect(shape.color).toBe('red');
        expect(shape.text).toBe('Hello');
        expect(shape.textColor).toBe('black');
    });

    it('should set new color using setColor method', () => {
        const shape = new Circle(100, 'red', 'Hello', 'black');
        shape.setColor('blue');
        expect(shape.color).toBe('blue');
    });

    it('should generate text SVG', () => {
        const shape = new Circle(100, 'red', 'Hello', 'black');
        const textSvg = shape.getTextSvg();
        expect(textSvg).toContain('<text x="25%" y="50%" fill="black" font-size="48">Hello</text>');
    });
});