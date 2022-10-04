const interleave = (...a) => {
    let interleaved = []
    const longest = a.reduce((a, b) => (a.length > b.length ? a : b));

    for (let i in longest) {
        a.forEach(word => word[i] === undefined ? interleaved.push(null) : interleaved.push(word[i]));
    }
    return interleaved;
};