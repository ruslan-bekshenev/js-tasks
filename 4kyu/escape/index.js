function escape(maze) {
    let s=startingPoint(maze),
        Q=[[s,[]]],
        visited = [],l=maze.length,l_=maze[0].length
    while (Q.length){
        let qq = Q.shift()
        let [sp,path] = qq
        path.push(sp)
        visited.push(sp)

        if ([0,l-1].indexOf(sp[0])!=-1 || [0,l_-1].indexOf(sp[1])!=-1) return generate(path,maze)

        for (let [i,j] of [[1,0],[-1,0],[0,1],[0,-1]]){
            let [ni,nj] = [sp[0]+i,sp[1]+j]
            if (ni<l && nj<l_ && !check([ni,nj],visited) && maze[ni][nj]==' ') Q.push([[ni,nj],path.slice()])
        }
    }
    return []
}
function startingPoint(maze){
    for (let i=0;i<maze.length;i++){
        for (let j=0;j<maze[i].length;j++){
            if ('^<>v'.indexOf(maze[i][j])!=-1) return [i,j]
        }
    }
}
function check(n,li){
    for (let i of li){
        if (i[0]==n[0] && i[1]==n[1]) return true
    }
    return false
}
function generate(li,m){
    let sign = [m[li[0][0]][li[0][1]]], path = []
    for (let i=1;i<li.length;i++){
        let [k,l] = li[i-1], [ni,nj] = li[i]
        sign.push((k==ni+1&&l==nj)?'^':(k==ni-1&&l==nj)?'v':(k==ni&&l==nj+1)?'<':'>')
    }
    for (let i=1;i<sign.length;i++){
        let s = sign[i-1]+sign[i]
        if (sign[i-1]!=sign[i])  path.push(['<>','^v','><','v^'].indexOf(s)!=-1?'B':['^>','>v','v<','<^'].indexOf(s)!=-1?'R':'L')
        path.push('F')
    }
    return path
}