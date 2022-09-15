const decompose = n => {
  const result = decomposer(n, n * n);
  return result ? result.slice(0, -1) : result;
}

const decomposer = (n, r) => {
  if (!r) return [n]; 
  
  for (let i = n - 1; i > 0; i--) {
    const x = r - i * i;
    if (x >= 0) {
      const y = decomposer(i, x);
      if (y) return y.concat(n);
    }
  }
  
  return null;
}