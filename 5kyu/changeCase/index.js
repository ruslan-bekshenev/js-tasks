function changeCase(identifier, targetCase){
    if(!/^$|^[a-z]+(([A-Z][a-z]*)+|(-[a-z]+)*|(_[a-z]+)*)$/.test(identifier)) return undefined;
    switch(targetCase){
        case 'snake': return identifier.replace(/-([a-z])|([A-Z])/g, (_,x,y) => '_'+(x||y.toLowerCase()));
        case 'camel': return identifier.replace(/[-_]([a-z])/g, (_,x) => x.toUpperCase());
        case 'kebab': return identifier.replace(/_([a-z])|([A-Z])/g, (_,x,y) => '-'+(x||y.toLowerCase()));
        default: return undefined;
    }
}