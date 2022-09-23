const recoverSecret = triplets => {
    let str = ``;
    while (triplets.some(val => val.length)) {
        str += [...new Set(triplets.map(val => val[0]))].filter(val => triplets.every(v => v.indexOf(val) < 1));
        triplets = triplets.map(val => val.filter(v => v !== str.slice(-1))).filter(val => val.length);
    }
    return str;
};