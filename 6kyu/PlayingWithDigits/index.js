// my solution
function digPow(n, p){
    const k = `${n}`.split('').map((num, index) => Math.pow(num, index + p)).reduce((a, acc) => a + acc, 0)
    return k % n === 0 ? k / n : -1
}