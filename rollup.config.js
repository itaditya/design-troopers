import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import flow from 'rollup-plugin-flow';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";

const configRollup = {
  input: 'src/index.js',
  output: {
    file: 'dist/es/index.js',
    format: 'es',
  },
  plugins: [
    flow(),
    resolve(),
    postcss({
      extract: 'dist/es/styles/style.css',
      minimize: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    terser(),
  ],
  external: ['react', 'react-dom'],
};

export default configRollup;
