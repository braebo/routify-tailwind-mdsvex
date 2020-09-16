const path = require('path');
const { mdsvex } = require('mdsvex');
const { postcss, typescript } = require('svelte-preprocess');
module.exports = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    typescript(),
    mdsvex({
      layout: {
        primary: path.join(__dirname, 'src', 'layouts', 'Primary.svelte'),
        secondary: path.join(__dirname, 'src', 'layouts', 'Secondary.svelte'),
        _: path.join(__dirname, 'src', 'layouts', 'Global.svelte'),
      },
      extensions: ['.md', '.svx'],
    }),
    postcss(),
  ],
};
