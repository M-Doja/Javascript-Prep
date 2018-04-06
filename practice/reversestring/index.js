// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split('').reduce( (rev, char) => char + rev, '');
}
reverse('asdf');
module.exports = reverse;

// Solution 1  ** Basic **
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Solution 2
// function reverse(str) {
//   var revStr = '';
//   for (let character of str){
//     revStr = character + revStr;
//   }
//   return revStr;
// }

// Solution 3  ** WOW Effect **
// function reverse(str) {
//   return str.split('').reduce( (rev, char) => char + rev, '');
// }
