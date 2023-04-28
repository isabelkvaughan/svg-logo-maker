class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />`;
  }
}

module.exports = {
    Circle,
    Square,
    Triangle
  };