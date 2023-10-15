const { Circle, Triangle, Square } = require("./shapes.js");
const generateSvg = require("./svg");

describe("generateSvg", () => {
  it("should generate valid SVG for a Circle", () => {
    const data = {
      shape: "Circle",
      shapeSize: 100,
      shapeColor: "red",
      text: "Hello",
      textColor: "black",
    };
    const svg = generateSvg(data);
    expect(svg).toContain('<circle cx="50%" cy="50%" r="100" fill="red"/>');
    expect(svg).toContain('<text x="25%" y="50%" fill="black" font-size="48">Hello</text>');
  });

  it("should generate valid SVG for a Triangle", () => {
    const data = {
      shape: "Triangle",
      shapeSize: 200,
      shapeColor: "blue",
      text: "Triangle",
      textColor: "white",
    };
    const svg = generateSvg(data);
    expect(svg).toContain('<polygon points="0,200 100,26.795 200,200" fill="blue"/>');
    expect(svg).toContain('<text x="25%" y="50%" fill="white" font-size="48">Triangle</text>');
  });

  it("should generate valid SVG for a Square", () => {
    const data = {
      shape: "Square",
      shapeSize: 200,
      shapeColor: "green",
      text: "ABC",
      textColor: "black",
    };
    const svg = generateSvg(data);
    expect(svg).toContain('<rect x="0" y="50" width="200" height="200" fill="green"/>');
    expect(svg).toContain('<text x="25%" y="50%" fill="black" font-size="48">ABC</text>');
  });
});

describe("Circle", () => {
  it("should set the radius using setRadius method", () => {
    const circle = new Circle(100, "red", "Hello", "black");
    circle.setRadius(50);
    expect(circle.radius).toBe(50);
  });

  it("should generate a valid circle SVG", () => {
    const circle = new Circle(100, "red", "ABC", "black");
    const shapeSvg = circle.getShapeSvg();
    const textSvg = circle.getTextSvg();
    expect(shapeSvg).toContain('<circle cx="50%" cy="50%" r="100" fill="red"/>');
    expect(textSvg).toContain('<text x="25%" y="50%" fill="black" font-size="48">ABC</text>');
  });
});

// const Triangle = require("./shapes.js");

describe("Triangle", () => {
  it("should generate a valid triangle SVG", () => {
    const triangle = new Triangle(200, "blue", "ABC", "white");
    const shapeSvg = triangle.getShapeSvg();
    const textSvg = triangle.getTextSvg();
    expect(shapeSvg).toContain('<polygon points="0,200 100,26.795 200,200" fill="blue"/>');
    expect(textSvg).toContain('<text x="25%" y="50%" fill="white" font-size="48">ABC</text>');
  });
});

// const Square = require("./shapes.js");

describe("Square", () => {
  it("should generate a valid square SVG", () => {
    const square = new Square(200, "green", "ABC", "black");
    const shapeSvg = square.getShapeSvg();
    const textSvg = square.getTextSvg();
    expect(shapeSvg).toContain('<rect x="0" y="50" width="200" height="200" fill="green"/>');
    expect(textSvg).toContain('<text x="25%" y="50%" fill="black" font-size="48">ABC</text>');
  });
});