# Contributing to [github-readme-quotes](https://github.com/zhravan/github-readme-quotes)

Your input is really important for the project. Feel free to contribute to the project whether it be:

- [Reporting an issue](https://github.com/zhravan/github-readme-quotes/issues/new/choose)
- [Discussing the current state of the code](https://github.com/zhravan/github-readme-quotes/issues/new/choose)
- [Submitting a fix](https://github.com/zhravan/github-readme-quotes/issues/new/choose)
- [Proposing new features](https://github.com/zhravan/github-readme-quotes/issues/new/choose)

## All Changes Happen Through Pull Requests

Pull requests are the best way to propose changes. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add some tests' example.
3. Make sure your Pull requests have detailed information.
4. Issue that pull request!

## Space where you contribute in the project

| Sl No  | Feature Name  | Description  |
|:-:|:-:|:-:|
| 1 | [Colorful Themes Contribution](#themes-contribution) | Feel free to contribute to creating themes |
| 2 | [Design Layout Contribution](#layout-contribution) | Feel free to contribute to new design card layouts |
| 3 | [Quotes Based on Gist file](#quote-based-on-github-gist-contribution) | Feel free to contribute to GitHub Gists |
| 4 | [Quotes Based on Categories](#category-based-quotes) | Feel free to contribute to adding quotes to categories and new categories with quotes itself |
| 5 | [Custom Fonts for Quotes](#custom-fonts) | Feel free to contribute to adding custom fonts |


## Themes Contribution

GitHub Readme Quotes would appreciate your contribution to new themes!

All you need to do is edit [themes/themes.js](./src/themes/themes.js) file and add your theme at the end of the file.

While creating the pull request make sure to add a screenshot of your theme. That would help us!!

## Layout Contribution

GitHub Readme Quotes would appreciate your contribution to new layouts!

All you need to do is edit [layouts/layout.js](./src/layouts/layout.js) file and add your layout at the end of the file.

Please consider the following steps if you are planning to contribute a new layout:

1. Provide a screenshot of your layout in your Pull Request.
2. The layout has mainly two parts: 
    - Style(CSS of the layout)
    - Structure(HTML of the layout)
3. Make sure you add your layout in this format:
<pre>
    layout_name:{
        style:()=>{
            `CSS of the Layout`
        }
        structure:()=>{
            `HTML of the Layout`
        }
    }
</pre>

Check the existing [layouts](./src/layouts/layout.js) for a better understanding.

<br>

## Quote based on GitHub Gist Contribution
#### Follow the steps to provide your own custom quotes,
- Use the template provided at [here](./customQuotes/quotes.json) and write your own file with multiple quotes.
- Save the file in the repository in any (public) directory or anywhere in the internet.
- Get the link of the file. 
- Use `?quotesUrl=URL` as shown below
  - ```
    ![Quote](https://github-readme-quotes-bay.vercel.app/quote?quotesUrl=https://github.com/ShubhKotnala/github-readme-quotes/blob/custom-quotes/customQuotes/quotes.json)
    ```

<br>


## Category based Quotes
You can also provide a category to fetch the list of quotes based on certain category and a random quote will be generated for you based on category you specify.

#### Follow the steps to add quotes to category,
- Add the quote you want in this [file](./customQuotes/category.json) based on the category it falls into.
- If the category you want doesn't exist, feel free to add the category in this [file](./customQuotes/category.json) and add the quotes.
- Use `quoteCategory=categoryName` as shown below
  - ```
    ![Quote](https://github-readme-quotes-bay.vercel.app/quote?quoteCategory=motivational)
    ```

<br>


## Custom Fonts
You can provide fonts data to show the quotes in the font. 

#### Follow the steps to add custom fonts for the quotes,
##### Server
- Select the font from [Google fonts](https://fonts.google.com)
- Get the CSS link of the font
  - Example https://fonts.googleapis.com/css2?family=Redressed
- Generate BASE 64 font data from using any tool of your choice, or using [this](https://amio.github.io/embedded-google-fonts/) tool
-  Add the font you want in this [file](./src/fonts/fonts.js) in the following pattern, 
   - `FONT_NAME:{
    fontFamily: 'family', 
    src: 'BASE_64 FONT DATA'
  }`
  
- Use `font=FONT_NAME` as shown below
  - ```
    ![Quote](https://github-readme-quotes-bay.vercel.app/quote?font=FONT_NAME)
    ```
##### Frontend

-  Add the font you want in this [file](./frontend/src/util/fonts/index.js) in the following pattern, 
   - `FONT_NAME:{
    fontFamily: 'family', 
    src: 'BASE_64 FONT DATA'
  }`
- Add the FONT_NAME in the `fonts` array in the [file](./frontend/src/config/cardTemplate/index.js)

<br>


## Any contributions you make will be under the MIT Software License

In short, when you submit changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report issues/bugs using GitHub's [issues](https://github.com/zhravan/github-readme-quotes/issues)

We use GitHub issues to track public bugs or other issues regarding the project. Report an issue by [opening a new issue](https://github.com/zhravan/github-readme-quotes/issues/new/choose); it's that easy!

If the issue is a BUG make sure to follow the guidelines provided in the Bug Report.

You can follow the guidelines below for your Bug Report

### Bug Reports (Template Available in the Issues): 

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Share the snapshot, if possible.
  - GitHub Readme Quotes' live link
- What actually happens
- What you expected would happen
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### Feature Request

For a new feature request,go to the [issues](https://github.com/zhravan/github-readme-quotes/issues) section and create a feature request.
<br>

You can follow the guidelines below for a new feature request:

**Great Feature Requests** tend to have:

- A quick idea summary
- What & why you wanted to add the specific feature
- Additional Context like images, links to resources to implement the feature etc etc.


## License

By contributing, you agree that your contributions will be licensed under its [MIT License](./LICENSE).
