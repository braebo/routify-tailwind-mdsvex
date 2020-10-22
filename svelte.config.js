const path = require('path');
const { mdsvex } = require('mdsvex');
const { postcss } = require('svelte-preprocess');
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    sveltePreprocess(),
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
