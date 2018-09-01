const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

console.log('\x1b[0m', '');

const config = {
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		path: __dirname + '/../build/static/',
		filename: 'bundle.min.js',
		publicPath: '/build/',
		sourceMapFilename: 'bundle.min.[chunkhash].js.map'
	},
	module: {
		rules: [
			{
				test: /\.(eot|woff|woff2|svg|ttf|jpg|jpeg|gif|png)([\?]?.*)$/,
				loader: 'file-loader',
				options: {
					outputPath: '/fonts'
				}
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'file-loader',
				options: {
					publicPath: 'public/images/'
				}
			}
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin('style.css'),
		new UglifyJSPlugin({
			uglifyOptions: {
				compress: {
					warnings: false
				},
				sourceMap: false,
				parallel: true,
				cache: false,
				minimize: true
			}
		}),
		new webpack.ProvidePlugin({
			/* needed for the ejs */
			_: 'underscore'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				BASE_URL: JSON.stringify('/api/')
			}
		})
	]
};

module.exports = config;