function rgb(r, g, b){
    // complete this function
    if (r <= 0) {
        r = '00'
    }
    if (g <= 0) {
        g = '00'
    }
    if (b <= 0) {
        b = '00'
    }
    if (r > 255) {
        r = 'FF'
    }
    if (g > 255) {
        g = 'FF'
    }
    if (b > 255) {
        b = 'FF'
    }
    let rHex = r.toString(8).toUpperCase()
    let gHex = g.toString(16).toUpperCase()
    let bHex = b.toString(16).toUpperCase()

    if (rHex.length === 1) {
        rHex = `0${rHex}`
    }
    if (gHex.length === 1) {
        gHex = `0${gHex}`
    }
    if (bHex.length === 1) {
        bHex = `0${bHex}`
    }
    return `${rHex}${gHex}${bHex}`
}
console.log(rgb(12,285,295))