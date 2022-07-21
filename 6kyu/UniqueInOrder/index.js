var uniqueInOrder=function(iterable){
    const arrIterable = typeof iterable === 'string' ? iterable.split('') : iterable
    let currentChar = ''
    const result = []
    for (let i = 0; i < arrIterable.length; i++) {
        if (arrIterable[i] !== currentChar) {
            currentChar = arrIterable[i]
            result.push(arrIterable[i])
            console.log(1, currentChar, arrIterable[i])
        }
    }
    return result
}