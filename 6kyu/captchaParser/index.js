function captchaParser(captcha) {
    let pattern = captcha.split('\n').map(v => [...v])
    if(!pattern.length) return ''
    const numbers = {
        '___|||||': '1',
        '//____||||': '2',
        '//\\\\_______': '3',
        '////___||||||': '4',
        '___________|||||': '5',
        '____________||||||': '6',
        '/////________|': '7',
        '__________||||||||': '8',
        '__________||||||': '9'
    }
    function dfs(i, j, p = []) {
        if(i >= 0 && j >= 0 && i < pattern.length && j < pattern[i].length && /[|_/\\]/.test(pattern[i][j])) {
            p.push(pattern[i][j])
            pattern[i][j] = ''
            dfs(i - 1, j, p), dfs(i + 1, j, p), dfs(i, j + 1, p), dfs(i, j - 1, p)
            dfs(i - 1, j - 1, p), dfs(i - 1, j + 1, p), dfs(i + 1, j - 1, p)
            dfs(i + 1, j + 1, p)
        }
        return p.sort().join('')
    }
    let nums = []
    for(let i = 0; i < pattern.length; i++) {
        for(let j = 0; j < pattern[i].length; j++) {
            if(/[|_/\\]/.test(pattern[i][j])) nums.push(numbers[dfs(i, j)])
        }
    }
    return nums.sort().join('')
}
