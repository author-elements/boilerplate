import buble from 'rollup-plugin-buble'
import {uglify} from 'rollup-plugin-uglify'
import {terser} from 'rollup-plugin-terser'

const filename = 'author-element'
const input = `${filename}.js`
const name = 'AuthorElement'
const outdir = './dist'
const format = 'iife'
const sourcemap = true

export default [
	// Standard (Minified ES6)
	{
		input,
		plugins: [
			terser()
		],
		output: [{
			name,
			file: `${outdir}/${filename}.min.js`,
			format,
			sourcemap
		}]
	},

	// Legacy (Transpiled & Minified ES5)
	// This is only relevant to browsers.
	{
		input,
		plugins: [
			buble(),
			uglify()
		],
		output: [
			{
				name,
				file: `${outdir}/${filename}.es5.min.js`,
				format,
				sourcemap
			}
		]
	},

	// Development: Standard (Unminified ES6)
	{
		input,
		plugins: [],
		output: [
			{
				name,
				file: `${outdir}/${filename}.js`,
				format,
				sourcemap
			},
		]
	},

	// Development: Legacy (Transpiled & Unminified ES5)
	// This is only relevant to browsers.
	{
		input,
		plugins: [
			buble()
		],
		output: [
			{
				name,
				file: `${outdir}/${filename}.es5.js`,
				format,
				sourcemap
			}
		]
	}
]
