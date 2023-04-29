const { Text } = require('./text.js');

describe('Text', () => {
  it('should return an SVG with 123 in green', () => {
    const text = new Text('123', 'green');
    const result = text.render();
    const expected = '<text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="green" style="font-size: 50px;">123</text>';
    expect(result).toBe(expected);
  });
});