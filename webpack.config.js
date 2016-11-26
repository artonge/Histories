var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	context: __dirname + "/src",
	entry: { app : "./ts/main.ts" },
	resolve: {
		extensions: [".js", ".ts"],
		alias: {
			'vue$': 'vue/dist/vue.common.js',
			Templates: __dirname + '/src/templates/',
			Styles: __dirname + '/src/styles/',
		}
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].js'
	},
	module: {
		rules: [
			{ test: /\.ts$/  , loader: 'awesome-typescript-loader' },
			{ test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]' },
			{ test: /\.pug$/ , loader: "pug-loader" },
			{ test: /\.less$/, loaders: ["style-loader", "css-loader", "less-loader"] },
			{ test: /\.css$/, loaders: ["style-loader", "css-loader"] },
			{ test: /\.json$/, loaders: ["json-loader"] },
		],
		noParse: [/clarity-icons.min.js/],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './templates/index.pug' })
	],
	devtool: 'source-map',
	devServer: {
		contentBase: __dirname + '/dist',
		watchContentBase: true,
		historyApiFallback: true,
		stats: 'minimal',
		inline: true,
	},
};
