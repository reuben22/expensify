const path = require('path');

module.exports = {
	mode: "development",
	entry: "./src/app.js",
	/*entry: "./src/playground/hoc.js",*/
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			use: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}, 
		{
			test: /\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true
	}
};

