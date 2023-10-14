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
const generateSvg = require('./lib/svg.js');
const fs = require('fs');

// promt the user with questions
function promptUser() {
    console.log('here')
    inquirer
        .prompt([
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
            },
            {
                type: 'input',
                name: 'shapeSize',
                message: "Enter a shape side length:",
            }
        ])
        .then(answers => {
            console.log('here 2')
            // const text = answers.text;
            // const textColor = answers.textColor;
            // const shapeType = answers.shape;
            // const shapeColor = answers.shapeColor;

            fs.writeFileSync('.\\examples\\logo.svg', generateSvg(answers));
            console.log("Generated logo.svg");
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
// TODO: Create a function to initialize app
function init() {
    promptUser()
}
// Function call to initialize app
init();
