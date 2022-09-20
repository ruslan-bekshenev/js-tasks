function countOnesSingle(n) {
    let result = 0;
    while (n > 0) {
        let k = Math.log2(n) | 0;
        result += 2 ** (k - 1) * k + 1;
        n = n - 2 ** k;
        result += n;
    }
    return result;
}

function countOnes(left, right) {
    return countOnesSingle(right) - countOnesSingle(left - 1);
}