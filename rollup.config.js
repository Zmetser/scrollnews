// Import rollup plugins
import { rollupPluginHTML as html } from '@web/rollup-plugin-html'
import { copy } from '@web/rollup-plugin-copy'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
// import minifyHTML from 'rollup-plugin-minify-html-literals'

export default {
  plugins: [
    // Entry point for application build; can specify a glob to build multiple
    // HTML files for non-SPA app
    html({
      input: 'index.html'
    }),
    // Resolve bare module specifiers to relative paths
    nodeResolve(),
    // Minify HTML template literals
    // minifyHTML(),
    // Minify JS
    terser({
      ecma: 2021,
      module: true,
      warnings: true
    }),
    // Optional: copy any static assets to build directory
    copy({
      patterns: ['styles/**/*']
    })
  ],
  output: {
    dir: 'docs'
  },
  preserveEntrySignatures: 'strict'
}
