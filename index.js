function isPalindrome(str) {
  // Remove any non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

  // Compare the string with its reversed version
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("ab")); // false
