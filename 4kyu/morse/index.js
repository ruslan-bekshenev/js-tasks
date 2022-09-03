function decodeBits (bits) {
  let codes = bits
    .replace(/^0+/, '')
    .replace(/0+$/, '')
    .match(/(0+|1+)/g)
  
  let counts = codes.map((e) => { return e.length })
  let min = Math.min(...counts)
  
  return codes
    .map((code) => {
      switch (code.slice(0, code.length / min)) {
        case '0'      : return ''
        case '1'      : return '.'
        case '111'    : return '-'
        case '000'    : return ' '
        case '0000000': return '   '
      }
    }).join('')
}

function decodeMorse (morse) {
  return morse.replace(/ ?[.-]+ ?/g, (e) => {
    return MORSE_CODE[e.trim()]
  }).trim()
}