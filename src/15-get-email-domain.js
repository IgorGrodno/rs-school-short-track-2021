/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = '';
  const tmp = email.slice('');
  for (let i = tmp.length - 1; i > 0; i--) {
    if (tmp[i] === '@') {
      break;
    } else {
      result += tmp[i];
    }
  }
  return result.split('').reverse().join('');
}

module.exports = getEmailDomain;
