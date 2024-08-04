/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    var NewArr = arr;
    let uniqueList= [...new Set(NewArr)];
    return uniqueList;
}
