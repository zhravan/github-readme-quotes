## Available fonts

You can add fonts to your templates without any manual customization.

Use the `?font=FONT_NAME` parameter with one of the bundled font names:

- `default`
- `gabrielle`
- `Redressed`
- `Calligraffitti`
- `Architect`
- `PixelifySans`

For example:

```md
![Quote](https://github-readme-quotes-bay.vercel.app/quote?font=Redressed)
```

When combining a font with other options, append it with `&font=FONT_NAME`:

```md
![Quote](https://github-readme-quotes-bay.vercel.app/quote?theme=dark&layout=socrates&font=gabrielle)
```

The endpoint accepts registered font keys, not arbitrary remote font URLs in
the query string. To add another font, start from a source CSS URL such as a
Google Fonts URL:

```txt
https://fonts.googleapis.com/css2?family=Redressed
```

Use that CSS to find the font file, convert the font file to embedded base64
font data, register it in [`fonts.js`](./fonts.js), use a stable parameter key,
and add a preview example below so README users can copy the correct value.

### Fonts

- Default <br>

![Quote](https://github-readme-quotes-bay.vercel.app/quote?theme=dark)

- Gabrielle <br>

![Quote](https://github-readme-quotes-bay.vercel.app/quote?theme=dark&font=gabrielle)

- Redressed <br>

![Quote](https://github-readme-quotes-bay.vercel.app/quote?theme=dark&font=Redressed)

- Calligraffitti <br>

![Quote](https://github-readme-quotes-bay.vercel.app/quote?theme=dark&font=Calligraffitti)

- Architect <br>

![Quote](https://github-readme-quotes-bay.vercel.app/quote?theme=dark&font=Architect)

- PixelifySans <br>

![Quote](https://github-readme-quotes-bay.vercel.app/quote?theme=dark&font=PixelifySans)
