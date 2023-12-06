const isLetter = require('is-letter');

function mostUsedLetter(text) {
	const letterCounts = {};
	let mostUsedLetter = '';

	for (let i = 0; i < text.length; i++) {
		const letter = text[i];
		if (isLetter(letter)) {
			if (letterCounts[letter]) {
				letterCounts[letter]++;
			} else {
				letterCounts[letter] = 1;
			}
			if (letterCounts[letter] > letterCounts[mostUsedLetter] || !letterCounts[mostUsedLetter]) {
				letterCounts[mostUsedLetter] = letterCounts[letter];
				mostUsedLetter = letter;
			}
		}
	}

	return mostUsedLetter;
}

console.log(mostUsedLetter('HeLLo, World!'));
