import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';
import less from 'less';
import * as fs from 'fs';
import { createFilter } from '@rollup/pluginutils';



const requireRegex = /require\(['"](.*)['"]\)/;

const renderSync = (code, option) => {
    return less.render(code, option)
        .then(function (output) {
            return output.css;
        }, function (error) {
            throw error;
        })
};



function importContents(options = {}) {

	const filter = createFilter(
		options.include || ['**/*.ts*'], 
		options.exclude || 'node_modules/**'
	);

	const indent = 'indent' in options ? options.indent : '\t';

	return {
		name: 'transform-code',

		async transform(code, id) {
			if (!filter(id)) return;

			var match = requireRegex.exec(code);
			if (match) {
				do {
					// file content
					let content = await this.resolve(match[1], id);

					// load file content using fs
					let file = fs.readFileSync(content.id, 'utf8');

					// render less to css
					let css = await renderSync(file, options.option);
					css = css.replace(/\n/gm, '\\n');
					let genCode = `"${css}"`;

					// replace require match with generated code
					code = code.replace(match[0], genCode);
				}
				while (match = requireRegex.exec(code));

				return {
					code: code,
					map: null
				};
			}
		}
	};
}



const plugins = [
	resolve(),
	importContents(),
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
