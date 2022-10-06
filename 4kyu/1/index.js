function cumulative(matrix) {
    const n = matrix.length;
    const cum = [...Array(n + 1)].map(_ => Array(n + 1).fill(0));

    for (let i=0; i<n; ++i) {
        for (let j=0; j<n; ++j) {
            cum[i + 1][j + 1] = 2 * matrix[i][j] - 1;
        }
    }
    for (let i=0; i<n; ++i) {
        for (let j=0; j<n; ++j) {
            cum[i + 1][j + 1] += cum[i + 1][j];
        }
    }
    for (let j=0; j<n; ++j) {
        for (let i=0; i<n; ++i) {
            cum[i + 1][j + 1] += cum[i][j + 1];
        }
    }
    return cum;
}

function findMatrixIn(matrix) {
    const n = matrix.length;
    const cum = cumulative(matrix);

    let best = undefined;

    for (let s=0; s<n; ++s) {
        for (let t=0; t<n; ++t) {
            for (let i=1; s+i <= n && t+i <= n; ++i) {
                let u = s+i;
                let v = t+i;

                const sum = cum[u][v] - cum[u][t] - cum[s][v] + cum[s][t];

                if (sum == 0 && (!best || (u-s) * (v-t) > best.length * best[0].length)) {
                    const sub = matrix.slice(s,u).map(row => row.slice(t,v));
                    best = sub;
                }
            }
        }
    }
    return best || [];
}