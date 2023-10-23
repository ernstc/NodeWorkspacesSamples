import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const plugins = [
    resolve(),
    typescript({
        outputToFilesystem: false,
    })
];


export default {
    input: 'index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true
    },
    plugins
};
