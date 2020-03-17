module.exports = function reverse (n) {
  let num = n.toString();
    if (num[0] === '-') {
        num = num.slice(1, num.length);
    }
   return  num.split('').reverse().join('');
}
