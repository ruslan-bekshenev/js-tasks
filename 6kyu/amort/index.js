const pow = (x, n) => Math.E ** (n * Math.log(x))

const amort = (R, P, n, m) => {
    const res = {}
    const r = R / 1200
    const getBalance = (m) => pow(1 + r, m) * P - (pow(1 + r, m) - 1) / r * res.c

    res.c = P * r / (1 - pow(1 + r, -n))
    res.balance = getBalance(m)
    res.princ = getBalance(m - 1) - res.balance
    res.int = res.c - res.princ

    Object.entries(res).forEach(([k, v]) => this[k] = v.toFixed(0))

    return `num_payment ${m} c ${c} princ ${princ} int ${int} balance ${balance}`
}