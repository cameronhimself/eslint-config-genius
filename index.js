/* eslint-disable */
const jsonfile = require('jsonfile');
const path = require('path');
module.exports = jsonfile.readFileSync(path.join(__dirname, '.eslintrc'));
