const primeFactors = n => {
    if (n < 2) return `(${n})`;
    let factors = '';
    for ( let i = 2; i <= n; i++) {
        let count = 0;
        while ( n%i === 0 ) {
            count++;
            n /= i;
        }
        if (count) {
            factors += `(${i}`;
            if (count > 1) factors += `**${count}`;
            factors += `)`;
        }
    }
    return factors;
}