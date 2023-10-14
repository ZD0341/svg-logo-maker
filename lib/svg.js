const { Circle, Triangle, Square } = require("./shapes.js");

const generateSvg = (data) => {
    var shape
    switch (data.shape) {
        case "Triangle":
            shape = new Triangle(data.shapeSize, data.shapeColor, data.text, data.textColor)
            break
        case "Circle":
            shape = new Circle(data.shapeSize, data.shapeColor, data.text, data.textColor)
            break
        case "Square":
            shape = new Square(data.shapeSize, data.shapeColor, data.text, data.textColor)
            break
    }
    

    return `
<!DOCTYPE html>\n<html>\n<body>\n<svg height="300" width="200">
    ${shape.getShapeSvg()}
    ${shape.getTextSvg()}
</svg> 
</body>
</html>
`;
}

module.exports = generateSvg;