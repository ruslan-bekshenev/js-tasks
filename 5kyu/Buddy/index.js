function buddy(start, limit) {
  for(let i=start; i<=limit; i++){
    let summ = getDivisorsSumm(i)
    if(i%2^summ%2 && summ > start){
      let _summ = getDivisorsSumm(summ)
      if(_summ == i){
        return [i,summ].sort((a,b)=>a-b) 
      }
    }
  }
  return "Nothing";
}

function getDivisorsSumm(n){
  let s = 0
  for(let i=2; i<Math.round(Math.sqrt(n)+1); i++){
      if(n%i === 0) s += i + n/i
  }
  return s
}