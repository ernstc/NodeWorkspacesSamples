import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';

const plugins = [
	resolve(),
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
	input: 'index.ts',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs',
		sourcemap: 'inline'
	},
	plugins
};
