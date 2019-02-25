const path = require('path')

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-custom-media')(),
    require('postcss-calc')(),
    require('postcss-reporter')(),
    require('postcss-custom-properties')(),
    require('postcss-discard-comments')(),
    require('autoprefixer')(),
    require('postcss-preset-env')({
      // default is stage 2, but we need this due to nesting @media queries inside classes
      stage: 0
    })
  ]
}
