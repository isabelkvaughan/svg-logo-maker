// import file system & inquirer
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: "Enter the shape color for your logo:",
    },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log('Answers:', answers);
  })
  .catch((error) => {
    console.log('Error:', error);
  });