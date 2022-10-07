function defaultArguments(f, params) {
    const defaults = f.toString().match(/\(([^)]*)\)/)[1].split(',').map(name =>
        params[name.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '').trim()]
    )

    const res = (...args) => f(...args, ...defaults.slice(args.length))
    res.toString = () => f.toString()
    return res
}