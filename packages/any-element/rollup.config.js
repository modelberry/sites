/**
 * Rollup build package
 * See: https://github.com/rollup/rollup-starter-lib
 *
 */
import pluginTypescript from '@rollup/plugin-typescript'
import pluginCommonjs from '@rollup/plugin-commonjs'
import pluginNodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import pkg from './package.json'
import rootPkg from '../../package.json'

const moduleName = pkg.name.replace(/^@.*\//, '')
const author = rootPkg.author
const globals = {
  react: '*',
  'react-dom': '*',
  '@emotion/css': '*',
  '@emotion/react': '*',
  'react/jsx-runtime': '*',
}
const external = Object.keys(globals)

const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName} v${pkg.version}
   * Released under the ${rootPkg.license} license.
   */
  `

const plugins = [
  // so Rollup can find node modules
  pluginNodeResolve({
    preferBuiltins: true,
  }),
  // so Rollup can convert node modules to ES modules
  pluginCommonjs({
    extensions: ['.js', '.ts'],
  }),
  // so Rollup can convert TypeScript to JavaScript
  pluginTypescript({ tsconfig: 'tsconfig.json' }),
  json(),
]

export default [
  {
    external,
    input: './src/react.ts',
    output: [
      {
        banner,
        exports: 'named',
        file: `./build/react.mjs`,
        format: 'es',
        globals,
        sourcemap: false,
      },
      {
        banner,
        exports: 'named',
        file: `./build/react.cjs`,
        format: 'cjs',
        globals,
        sourcemap: false,
      },
    ],
    plugins,
  },
]
