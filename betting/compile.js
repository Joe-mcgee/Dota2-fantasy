const path = require('path');
const fs = require('fs');
const solc = require('solc');

const bettingPath = path.resolve(__dirname, 'contracts', 'Betting.sol');
const source = fs.readFileSync(bettingPath, 'utf-8');
console.log(source)
module.exports = solc.compile(source, 1).contracts[':Betting'];


