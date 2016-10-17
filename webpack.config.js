var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var webpackShimConfig = {
  shim: { 
      'replayer': {
        exports: 'Replayer'
      },
      'stream': {
        exports: 'MidiFile'
      },
      'midifile': {
        exports: 'Stream'
      },
      /*'base64' :{
        exports: ['atob', 'btoa']
      },*/
      'base64binary':{
        exports: 'Base64Binary'
      },
      'MIDI':{
        exports: 'MIDI',
        deps: [ 'replayer', 'stream', 'midifile', 'base64binary' ]
      },
      'masonry': {
        amd: false,
        commonjs: true
      }
  }
}
module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  resolve: {
    alias: {
      'replayer': path.join(__dirname, 'vendor/midijs/replayer.js'),
      'stream': path.join(__dirname, 'vendor/midijs/stream.js'),
      'midifile': path.join(__dirname, 'vendor/midijs/midifile.js'),
      'base64': path.join(__dirname, 'vendor/midijs/Base64.js'),
      'base64binary': path.join(__dirname, 'vendor/midijs/Base64binary.js'),
      'MIDI': path.join(__dirname, 'vendor/midijs/MIDI.js'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {
        test: /\.js/,
        loader: 'shim-loader',
        query: webpackShimConfig,
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
