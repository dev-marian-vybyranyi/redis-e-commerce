import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		floc: true,
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$services: resolve('./src/services')
				}
			},
			ssr: {
				noExternal: ['chart.js', 'chartjs-adapter-luxon']
			}
		}
	}
};

export default config;
