const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJonName = require('./package.json').name;

module.exports = Object.assign({}, base, {
	mode: 'development',
	entry: {
		example: './example/App.tsx'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './example/public/index.html',
			title: packageJonName
		})
	]
});
