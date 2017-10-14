# How to create a Plnkr Bundle

`npm i -g jspm@beta`

Follow these steps to install/build a umd bundle:

1. `jspm install npm:babel-plugin-transform-decorators-legacy`
2. `jspm build babel-plugin-transform-decorators-legacy babel-plugin-transform-decorators-legacy.js`

This creates a `babel-plugin-transform-decorators-legacy.js` file:

Git commit and push to master, now you load this file from:

[https://rawgit.com/eggheadio/plnkr-bundles/master/babel-plugin-transform-decorators-legacy.js](https://rawgit.com/eggheadio/plnkr-bundles/master/babel-plugin-transform-decorators-legacy.js)

## Usage:
```js
SystemJS.config({
      map: {
        "plugin-babel": "https://unpkg.com/systemjs-plugin-babel@0.0.25/plugin-babel.js",
        "systemjs-babel-build": "https://unpkg.com/systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js",
        "babel-preset-react": "https://rawgit.com/eggheadio/plnkr-bundles/master/babel-preset-react.js",
        "babel-plugin-transform-decorators-legacy": "https://rawgit.com/eggheadio/plnkr-bundles/master/babel-plugin-transform-decorators-legacy.js", 
        "react": "https://unpkg.com/react@16.0.0/umd/react.development.js",
        "react-dom": "https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"
      },
      
      transpiler: "plugin-babel",
      meta: {
        "*.js": {
          esModule: true,
          babelOptions: {
            presets: ["babel-preset-react"],
            plugins: ["babel-plugin-transform-decorators-legacy"]
          }
        }
      }
    })
```


## Why?
Mainly because babel plugins/presets aren't bundled

# ⚠️ Warning⚠️

Plugins/presets/libs that depend on `process.env.FOO` (such as "babel-plugin-react-app") will break your browser build. Until
we find a workaround/hack for injecting a `process`, just avoid
them.