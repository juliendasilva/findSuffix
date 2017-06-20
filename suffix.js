const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
const wordsFiltered = require('./dictArray');

function findSuffix (name) {
	if (typeof name !== 'string') {
		return 'enter valid string please fdp';
	}
	let suffixIndex = 0;
  for (let i = 0, len = name.length -1; i < len; i++) {
    if (voyelles.includes(name[i]) && i !== len) {
      suffixIndex = i;
		}
  }
  const nameSliced = name.slice(suffixIndex);
	let suffix = nameSliced.length > 3 ? nameSliced.slice('-3') : nameSliced;
	if (!wordsFiltered.includes(suffix)) {
    suffix = name.slice(suffixIndex).slice(1);
	}
  const wordsWithSuffix = wordsFiltered.filter((word) => word.includes(suffix));
  const wordSuffix = wordsWithSuffix[Math.floor(Math.random()*wordsWithSuffix.length)];
  const wordSuffixIndex = wordSuffix.slice(wordSuffix.indexOf(suffix)).slice(suffix.length);
  return name + wordSuffixIndex
}

module.exports = findSuffix