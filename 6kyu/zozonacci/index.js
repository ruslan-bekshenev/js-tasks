const sequences = {
    'fib': (a,b,c,d) => d+c,
    'jac': (a,b,c,d) => d+2*c,
    'pad': (a,b,c,d) => c+b,
    'pel': (a,b,c,d) => 2*d+c,
    'tet': (a,b,c,d) => d+c+b+a,
    'tri': (a,b,c,d) => d+c+b
};

function zozonacci(pattern, n) {
    if (!pattern.length || !n) return [];
    let seq = pattern[0] == "pad" ? [0,1,0,0] : [0,0,0,1];
    if (n <= 4) return seq.slice(0, n);
    for (let i = 0; seq.length < n; i++) {
        seq.push(sequences[pattern[i % pattern.length]](...seq.slice(-4)));
    }
    return seq;
}