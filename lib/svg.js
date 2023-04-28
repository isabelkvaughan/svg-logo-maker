const fs = require('fs');

function generateSVG(svgContent) {
  const svgFileContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgContent}</svg>`;
  fs.writeFile('logo.svg', svgFileContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

module.exports = {
  generateSVG
};