function pathFinder(maze){
  const floodNextStep = (i, j) => mazeMap[i] && mazeMap[i][j] === '◯' && (mazeMap[i][j] = '✓') && spreadFloodFill(i, j);
  const spreadFloodFill = (i, j) => {
    floodNextStep(i-1, j); floodNextStep(i+1, j); floodNextStep(i, j-1); floodNextStep(i, j+1);
  }
  const mazeMap = maze.split('\n').map(row => row.split('').map(cell => cell === 'W' ? '✖' : '◯'));
  mazeMap[0][0] = '✓';
  spreadFloodFill(0, 0);
  return mazeMap[mazeMap.length-1][mazeMap.length-1] === '✓';
}