/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(options => ({ addVariant, e }) => {
  addVariant('retina', '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)')
})
