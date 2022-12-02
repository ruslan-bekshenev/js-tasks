const epidemic = (tm, n, s0, i0, b, a) => {
  const dt = tm / n;
  const i1 = i0 + dt * (b * s0 * i0 - a * i0);
  if (i1 < i0) return i0;
  const s1 = s0 - dt * b * s0 * i0;
  return epidemic(tm, n, s1, i1, b, a)
}