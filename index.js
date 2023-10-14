// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require("./lib/shapes");
const svgwrite = require('svgwrite');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: "Text: Enter up to 3 characters:",
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Text color:",
    },
    {
        type: 'list',
        name: 'shape',
        message: "Select shape for the logo:",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "Enter a shape color:",
    }
])
    .then(answers => {
        const text = answers.text;
        const textColor = answers.textColor;
        const shapeType = answers.shape;
        const shapeColor = answers.shapeColor;

        const svg = svgwrite.createSvg({ width: 300, height: 200 });

        let logoShape;

        switch (shapeType) {
            case "Circle":
                logoShape = new Circle();
                break;
            case "Triangle":
                logoShape = new Triangle();
                break;
            case "Square":
                logoShape = new Square();
                break;
            default:
                console.log("Invalid shape choice.");
                process.exit(1);
        }

        logoShape.addToSVG(svg);

        const svgContent = svg.toSvg();
        fs.writeFileSync('logo.svg', svgContent);
        console.log("Generated logo.svg");
    })
    .catch(error => {
        console.error("Error:", error);
    });