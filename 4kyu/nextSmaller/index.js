function nextSmaller(n) {
  let digits = ('' + n).split('');
  for (let ix = digits.length - 1; ix-- > 0;) {
    if (digits[ix + 1] < digits[ix]) {
      let tail = digits.slice(ix).sort((a, b) => b - a);
      let head = tail.splice(tail.findIndex(x => x < digits[ix]), 1);
      if (!ix && '0' == head[0]) {
        return -1;
      }
      return +digits.slice(0, ix).concat(head, tail).join('');
    }
  }
  return -1;
}