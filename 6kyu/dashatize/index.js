function dashatize(num) {
    return (num+'')
        .replace(/\d/g, d => d&1 ? `-${d}-` : d)
        .replace(/--/g, '-')
        .replace(/(^-*)|(-*$)/g, '');
};