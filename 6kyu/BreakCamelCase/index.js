// complete the function
function solution(str) {
    let result = ""
    if (!str) {
        return str
    }
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i)
        if (i !== 0 && charCode >= 65 && charCode <= 90) {
            result += ' ' + str[i]
        } else {
            result += str[i]
        }
    }
    return result
}
