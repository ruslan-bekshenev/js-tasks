// my solution
function DNAStrand(dna){
    return dna.split("").map((char) => {
        if (char === 'A') {
            return 'T'
        }
        if (char === 'T') {
            return 'A'
        }
        if (char === 'C') {
            return 'G'
        }
        if (char === 'G') {
            return 'C'
        }
        return char
    }).join('')
}

// better solution
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
    return dna.split('').map((v) => pairs[v]).join('');
}