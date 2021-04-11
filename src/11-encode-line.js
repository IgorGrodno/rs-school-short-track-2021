/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  const arr = str.split('');
  let tmp = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      tmp++;
    } else {
      if (tmp > 1) {
        result += tmp;
        tmp = 1;
      }
      result += arr[i];
    }
  }
  return result;
}

module.exports = encodeLine;
