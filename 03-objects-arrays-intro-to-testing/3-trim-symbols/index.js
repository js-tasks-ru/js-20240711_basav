/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if (size === undefined) return string;
    let text = ''
    let k = ''
    for (let i = 0; i < string.length; i++) {
        k = string[i] +  (string[i] === k[0] ? k : '')
        if (k.length > size) continue
        text  += string[i]
    }
    return text 
}