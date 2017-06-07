const path = require('path');
const webpackConfig = require('../build/webpack.config')

module.exports = {
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader',
				options: { limit: 8192 }
			}, {
				test: /\.scss$/,
				loaders: [
					"style-loader", "css-loader", "sass-loader"
				],
				include: path.resolve(__dirname, '../')
			}
		]
	}
};
