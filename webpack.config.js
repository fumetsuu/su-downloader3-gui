const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var extractPlugin = new ExtractTextPlugin({
	filename: 'public/main.css'
})

module.exports = {
	devtool: 'source-map',
	mode: 'development',
	watch: true,
	entry: './app/index.js',
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},

	output: {
		path: __dirname + '/build/',
		publicPath: '/build/',
		filename: 'public/bundle.js',
		chunkFilename: 'public/[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/react']
				}
			},
			{
				test: /\.(sa|c)ss$/,
				use: extractPlugin.extract({
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|svg|otf|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: 'public/[name].[ext]'
				}
			},
			{ test: /\.html$/, use: ['html-loader'] }
		]
	},
	plugins: [
		extractPlugin,
		new HtmlWebpackPlugin({
			template: 'app/index.html'
		})
	]
}
