const { watch, src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const autoReset = require('postcss-autoreset');
const fontPath = require('postcss-fontpath');

const css = () => {
  const processors = [
    autoReset({
      reset: {
        margin: 0,
        padding: 0,
        borderRadius: 0,
      },
    }),
    autoprefixer,
    cssnano,
    fontPath({
      formats: [
        { type: 'embedded-opentype', ext: 'eot' },
        { type: 'woff2', ext: 'woff2' },
        { type: 'woff', ext: 'woff' },
        { type: 'truetype', ext: 'ttf' },
      ],
    }),
  ];

  return src('./src/styles/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss(processors))
    .pipe(dest('./src/styles'));
};

exports.default = () => {
  css();
  watch('src/styles/*.scss', css);
  watch('src/styles/fonts/*.scss', css);
  watch('src/styles/blocks/*.scss', css);
  watch('src/components/', css);
};
