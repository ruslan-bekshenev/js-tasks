function availableMoves(position) {
    if (!(/^[ABCDEFGH][12345678]$/).test(position)) {
        return [];
    }

    const letterIndex = position.split('')[0].charCodeAt();
    const numberIndex = Number(position.split('')[1]);

    const FIRST_LETTER_FIELD = 65; // ASCII for A
    const LAST_LETTER_FIELD = 72;  // ASCII for H

    const availableMoves = [];

    // vertical and diagonal left-to-right moves
    let diagonalLetterIndex;

    for (let n = 1; n <= 8; n++) {
        if (n === numberIndex) {
            continue;
        }

        diagonalLetterIndex = n + (letterIndex - numberIndex);

        if (65 <= diagonalLetterIndex && diagonalLetterIndex <= 72) {
            availableMoves.push(String.fromCharCode(diagonalLetterIndex) + String(n));
        }

        availableMoves.push(String.fromCharCode(letterIndex) + String(n));
    }

    // horizontal and diagonal right-to-left moves
    let diagonalNumberIndex;

    for (let l = LAST_LETTER_FIELD; l >= FIRST_LETTER_FIELD; l--) {
        if (l === letterIndex) {
            continue;
        }

        diagonalNumberIndex = numberIndex + (letterIndex - l);

        if (1 <= diagonalNumberIndex && diagonalNumberIndex <= 8){
            availableMoves.push(String.fromCharCode(l) + String(diagonalNumberIndex));
        }

        availableMoves.push(String.fromCharCode(l) + String(numberIndex));
    }

    availableMoves.sort();

    return availableMoves;
}