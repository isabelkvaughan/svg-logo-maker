class Text {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor
    }

    render() {
        return `<text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">
        ${this.text}
      </text>`;
    }
}

module.exports = {
    Text
  };