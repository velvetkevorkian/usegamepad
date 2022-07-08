import HtmlWebpackPlugin from 'html-webpack-plugin'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
	entry: './index.tsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [new HtmlWebpackPlugin({ title: 'React Demo' })],
	devServer: {
		static: './dist',
		port: 3000,
	},
	output: {
		path: path.join(__dirname, 'dist'),
	},
}
