function pascalsTriangle(n) {
    const arrayPascal = [];
    for (let i = 0; i < n; i++) {
        const arrayOfN = [];
        for (let j = 0; j <= i; j++) {
            if (j == 0 | j == i) {
                arrayOfN.push(1);
            } else if (j == 1 || j == i - 1) {
                arrayOfN.push(i);
            } else {
                arrayOfN.push(arrayPascal[i - 1][j - 1] + arrayPascal[i - 1][j]);
            }
        }
        arrayPascal.push(arrayOfN);
    }
    return arrayPascal
        .flat();
}