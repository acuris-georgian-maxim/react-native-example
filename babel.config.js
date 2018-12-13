module.exports = {
  env: {
    test: {
      presets: ['react-native', '@babel/preset-flow'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
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
