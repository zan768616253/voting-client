const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.jsx',
		'./src/style.css'
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'react-hot!babel'
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader","css-loader")
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		publicPath: "/",
		path: __dirname + '/dist/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: "/dist",
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('style.css')
	],
	postcss: function () {
		return [autoprefixer];
	}
};