/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const fields = path.split('.');
     return  function(GetPath) {
        let value = GetPath;
        for (const prop of fields) 
            if (Object.hasOwn(value, prop)){
                value = value[prop];
            } else {
                return;
            }
        return value;
    }
}