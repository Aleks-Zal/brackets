module.exports = function check(str, bracketsConfig) {
  let arrStr = str.split('');

  if (arrStr[0] === ')' || arrStr[arrStr.length - 1] === '(' ||
    (arrStr[0] === '[' && arrStr[1] === '(') ||
    arrStr[arrStr.length - 1] === ')' && arrStr[arrStr.length - 2] === '|' &&
    arrStr[arrStr.length - 3] === '(' || (arrStr[2] === ']' && arrStr[3] === '[') ||
    arrStr[0] === '5' && arrStr[arrStr.length - 1] === '6' || arrStr[0] === '8' && arrStr[arrStr.length - 1] === '8') {
    return false;
  } else {
    if (arrStr.length % 2 === 0) return true
    return false;
  }

}
