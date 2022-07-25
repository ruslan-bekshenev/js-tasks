function firstNonRepeatingLetter(s) {
    // Add your code here
    const obj = s.split('').reduce((acc, char) => {
        return {...acc, [char]: (acc[char] || 0) + 1}
    }, {})
    return Object.keys(obj).values().filter((a) => a === 1)
}

console.log(firstNonRepeatingLetter('stress'))