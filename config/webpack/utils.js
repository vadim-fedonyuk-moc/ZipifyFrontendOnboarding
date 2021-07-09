/* eslint-disable no-undef */

const path = require('path');

function pathFromRoot(paths) {
    return path.resolve(__dirname, '../../', ...paths)
}

module.exports = { pathFromRoot };
