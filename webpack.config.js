const path = require('path')

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public', 'build'),
		filename: 'build.min.js'
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.(js|jsx)$/,
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: ['style-loader', 'css-loader']
		}]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public')
	}
}
