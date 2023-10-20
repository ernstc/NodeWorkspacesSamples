import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'index.ts',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs',
		sourcemap: 'inline'
	},
	plugins: [
		resolve(),
		typescript({ sourceMap: false, inlineSources: false }),
	]
};
