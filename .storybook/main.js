const path = require('path')
const aliasPaths = require('../tsconfig.json').compilerOptions.paths

function stripAsterix(key) {
  if(key.slice(-2) === '/*') {
    return key.slice(0, -2)
  } else if (key.slice(-1) === '/') {
    return key.slice(0, -1)
  } else {
    return key
  }
}

const aliases = Object.keys(aliasPaths).reduce((acc, alias) => {
  acc[stripAsterix(alias)] = path.resolve(__dirname, `../${stripAsterix(aliasPaths[alias][0])}`)
  return acc
}, {})

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss'
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases
    }
    config.module.rules.push({
      test: /\.(s*)css$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, '../'),
    })

    return config
  }
}