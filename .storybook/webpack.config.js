const path = require('path');
const webpackConfig = require('../build/webpack.config')

module.exports = {
	plugins: [
		// your custom plugins
	],
	module: {
		loaders: [
			// add your custom loaders.
		],
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
