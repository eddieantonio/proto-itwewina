import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    name: 'app',
  },
  plugins: [
    svelte({ include: 'src/**/*.svelte' }),
    resolve(),
    commonjs({
      namedExports: {
        'cree-sro-syllabics': ['sro2syllabics', 'syllabics2sro']
      }
    })
  ]
}
