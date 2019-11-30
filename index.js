'use strict';

const os = require('os')
const pug = require('pug')

function createPugPlugin (compilation, type, options) {
  return function (node, ctx) {
    if (options.prepend) node.content = options.prepend + os.EOL + node.content
    return new Promise ((resolve, reject) => {
        var fn = pug.compile(node.content, options)
        var html = fn({})
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
