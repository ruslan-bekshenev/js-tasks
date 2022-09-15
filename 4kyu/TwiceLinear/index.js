function dblLinear(n) {
  let ai = 0
  let bi = 0
  let eq = 0;
  let sequence = [1];
  while (ai + bi < n + eq) {
    const y = 2 * sequence[ai] + 1;
    const z = 3 * sequence[bi] + 1;
    if (y < z) { 
      sequence.push(y);
      ai++; 
    }
    else if (y > z) { 
      sequence.push(z);
      bi++; 
    }
    else { 
      sequence.push(y);
      ai++;
      bi++;
      eq++; 
    }
  }
  return sequence.pop();
}