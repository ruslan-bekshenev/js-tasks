function isInteresting(number, awesomePhrases) {
    if(checkInt(number, awesomePhrases)) return 2;
    if(checkInt(number+1, awesomePhrases) || checkInt(number+2, awesomePhrases)) return 1;
    return 0;
}

function checkInt(num, phrases){
    if(num>99) {
        return checkZeros(num) || areSame(num) || checkSeq(num) || palindrome(num) || phrases.indexOf(num) !== -1;
    }
}
function checkZeros(num) {
    return !parseInt(num.toString().slice(1,num.length), 10)
}
function areSame(num) {
    var arr = String(num).split('');
    return arr.every(function (el) { return el === arr[0]; });
}
function checkSeq(num) {
    var inc = "1234567890", dec = "9876543210";
    return inc.indexOf(num.toString()) !== -1 || dec.indexOf(num.toString()) !== -1
}
function palindrome(num) {
    num = num.toString();
    return num === num.split('').reverse().join('');
}