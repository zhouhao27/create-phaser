# Steps to create this boilerplate

## Create project

`yarn init -y`

## Add Webpack and related package

`yarn add -D webpack webpack-cli webpack-dev-server`

## Add babel

`yarn add -D @babel/core @babel/preset-env babel-loader`

## Add Webpack plugin

`yarn add -D html-webpack-plugin`

## Add .babelrc

```
{
  "presets": ["@babel/preset-env"]
}
```

## Create a template index.html in template folder

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Phaser</title>
</head>
<body>
  
</body>
</html>
```

## Create config for Webpack `webpack.config.js`

## Package.json, add:

```
  "scripts": {
    "dev": "webpack-dev-server --progress --mode development",
    "build": "webpack --progress --mode production"
  },
```

## Add phaser

`yarn add phaser`

## Add source code

`mkdir src`

`touch src/index.js`

**src folder**

.

├── index.js

├── scenes

│   ├── Boot.js

│   ├── Game.js

│   └── index.js

# How to use

```
git clone https://github.com/zhouhao27/phaser3-es6-webpack4-demo.git <YourProjectName>

cd <YourProjectName>

yarn
```

# Debug in VS Code

Click **Phaser Debug** in VS Code Debug tab. Make sure you run the app first by:

`yarn dev`

# Reference

https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-webpack-4-e528a6b3fc16

https://github.com/rafaeldelboni/phaser3-es6-webpack4

http://codetuto.com/2018/02/getting-started-phaser-3-es6-create-boomdots-game/









