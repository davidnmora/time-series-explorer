# Interactive "scrollytelling article" for mastercard.

# For non-web developers:

This app isn't perfectly setup for non-dev editing, but at least some substantial efforts were made to ensure commonly editable things can be changed without too much trouble.

## How to change...
### **The MRLI data stuff**: Edit `src/config.json`. 

From there, you can search some of the data names if you want to see how they're being used in the app.

### **Map(box) stuff**: see `src/mapConfig.js`

If interested, the actual API call is made via `useCartoData`, which itself relies on `DataFetcher.js`, a JS helper class used throughout CORI's projects for API calls to CARTO.

### **Text / content / order**:
Open `src/App.js`. From there you'll see the exact high level react components that make up the sections of the app, in order.

You can rearrange, delete, or visit their individual files to understand each one more.

The easiest file to edit is going to be `src/article-components/TextSections.js` which contains each of the text sections, such as `IntroText`.


# For web developers:

Pretty run-of-the-mill React app: styled-components (see ya, `*.css` files!), purely functional components with hooks, prettier auto linting.

Specific libraries:
* react-scrollama
* mapbox
* some declarative, low level dataviz generation using non-DOM D3 utils
* gh-pages deploy

# TLDR All you need: `yarn install`, `yarn start`, `yarn deploy` (for gh-pages)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
