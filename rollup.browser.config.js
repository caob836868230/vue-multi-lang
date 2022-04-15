const pkg = require('./package.json');
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.js',
  output: {
    name: 'vueMultiLang',
    file: pkg.browser,
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      presets: [
        [
          "@babel/preset-env",
          {
            "modules": false,
            "targets": {
              "browsers": [
                "last 2 versions",
                "Android >= 4.4",
                "ios >= 7"
              ]
            }
          }
        ]
      ],
      plugins: [
        ["@babel/plugin-transform-runtime", {
          "corejs": {
            "version": 3
          }
        }]
      ]
    }),
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  ]
};