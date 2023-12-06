const fs = require('fs');

const mostUsedLetter = require('../task1/index');

function readFileFromArgs() {
	const path = process.argv[2];
	const text = fs.readFileSync(path, { encoding: 'utf8' });
	return text;
}
console.log(mostUsedLetter(readFileFromArgs()));
module.exports = readFileFromArgs;
