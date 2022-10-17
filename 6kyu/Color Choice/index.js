function checkchoose(m, n) {
    for (let i = 0; i < n; i++) {
        if (Math.round(combination(n, i)) === m) return i;
    }
    return -1;
}
const factorial = x => x === 0 ? 1 : x * factorial(x - 1), combination = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));