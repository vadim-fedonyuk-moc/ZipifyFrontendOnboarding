const { pathFromRoot } = require('./utils');

module.exports = {
    output: pathFromRoot(['public/dist']),
    manifest: pathFromRoot(['public/dist/manifest.json']),
};


