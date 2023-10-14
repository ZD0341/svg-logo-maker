const { Circle, Triangle, Square } = require("./shapes.js");
const generateSvg = require("./lib/svg");

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
      text: "Square",
      textColor: "black",
    };
    const svg = generateSvg(data);
    expect(svg).toContain('<rect x="0" y="50" width="200" height="200" fill="green"/>');
    expect(svg).toContain('<text x="25%" y="50%" fill="black" font-size="48">Square</text>');
  });
});