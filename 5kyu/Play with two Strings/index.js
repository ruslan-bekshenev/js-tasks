function sameLetter(letter1, letter2) {
    if (letter1.toLowerCase() == letter2.toLowerCase()) return true;
    else return false;
}

function flipCasing(letter) {
    if (letter === letter.toUpperCase()) {
        return letter.toLowerCase();
    }
    if (letter === letter.toLowerCase()){
        return letter.toUpperCase();
    }
}

function workOnStrings(string1, string2){
    let array1 = string1.split("");
    let array2 = string2.split("");
    for (let i = 0; i < array1.length; i++) {
        let letter1 = array1[i];
        array2 = array2.map((letter2) => {
            if (sameLetter(letter1, letter2)) return flipCasing(letter2)
            else return letter2;
        });
    }
    for (let i = 0; i < array2.length; i++) {
        let letter1 = array2[i]
        array1 = array1.map(letter2 => {
            if (sameLetter(letter1, letter2)) return flipCasing(letter2);
            else return letter2;
        });
    }
    return array1.join("") + array2.join("");
}