function isPalindrome(word) {
    // Write your algorithm here
  }
  
   
//     Add your pseudocode here
//     function isPalindrome(str):
//   // Remove any non-alphanumeric characters and convert to lowercase
//   str = str.replace(/[^0-9a-z]/gi, '').toLowerCase()

//   // Reverse the string
//   reversedStr = str.split('').reverse().join('')

//   // Compare the original string with the reversed string
//   if str equals reversedStr:
//     return true
//   else:
//     return false

  
  /*
    Add written explanation of your solution here
  */
  
  // You can run `node index.js` to view these console logs
  if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }
  
  module.exports = isPalindrome;
  