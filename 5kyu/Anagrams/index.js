function anagrams(word, words) {
    const wordArr = word.split('')
    const result = []
    const countLetters = wordArr.reduce((acc, char) => {
        return {...acc, [char]: (acc?.[char] || 0) + 1}
    }, {})
    const keysWord = Object.keys(countLetters)
    for (let i = 0; i < words.length; i++) {
        if (word.length !== words[i].length) {
            continue;
        }
        let canAdd = true;
        const charsArr = words[i].split('')
        const c = charsArr.filter((w) => !wordArr.includes(w))
        const countLetterWord = charsArr.reduce((acc, char) => {
            return {...acc, [char]: (acc?.[char] || 0) + 1}
        }, {})
        const keysWords = Object.keys(countLetters)
        if (keysWord.length !== keysWords.length) {
            continue;
        } else {
            for (let j = 0; j < keysWords.length; j++) {
                if (countLetterWord[keysWords[j]] !== countLetters[keysWords[j]]) {
                    canAdd = false
                }
            }
        }

        if (!c.length && canAdd) {
            result.push(words[i])
        }
    }
    return result
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))