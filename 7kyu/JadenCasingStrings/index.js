
// my solution
String.prototype.toJadenCase = function () {
    const stringArray = this.split(" ")
    const result = []
    for (let str of stringArray) {
        const newStr = str[0].toUpperCase() + str.substring(1)
        result.push(newStr)
    }
    return result.join(' ')
};

// better solution
String.prototype.toJadenCase = function () {
    return this.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

String.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};