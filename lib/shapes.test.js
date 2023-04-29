const { Circle, Square, Triangle } = require('./shapes.js');

describe('Circle', () => {
  it('should return an SVG circle in chosen color', () => {
    const circle = new Circle('red');
    const result = circle.render();
    const expected = '<circle cx="150" cy="100" r="50" fill="red" />';
    expect(result).toBe(expected);
  });
});

describe('Square', () => {
  it('should return an SVG square in chosen color', () => {
    const square = new Square('red');
    const result = square.render();
    const expected = '<rect x="100" y="50" width="100" height="100" fill="red" />';
    expect(result).toBe(expected);
  });
});

describe('Triangle', () => {
  it('should return an SVG circle in chosen color', () => {
    const triangle = new Triangle('red');
    const result = triangle.render();
    const expected = '<polygon points="150,50 100,150 200,150" fill="red" />';
    expect(result).toBe(expected);
  });
});