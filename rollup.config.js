const pkg = require('./package.json');
import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  output: [
    { file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};