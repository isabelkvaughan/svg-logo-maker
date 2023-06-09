class Text {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor
    }

    render() {
        return `<text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" style="font-size: 50px;">${this.text}</text>`;
      }
    }

module.exports = {
    Text
  };