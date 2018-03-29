# Resume v2
This is a rewrite of the resume template using new stuff I learned along the way.

![node version](https://img.shields.io/node/v/@codes-and-coffees/react-pkg.svg)
![npm version](https://img.shields.io/npm/v/@codes-and-coffees/react-pkg.svg)
![open issues](https://img.shields.io/github/issues/iamdevlinph/resume.svg)
![open prs](https://img.shields.io/github/issues-pr/iamdevlinph/resume.svg)
![code size](https://img.shields.io/github/languages/code-size/iamdevlinph/resume.svg)
![contributors](https://img.shields.io/github/contributors/iamdevlinph/resume.svg)

This uses the [React Kit](https://github.com/codesandcoffees/react-kit) as the base template which is based on [Create React App](https://github.com/facebook/create-react-app)

# Includes
- React v16
- Redux
- Redux-saga
- React-loadable
- React Router v4
- Webpack v3
- Ducks Pattern ["Official Proposal"](https://github.com/erikras/ducks-modular-redux)
- styled-components

# App Structure
```
resume/
  .vscode/
  build/
  config/
  public/
  scripts/
  src/
  --components/
  --containers
  --ducks/
  --routes/
  --sagas/
  --services/
  --App.js
  --index.js
  --registerServiceWorker.js
  --store.js
  package.json
  README.md
```
## src
### components
### containers
### ducks
### routes
### sagas
### services

# Getting Started
At the time of creating this project the following versions were used
```
node -v 7.10.1
npm -v 5.7.1
```
1. Clone the repository
```
git clone git@github.com:iamdevlinph/resume.git resume-app-folder
```
2. Go into the directory
```
cd resume-app-folder
```
3. Install the packages
```
npm run install
```

# Development

## Ducks Pattern

# Deployment

# Font and Icons
The font used in this project is just the [Open Sans](https://fonts.google.com/specimen/Open+Sans) from `Google Fonts`

[Fontello](http://fontello.com/) is used to manage the icons. Fontello uses the icons from different icon makers like `Font Awesome` and others.

Fontello allows us to only use the icons that we actually use, so it might look the icon selection in this project is very limited but we can expand it by adding the icons that are needed.

### Downloading icons
1. Go to [fontello](http://fontello.com/)
2. Import `public/fonts/fontello.config.json`. This contains the already selected icons in the project
![import config.json to fontello](https://res.cloudinary.com/dfrhytey3/image/upload/v1522301230/import_fontello_fkqezr.png)
3. This will pre-select the icons that are already included in the `config.json` file
4. Click on the icons that you want to add
5. Click `Download webfont` once you're done. This will download the `font files` and the `config.json` file
6. Replace the files found in the `public/fonts/` with the newly downloaded ones

### Adding the icons
Once you've downloaded the files they won't be automatically added to the css so we'd have to do this manually.
1. Open `fontello.svg`
2. Find the line of the icon you want to add. Let's take the icon `folder-open` as an example
```
<glyph glyph-name="folder-open" unicode="&#xe800;"
```
3. In the `unicode`. Copy the code after the `x` like `&#xe800` to `e800`
4. Open `public/fonts/fontello.css`
5. Add a new class like so  (I chose `icon-` as the prefix)
```
.icon-folder-open:before {content: '\e800'; }
```
6. And use the icon like so
```
<i className="icon-folder-open" />
```

A bit of a hassle, yes. But we'll end up with the icons that we actually use.

# Took inspiration from
- [Split Resume Template](http://demo.mutationmedia.net/SPLIT/)
- [Material CV/Resume Template](http://demo.deviserweb.com/cv/)
- [Responsive Timeline CSS](https://codepen.io/brady_wright/pen/NNOvrW)
- [Github Fork Ribbon CSS](https://github.com/simonwhitaker/github-fork-ribbon-css)

# Something to pitch in?

Feel free to open up a [pull request](https://github.com/iamdevlinph/resume/pulls) or an [issue](https://github.com/iamdevlinph/resume/issues/new)
