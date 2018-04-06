// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    }else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}


maxChar('micah');

module.exports = maxChar;

// Solution 1
// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';
//
//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     }else {
//       charMap[char] = 1;
//     }
//   }
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }


/*  Solution 2 using Reduce fn  */
//
// function maxChar(str) {
//   const tally = {};
//   return str.split('').reduce((acc, char, idx) => {
//     if (!tally[char]) {
//       tally[char] = 1;
//       return idx === 0 ? char : acc;
//     }
//     tally[char]++
//     return tally[char] > tally[acc] ? char : acc;
//   }, '');
// }

/*  Solution 3 using Filter fn  */
//
// function maxChar(str) {
//  let maxCount = 0;
//  let maxChar = '';
//  const arr = str.split('');
//
//  for (let char of str) {
//   const count = arr.filter(item => item === char).length;
//   if (count > maxCount) {
//    maxChar = char;
//    maxCount = count;
//   }
//  }
//
//  return maxChar;
// }
