const layouts = {
  default: {
    style: (template) => {
      return `  * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                }
                .container {
                font-family:customFont,Arial,Helvetica,sans-serif;
                padding: 40px 20px;
                min-width: 600px;
                background: ${template.theme.bg_color};
                border: 1px solid ${template.borderColor};
                border-radius: 5px;
                ${template.animation.animation};
                }
                ${template.animation.keyframes}
                .container h3 {
                font-size: 19px;
                margin-bottom: 5px;
                font-weight: 500;
                font-style: oblique;
                color: ${template.theme.quote_color};
                }
                .container h3::before {
                content: open-quote;
                font-size: 25px;
                }
                .container h3::after {
                content: close-quote;
                vertical-align: sub;
                font-size: 25px;
                }
                .container p {
                /* float: right; */
                /* margin-right: 20px; */
                font-style: italic;
                padding: 5px;
                text-align: right;
                color: ${template.theme.author_color};
                }`;
    },
    structure: (template) => {
      return `<div class="container">
                <h3> ${template.quote} </h3>
                <p>- ${
                  template.author === "Unknown" ? "Anonymous" : template.author
                } </p>
            </div>`;
    },
  },
  socrates: {
    style: (template) => {
      return `.square-brackets-quote {
                display:inline-block;
                font-family:customFont,Arial,Helvetica,sans-serif;
                margin:1em;
                min-width:600px;
                ${template.animation.animation};
                } 
                ${template.animation.keyframes}
                .square-brackets-quote blockquote {
                    background: ${template.theme.bg_color};
                    color: ${template.theme.quote_color};
                    display:inline-block;
                    margin:0;
                    padding:2em;
                    position:relative;
                    font-size:15px;
                    
                }
                 .square-brackets-quote blockquote::before {
                    --border: ${template.theme.author_color};
                    position: absolute;
                    content: "";
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    background-image: linear-gradient(var(--border), var(--border)), linear-gradient(var(--border), var(--border)), linear-gradient(var(--border), var(--border)), linear-gradient(var(--border), var(--border)), linear-gradient(var(--border), var(--border)), linear-gradient(var(--border), var(--border));
                    background-repeat: no-repeat;
                    background-size: 3em 1em, 1em 100%, 3em 1em, 3em 1em, 1em 100%, 3em 1em;
                    background-position: left bottom, left top, left top, right bottom, right top, right top;
                    }
                .square-brackets-quote cite {
                    color: ${template.theme.author_color};
                    display: block;
                    font-size:small;
                    font-style: normal;
                    text-align: right;
                    text-transform:uppercase;
                    }
                 * {
                    position: relative;
                    z-index: 1;
                    }
                
            
            `;
    },
    structure: (template) => {
      return `<div class="square-brackets-quote">
                        <blockquote>
                            <p>${template.quote}</p>
                            <cite>${
                              template.author === "Unknown"
                                ? "Anonymous"
                                : template.author
                            }</cite>
                        </blockquote>
                    </div>`;
    },
  },
  churchill: {
    style: (template) => {
      return `* {
                box-sizing: border-box;
              }

              .main-container {
                position: relative;
                min-width: 600px;
                margin: 20px;
                display: inline-block;
                text-align: center;
                font-family:customFont,Arial,Helvetica,sans-serif;
                color: var(--color);

                --color: ${template.theme.quote_color};
                --author-color: ${template.theme.author_color};
                --border-color: ${template.theme.author_color};
                --border-size: 2px;
                --bg-color: ${template.theme.bg_color};
                --circle-size: 15px;
                ${template.animation.animation};
              }
              ${template.animation.keyframes}
              .title-container {
                  position: absolute;
                  width: 100%;
                  top: -12px;
                  z-index: 1;
              }

              .title-container span {
                  background: var(--bg-color);
                  background-size: 600px;
                  background-repeat: no-repeat;
                  background-position: center;
                  color: var(--author-color);
                  padding: 2px 10px;
                  font-size: 20px;
              }

              p {
                padding: 15px;
                font-size: 17px;
                color: var(--color);
              }

              .quote-container {
                padding: 10px;

                border: var(--border-size) solid var(--border-color);
                background:
                radial-gradient(circle at right top, transparent 0px, var(--border-color) 0 calc(var(--circle-size) + var(--border-size)), transparent calc(var(--circle-size) + var(--border-size) + 1px)) right top / 51% 51%,
                radial-gradient(circle at left top, transparent 0px, var(--border-color) 0 calc(var(--circle-size) + var(--border-size)), transparent calc(var(--circle-size) + var(--border-size) + 1px)) left top / 51% 51%,
                radial-gradient(circle at right bottom, transparent 0px, var(--border-color) 0 calc(var(--circle-size) + var(--border-size)), transparent calc(var(--circle-size) + var(--border-size) + 1px)) right bottom / 51% 51%,
                radial-gradient(circle at left bottom, transparent 0px, var(--border-color) 0 calc(var(--circle-size) + var(--border-size)), transparent calc(var(--circle-size) + var(--border-size) + 1px)) left bottom / 51% 51%,
                var(--bg-color);
                background-repeat: no-repeat;
                background-clip: border-box;
                background-origin: border-box;

                mask: radial-gradient(
                  circle at right top,
                  transparent var(--circle-size),
                  var(--border-color) calc(var(--circle-size) + 1px)
                ) right top / 51% 51%,
                radial-gradient(
                  circle at left top,
                  transparent var(--circle-size),
                  var(--border-color) calc(var(--circle-size) + 1px)
                ) left top / 51% 51%,
                radial-gradient(
                  circle at right bottom,
                  transparent var(--circle-size),
                  var(--border-color) calc(var(--circle-size) + 1px)
                ) right bottom / 51% 51%,
                radial-gradient(
                  circle at left bottom,
                  transparent var(--circle-size),
                  var(--border-color) calc(var(--circle-size) + 1px)
                ) left bottom / 51% 51%;

                -webkit-mask: radial-gradient(
                  circle at right top,
                  transparent var(--circle-size),
                  var(--border-color) calc(var(--circle-size) + 1px)
                ) right top / 51% 51%,
                radial-gradient(
                  circle at left top,
                  transparent var(--circle-size),
                  var(--border-color) calc(var(--circle-size) + 1px)
                ) left top / 51% 51%,
                radial-gradient(
                  circle at right bottom,
                  transparent var(--circle-size),
                  var(--border-color) calc(var(--circle-size) + 1px)
                ) right bottom / 51% 51%,
                radial-gradient(
                  circle at left bottom,
                  transparent var(--circle-size),
                  var(--border-color) calc(var(--circle-size) + 1px)
                ) left bottom / 51% 51%;
                mask-repeat: no-repeat;
                -webkit-mask-repeat: no-repeat;
              }`;
    },
    structure: (template) => {
      return `<div class="main-container">
                <div class="title-container">
                  <span>${
                    template.author === "Unknown"
                      ? "Anonymous"
                      : template.author
                  }</span>
                </div>
                <div class="quote-container">
                  <blockquote>
                    <p><i>
                        ${template.quote}
                      </i></p>
                  </blockquote>
                </div>
              </div>`;
    },
  },
  samuel: {
    style: (template) => {
      return `.main {
                position: relative;
                display: inline-block;
                margin: 1em;
                min-width:600px;
                font-family:customFont,Arial,Helvetica,sans-serif;
                position: relative;
                ${template.animation.animation};
              }
              ${template.animation.keyframes}
              .quote {
                background: ${template.theme.bg_color};
                font-size:16px;
              }
              .quote::before {
                content: "";
                position: absolute;
                top: -6px;
                left: -6px;
                z-index: -1;
                width: calc(100% + 12px);
                height: calc(100% + 12px);
                background: ${template.theme.author_color};
                --border-size: 6px;
                clip-path: polygon(0% 0%, 96% 0, 97% var(--border-size), calc(100% - var(--border-size)) var(--border-size), calc(100% - var(--border-size)) 18%, 100% 25%, 100% 100%, 87% 100%, 0 100%, 0 75%, var(--border-size) 82%, var(--border-size) calc(100% - var(--border-size)), 3% calc(100% - var(--border-size)), 4% 100%, 60% 100%, 63% calc(100% - var(--border-size)), calc(100% - var(--border-size)) calc(100% - var(--border-size)), calc(100% - var(--border-size)) 52%, 100% 50%, 100% 14%, 100% 0, 40% 0, 37% var(--border-size), var(--border-size) var(--border-size), var(--border-size) 48%, 0 50%);
              }
              blockquote {
                margin: 0;
                font-size:16px;
                padding: 1em;
                color: ${template.theme.quote_color};
              }
              cite {
                display: block;
                font-style: italic;
                text-align: right;
                color: ${template.theme.author_color};
              }
              cite::before {
                content: "- ";
              }
              `;
    },
    structure: (template) => {
      return `<div class="main">
                  <div class="quote">
                    <blockquote>
                      <p>${template.quote}</p>
                      <cite>${
                        template.author === "Unknown"
                          ? "Anonymous"
                          : template.author
                      }</cite>
                    </blockquote>
                  </div>
                </div>`;
    },
  },
  zues: {
    style: (template) => {
      return `

        .container{
            background:#000;
            width:550px;
            height:auto;
            padding:30px 20px 40px 40px;
            font-family:customFont,Arial,Helvetica,sans-serif;
            ${template.animation.animation};
        }
        ${template.animation.keyframes}
        
              .quote4{
                background:#000;
                    color:#fff;
                    width:450px;
                    text-align:justify;
                    border-left:  thick double #C08552;
                    border-right:  thick double #C08552;
                    padding:40px 10px;
                    position:relative;
                    transform: skew(-.312rad);
                    height:auto;
                  }

                  .quote4::before, .quote4::after{
                    position:absolute;
                    font-size:105px;
                    background:#000;
                    display:block;
                    height:30px;
                    width:45px;
                    text-align:center;
                    color:#DAB49D;
                    left:0;
                    right:0;
                    margin:auto;
                    z-index:100;
                  }

                  .quote4::before{
                    content:"“";
                    top:-10px;
                    line-height:80px;
                    z-index:1;
                  }

                  .quote4::after{
                    content:"”";
                    bottom:-25px;
                    line-height: 70px;
                  }

                  .quote4 .first, .quote4 .txt{
                    width:90%;
                    margin:auto;
                    transform: skew(.312rad);
                  }
                  .quote4 .first{
                    margin-top:10px;
                    width:100%;
                    color: #DAB49D;
                    font-size:14px;  
                    text-transform:uppercase;
                    letter-spacing:1px;
                  }
                  .quote4 .txt{
                    color:#F3E9DC;
                    font-size:16px;
                    font-family: 'Roboto Slab', serif;  
                    
                  }

                  .quote4 .from{
                    text-align:center;
                    margin-top:15px;
                    font-size:13px;
                    color: #5E3023;
                  }

                  .quote4 .border::before, .quote4 .border::after{
                    content:"";
                    width:280px;
                    height:3px;
                    position:absolute;
                    display:block;
                    left:0;
                    right:0;
                    margin:auto;
                  }

                  .quote4 .border::after{
                    border-bottom: 2px solid #C08552;  
                    bottom: 0px;
                  }

                  .quote4 .border::before{
                    border-top: 2px solid #C08552; 
                    top:0px;
                  }`;
    },
    structure: (template) => {
      return `
        <div class="container">
            <div class="quote4">
                  <div class="border"></div>
                  <div class="txt">${template.quote}</div>
                  <div class="from">${
                    template.author === "Unknown"
                      ? "Anonymous"
                      : template.author
                  }</div>
            </div>
        </div>
        `;
    },
  },
  neon: {
    style: (template) => {
      return `
      * {
        box-sizing: 
      }

      .main-container {
        position: relative;
        display: flex;
        justify-content-center;
        margin: 1em;
        border-radius: 35px;
        border-top: 5px solid;
        border-right: 5px solid;
        border-color: aliceblue;
        box-shadow: 7px 7px 7px #ff319b;
        ${template.animation.animation};
      }
      ${template.animation.keyframes}

      .quote-container {
        background: ${template.theme.bg_color};
        border-radius: 35px;
      }

      .quote-container h3 {
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 35px;
        font-weight: 900;
        color: ${template.theme.quote_color};
        animation: neon 1s ease-in-out infinite
        alternate;
      }
      
      .quote-container p {
        display: block;
        padding-left: 20px;
        color: ${template.theme.author_color};
        font-weight: 400;
        animation: neon 1s ease-in-out infinite
        alternate;
      }

      @keyframes neon {
        from {
          text-shadow: 
          0 0 4px #fff,
          0 0 10px #fff,
          0 0 30px #ff319b,
          0 0 50px #ff319b,
          0 0 70px #ff319b,
          0 0 90px #ff319b;
        }
        to {
          text-shadow: 
          0 0 2px #fff,
          0 0 5px #fff,
          0 0 15px #ff319b,
          0 0 25px #ff319b,
          0 0 35px #ff319b,
          0 0 45px #ff319b;
        }
      }

      @media only screen and (max-width: 600px) {
        .quote-container {
          width: 100%;
        }
      }
      `;
      ;
    },
    structure: (template) => {
      return `<div class="main-container">
                  <div class="quote-container">
                      <h3>${template.quote}</h3>
                      <p>${
                        template.author === "Unknown"
                          ? "Anonymous"
                          : template.author
                      }</p>
                  </div>
                </div>` 
      ;
    },
  },
};

module.exports = layouts;
