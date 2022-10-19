function lenCurve(n) {
    let h = 1 / n
    let l = 0
    let x = 0
    let y = 0
    for(let k = 1; k <= n; k++){
        let i = k
        i *= h
        l += Math.hypot(x - i, y - i * i)
        x = i
        y = i * i
    }
    return l
}