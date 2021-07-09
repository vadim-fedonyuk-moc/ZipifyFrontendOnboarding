/* eslint-disable no-undef */

const path = require('path');
const { readFileSync } = require('fs');

function pathFromRoot(paths) {
    return path.resolve(__dirname, '../../', ...paths)
}

function readSslKey(type) {
    return readFileSync(pathFromRoot(['ssl', `localhost.${type}`]));
}

module.exports = { pathFromRoot, readSslKey };
