const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'themeprovider-storybook/register',
  ],
  framework: '@storybook/react',
  staticDirs: [path.resolve(__dirname, '..', 'public')],
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '..', 'tsconfig.paths.json'),
        extensions: config.resolve.extensions,
      }),
    ]

    return config
  },
}
