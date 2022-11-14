function stockList(listOfArt, listOfCat) {
    if (!listOfArt.length || !listOfCat.length) return ''
    return listOfCat.map(w => {
        const s = listOfArt.reduce((a, b) => a + (b.charAt(0) === w ? +b.split(' ')[1] : 0), 0)
        return `(${w} : ${s})`
    }).join(' - ')
}