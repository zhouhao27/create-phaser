# A simple boilerplate with Phaser 3, TypeScript and Webpack 4

## Steps to create the boilerplate

1. Webpack

```
yarn add -D webpack webpack-cli webpack-dev-serve html-webpack-plugin
```

2. TypeScript

```
yarn add -D typescript ts-loader expose-loader
```

3. Phaser

```
yarn add phaser
```

4. Create tsconfig.json

```
{
  "compilerOptions": {
    "target": "ES2016",
    "module": "CommonJS",
    "sourceMap": true,
    "noImplicitAny": false,
    "strict": false
  }
}
```

5. Create webpack.config.js

6. Change package.json to add scripts

```
  "scripts": {
    "dev": "webpack --mode development && webpack-dev-server --mode development",
    "build": "webpack --mode production && webpack-dev-server --mode production"
  },
```

7. Add launch.json in .vscode to enable debugging

```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Phaser (TypeScript) Debug",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}",
      "skipFiles": [
        "node_modules/**"
      ],
      "sourceMapPathOverrides": {
        "webpack:///./*": "${webRoot}/*"
      }
    }
  ]
}
```

The key is to add this in webpack.config.js:
```
devtool: 'source-map',
```

> But after launch the debugger need to click "Restart" make the breakpoint works.

## How to use

```
> git clone https://github.com/zhouhao27/phaser3-typescript-webpack4 <YourProjectName>

> cd <YourProjectName>

> yarn

> yarn dev
```

## TODO:

Add a phaser-cli tool.

## References

[Phaser 3 and TypeScript](https://github.com/digitsensitive/phaser3-typescript)

[Using ESLint and Prettier in a TypeScript Project](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)

## Tools

[TexturePacker (free version) for sprite atlases (JSON hash)](https://www.codeandweb.com/texturepacker)

[BFXR](https://www.bfxr.net/)

[Audiosprite](https://github.com/tonistiigi/audiosprite)

[Paint.net](https://www.getpaint.net/)



