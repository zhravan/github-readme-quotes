const layouts = require("../layouts/layout");
class Template {
  constructor() {}
  
  setTheme(theme) {
    this.theme = theme;
  }

  setData(data) {
    this.quote = data.quote;
    this.author = data.author;
  }

  setAnimation(animation) {
    this.animation = animation;
  }

  setLayout(layout) {
    this.layout = layout;
    this.setStyle(layout.style);
    this.setStructure(layout.structure);
    this.calculateHeight(this.quote.length);
  }

  setBorderColor(borderColor) {
    this.borderColor = borderColor;
  }

  setStyle(style) {
    this.css = style(this);
  }

  setStructure(structure) {
    this.structure = structure(this);
  }
  
  setFont(font){
    this.font = font;
  }

  calculateHeight(length) {
    let lines;
    if (this.layout !== layouts["zues"]) {
      lines = Math.floor(length / 64);
      this.height = lines > 2 ? (lines - 2) * 25 + 195 : 195;
    } else {
      lines = Math.floor(length / 62);
      this.height = lines * 18 + 198;
    }
  }
}

module.exports = Template;
