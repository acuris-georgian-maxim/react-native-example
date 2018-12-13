module.exports = {
  env: {
    test: {
      presets: ['react-native', '@babel/preset-flow'],
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-optional-chaining',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-export-default-from',
        ['@babel/plugin-proposal-decorators', { legacy: true }]
        [
          'module-resolver',
          {
            alias: {
              'react-apollo':
                './node_modules/react-apollo/react-apollo.browser.umd.js'
            }
          }
        ]
      ]
    },
    production: {
      presets: ['react-native']
    },
    development: {
      presets: ['react-native']
    }
  }
};
