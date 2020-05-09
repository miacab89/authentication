let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let path = require('path');
let config = require('./webpack-dev.config');
let fs = require ('fs'); 

let cert = fs.readFileSync(path.join(__dirname, "./server.crt"));
let key = fs.readFileSync(path.join(__dirname, "./server.key")); 

new WebpackDevServer(webpack(config), {
    contentBase: 'public/',
    publicPath: '',
    inline: true,
    hot: true,
    https: {
        cert: cert,
        key: key
    }
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at https://localhost:3000');
}); 