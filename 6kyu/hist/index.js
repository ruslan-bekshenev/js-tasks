function hist(s) {
    const u = s.match(/u/g);
    const w = s.match(/w/g);
    const x = s.match(/x/g);
    const z = s.match(/z/g);

    const results = [];
    if (u) results.push(`u  ${u.length}     ${'*'.repeat(u.length)}`);
    if (w) results.push(`w  ${w.length}     ${'*'.repeat(w.length)}`);
    if (x) results.push(`x  ${x.length}     ${'*'.repeat(x.length)}`);
    if (z) results.push(`z  ${z.length}     ${'*'.repeat(z.length)}`);
    return results.join(`\r`);
}