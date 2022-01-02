/* global module */
/* eslint no-undef: "error" */
module.exports = {
  content: ['index.html'],
  css: ['./dist/css/main.css'],
  safelist: ['carousel-item-start', 'carousel-item-end', 'carousel-item-next', 'carousel-item-prev'],
  output: './build/css/',
  keyframes: true,
  rejected: true,
  variables: true
}
