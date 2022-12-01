function advice(agents, n) {
    const distMap = Array(n).fill(null).map(()=>Array(n).fill(Infinity));

    agents.forEach(([x, y])=>{
        distMap.forEach((row, i, dm)=>row.forEach((minDist, j)=>{
            if(x >= n || y >= n) return;
            const dist = Math.abs(x - i) + Math.abs(y - j);
            if(dist < minDist) {
                dm[i][j] = dist;
            }
        }));
    });

    const maxDist = distMap.reduce((a, row) => Math.max(a, Math.max(...row)), 1);

    const safest = [];

    distMap.forEach((row, i)=>row.forEach((x, j)=>{
        if(x === maxDist) {
            safest.push([i, j]);
        }
    }));
    console.log('2')
    console.log('2')
    
    return safest;
}