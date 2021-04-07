/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const tmpArr = n.toString().split('');
  const resultArr = [];
  let arr = [];

  for (let i = 0; i < tmpArr.length; i++) {
    arr = tmpArr.slice();
    arr.splice(i, 1);
    resultArr.push(Number(arr.join('')));
  }

  let result = resultArr[0];

  for (let i = 1; i < resultArr.length; i++) {
    if (result < resultArr[i]) {
      result = resultArr[i];
    }
  }

  return result;
}

module.exports = deleteDigit;
