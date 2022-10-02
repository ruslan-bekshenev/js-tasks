function generateBC(url, separator) {
    url = url.replace(/(^http.*\/\/|\/index\..*$|\/$)/g, '' );
    let crumbs = url.split("/").map( c => rmvAnchorsAndParams(c) ), last = '<span class="active">'+labelize(crumbs.pop().replace(/\..*$/,''))+'</span>', path = "/";
    return crumbs.length ? crumbs.map( (crumb,i) => i? (path=path+crumb+"/") && `<a href="${path}">${labelize(crumb)}</a>` : '<a href="/">HOME</a>' ).concat(last).join(separator) : '<span class="active">HOME</span>'
}

const IGNORABLE = /^(the|of|in|from|by|with|and|or|for|to|at|a)$/;
let labelize = (str) => (str.length>30 ? str.split("-").map( s => IGNORABLE.test(s)? '' : s[0] ).join('') : str.replace(/\-/g, ' ') ).toUpperCase();
let rmvAnchorsAndParams =  (str) => str.replace( /#.*/, '' ).replace( /\?.*/, '' );