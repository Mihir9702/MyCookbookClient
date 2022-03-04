/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
	},
	plugins: [
		'@snowpack/plugin-react-refresh',
		'@snowpack/plugin-dotenv',
		'@snowpack/plugin-typescript',
		'@snowpack/plugin-sass',
	],
	alias: {
		src: './src',
		public: './public',
	},
	routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
	// optimize: { "bundle": true }
}
