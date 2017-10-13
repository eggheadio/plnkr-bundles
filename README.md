# How to create a Plnkr Bundle
`jspm install npm:babel-plugin-transform-decorators-legacy`
`jspm build babel-plugin-transform-decorators-legacy decorators.js`

This creates a `decorators.js` file:

Git commit and push to master, now you load this file from:
[https://rawgit.com/eggheadio/plnkr-bundles/master/decorators.js](https://rawgit.com/eggheadio/plnkr-bundles/master/decorators.js)

## Usage:
```js
SystemJS.config({
      map: {
        "babel-plugin-transform-decorators-legacy": "https://babel-zlnxaopqtf.now.sh/decorators.js"     
      },      
      transpiler: "plugin-babel",
      meta: {
        "*.js": {
          esModule: true,
          babelOptions: {
            react: true,
            plugins: ['babel-plugin-transform-decorators-legacy'],
          }
        }
      }
    })
```


## Why?
Mainly because babel plugins/presets aren't bundled