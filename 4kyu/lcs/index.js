function lcs(a, b) {
    const matrix = Array(a.length + 1).fill().map(() => Array(b.length + 1).fill(0))
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) matrix[i + 1][j + 1] = matrix[i][j] + 1
            else matrix[i + 1][j + 1] = Math.max(matrix[i + 1][j], matrix[i][j + 1])
        }
    }
    const backtrack = (i, j) => {
        if (i == -1 || j == -1) return ""
        else if (a[i] == b[j])
            return backtrack(i - 1, j - 1) + a[i]
        else if (matrix[i + 1][j] > matrix[i][j + 1])
            return backtrack(i, j - 1)
        else
            return backtrack(i - 1, j)
    }
    return backtrack(a.length - 1, b.length - 1)
}