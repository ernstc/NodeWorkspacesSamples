import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';
import importContents from 'rollup-plugin-import-contents';


const plugins = [
	resolve(),
	importContents({
		rules: [
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				mode: "base64"
			},
			{
				test: /\.(png|jpg|gif)$/i,
				mode: "base64"
			},
			{
				test: /\.less$/i,
				mode: "less",
				minimize: true
			}
		]
	}),
	typescript({
		compilerOptions: {
			composite: false,
			declaration: false,
			declarationDir: undefined,
			declarationMap: false,
		},
	}),
	sourcemaps(),
];


export default {
	input: 'src/index.ts',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs',
		sourcemap: 'inline'
	},
	plugins
};
