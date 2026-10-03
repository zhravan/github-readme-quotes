const getTemplate = (template) => {
    const escapeHtml = require('escape-html');


    const svgWidth = Number.isFinite(template.width) ? template.width : 700;
    const svgHeight = Number.isFinite(template.height) ? template.height : 200;
    const textFontSize = Number.isFinite(template.fontSize) ? template.fontSize : 16;

    const safeUrl = escapeHtml(template.bgImage);
    const backgroundImageLayer = safeUrl
        ? `<image href="${safeUrl}"
        x="0" y="0"
        width="${svgWidth}"
        height="${svgHeight}"
        preserveAspectRatio="xMidYMid slice" />`
        : '';

    return `
    <svg width="${svgWidth}px" height="${svgHeight}px" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
        @font-face{
          font-family: "customFont";
          src: ${template.font.src}
        }
        
        .quote-text {
          font-size: ${textFontSize}px !important;
        }
        </style>
      </defs>
      ${backgroundImageLayer}
      <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
              <style>
                  ${template.css}
              </style>
              ${template.structure}
          </div>
      </foreignObject>
    </svg>`;
};

module.exports = getTemplate;
