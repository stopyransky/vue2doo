module.exports = {
	entry : "./app/app.js",
	output: {
		filename: "./public/bundle.js"
	},
	resolve: {
		extensions : [ ".js", ".jsx"]
	}
}