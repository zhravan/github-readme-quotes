const themes = require("../../themes/themes");
const animations = require("../../animations/animation");
const layouts = require("../../layouts/layout");
const quoteService = require("../services/quotesService");
const fonts = require("../../fonts/fonts");

const quoteController = async (req, res, next) => {

  try {
    let theme = themes[req.query.theme] ? themes[req.query.theme] : themes["default"];

    const fontColor = req.query.fontColor;
    if (fontColor) {
      theme.quote_color = fontColor;
    }
    const bgColor = req.query.bgColor;
    const bgSource = req.query.bgSource || '';
    if (bgSource === 'unsplash') {
      theme.bg_color = 'transparent';
    } else if (bgColor) {
      theme.bg_color = bgColor;
    }

    let borderColor = req.query.borderColor || 'rgba(0, 0, 0, 0.2)';

    let animation = animations[req.query.animation] ? animations[req.query.animation]
      : animations["default"];

    let layout = layouts[req.query.layout] ? layouts[req.query.layout]
      : layouts["default"];

    let quotesUrl = req.query.quotesUrl || '';

    let quoteCategory = req.query.quoteCategory || '';

    let font = fonts[req.query.font] ? fonts[req.query.font] : fonts['default'];

    let quoteType = req.query.quoteType || '';
    let unsplashQuery = req.query.unsplashQuery || '';

    let quoteObject = {
      theme,
      animation,
      layout,
      quotesUrl,
      quoteCategory,
      font,
      quoteType,
      borderColor,
      bgSource,
      unsplashQuery
    }

    let svgResponse = await quoteService.getQuote(quoteObject);

    res.setHeader("Content-Type", "image/svg+xml");

    res.header(
      "Cache-Control",
      "no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate"
    );
    res.header("Pragma", "no-cache");
    res.header("Expires", "-1");
    res.send(svgResponse);

  } catch (error) {
    console.error(error);
    res.send({
      name: error.name,
      message: error.message,
    });

  }
};

const imageController = async (req, res, next) => {
  try {
    const responseURL = await quoteService.getUnsplashImage(req.query.unsplashQuery);
    const escapeHtml = require('escape-html');
    const safeUrl = escapeHtml(responseURL);
    res.send({ url: safeUrl });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      name: error.name,
      message: error.message,
    });
  }
};


module.exports = {
  quoteController,
  imageController
};
