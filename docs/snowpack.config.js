// snowpack.config.js

module.exports = {
	plugins: [["@snowpack/plugin-sass", {}]],
	buildOptions: {
		out: "docs",
	},
};
