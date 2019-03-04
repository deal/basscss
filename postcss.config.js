const path = require('path')

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-custom-media')(),
    require('postcss-calc')(),
    require('postcss-reporter')(),
    require('postcss-custom-properties')(),
    require('postcss-discard-comments')(),
          /**
       * IE11 and Edge do not understand the :any-link selector so any css blocks using the selector are ignored.
       * This can happen during minification when css classes are merged
       * e.g. a {text-decoration: none}, :any-link {text-decoration: none} => a,:any-link {text-decoration: none}
       */
    require('postcss-pseudo-class-any-link')({ preserve: false }),
    require('autoprefixer')(),
    require('postcss-preset-env')({
      // default is stage 2, but we need this due to nesting @media queries inside classes
      stage: 0
    })
  ]
}
