function combos(n, arr = [], sum = 0, result = []){
  for(let i = arr[arr.length - 1] || 1; i <= n - sum; i ++){
    sum + i === n ? result.push([...arr, i]) : combos(n, [...arr, i], sum + i, result);          
  }
  return result;
}