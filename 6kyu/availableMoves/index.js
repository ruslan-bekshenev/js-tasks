const BOARD = [..."ABCDEFGH"].map(file => [..."12345678"].map(rank => file + rank));
const Q_DIRS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

function availableMoves(position) {
    if (!(/^[A-H][1-8]$/).test(position)) return [];
    const res = [],
        r = position[0].charCodeAt() - 65,
        c = position[1] - 1;
    for (const [dx, dy] of Q_DIRS)
        for (let x = r + dx, y = c + dy; BOARD[x] && BOARD[x][y]; x += dx, y += dy)
            res.push(BOARD[x][y]);
    return res.sort();
}