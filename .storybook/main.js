const path = require('path');

module.exports = {
  stories: [
    './**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['postcss-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.plugins.push(
      require('unplugin-icons/webpack')({
        compiler: 'jsx',
        jsx: 'react',
      }),
    );
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, '../components'),
      hooks: path.resolve(__dirname, '../hooks'),
    };

    return config;
  },
};
