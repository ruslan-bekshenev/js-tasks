const trickleDown = (funnel, level = 0, position = 0) => {
    if (!funnel[level + 1]) return

    const a = funnel[level + 1][position]
    const b = funnel[level + 1][position + 1]

    let dropPosition = null

    if ((a && a < b) || !b) {
        dropPosition = position
    } else if ((b && b < a) || !a) {
        dropPosition = position + 1
    }

    if (dropPosition !== null) {
        funnel[level][position] = dropLetter(funnel, level + 1, dropPosition)
        trickleDown(funnel, level + 1, dropPosition)
    }
}

const dropLetter = (funnel, level = 0, position = 0) => {
    const letter = funnel[level][position]
    funnel[level][position] = null
    return letter
}

const funnelOut = (funnel) => {
    funnel.reverse()
    const result = []

    while(funnel[0][0]) {
        result.push(dropLetter(funnel))
        trickleDown(funnel)
    }

    return result.join('')
}