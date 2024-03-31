const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.[contenthash:6].js',
        assetModuleFilename: path.join('images', '[name].[contenthash:6][ext]'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader',  
                    ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.join('icons', '[name].[contenthash:6][ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },    
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            filename: 'index.html',
        }),
        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: ['dist']
                },
                onEnd: {
                    copy: [
                        {
                            source: path.join('src', 'static'),
                        },
                    ],
                },
            },      
        }),
    ],
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 3001,
  },
  optimization: {
       minimizer: [
         new ImageMinimizerPlugin({
           minimizer: {
             implementation: ImageMinimizerPlugin.imageminMinify,
             options: {
               plugins: [
                 ['gifsicle', { interlaced: true }],
                 ['jpegtran', { progressive: true }],
                 ['optipng', { optimizationLevel: 5 }],
                 ['svgo', { name: 'preset-default' }],
               ],
             },
           },
         }),
       ],   
    },
};