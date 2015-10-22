var babelConfig = require('./test/wallaby-babel-config')

module.exports = function (wallaby) {
  return {
    files: [
      'api/**/*.js',
      '!api/**/*.specs.js',
      'application/**/*.js',
      '!application/**/*.specs.js',
      'domain/**/*.js',
      '!domain/**/*.specs.js',
      'test/specs-helper.js'
    ],
    tests: [
      'api/**/*.specs.js',
      'application/**/*.specs.js',
      'domain/**/*.specs.js'
    ],
    env: {
      type: 'node'
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel(babelConfig)
    }
  }
}
