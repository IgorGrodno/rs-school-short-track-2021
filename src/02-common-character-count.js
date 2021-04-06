/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let tmp = 0;
  const tmpArr = Array.from(s1);
  const tmpArr1 = Array.from(s2);

  for (let i = 0; i < tmpArr.length; i++) {
    tmp = tmpArr1.indexOf(tmpArr[i]);
    if (tmp !== -1) {
      result++;
      delete tmpArr1[tmp];
    }
  }

  return result;
}

module.exports = getCommonCharacterCount;
