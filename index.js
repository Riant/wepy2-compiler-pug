'use strict';

const pug = require('pug');

function createPugPlugin (compilation, type, options) {
  return function (node, ctx) {
    // options.preData = config.data ? (config.data + os.EOL + node.content) : node.content;
    return new Promise ((resolve, reject) => {
        var fn = pug.compile(node.content, options);
        var html = fn({});
        // node.compiled = {
        //   code: html
        // }
        node.content = html
        resolve(node)
    });
  }
}

exports = module.exports = function (options) {
  return function () {
    ['pug', 'jade'].forEach(type => {
      this.register(`wepy-compiler-${type}`, createPugPlugin(this, type, options));
    });
  }
}
