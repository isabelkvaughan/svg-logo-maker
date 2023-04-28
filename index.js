// import file system & inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');
const { Text } = require('./lib/text.js');

// questions 
const questions = [
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your logo:",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color for your logo:",
    },
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for your logo text:",
        validate: function (input) {
            if (input.length > 3) {
              return 'Please enter a maximum of 3 characters.';
            }
            return true;
          },
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter the text color for your logo:",
    },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log('Answers:', answers);
    
// Create the SVG content based on the selected shape and text
let svgContent;
switch (answers.shape) {
  case "Circle":
    const circle = new Circle(answers.shapeColor);
    svgContent = circle.render();
    break;
  case "Square":
    const square = new Square(answers.shapeColor);
    svgContent = square.render();
    break;
  case "Triangle":
    const triangle = new Triangle(answers.shapeColor);
    svgContent = triangle.render();
    break;
}

const text = new Text(answers.text, answers.textColor);
svgContent += text.render();

// Create the SVG file
const svgFileContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgContent}</svg>`;
fs.writeFile('logo.svg', svgFileContent, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('SVG file created: logo.svg');
  }
});
})
.catch((error) => {
console.log('Error:', error);
});