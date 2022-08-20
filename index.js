function isPalindrome(word) {
  // Create a variable that lowercases the string
  const lowerWord = word.toLowerCase();

  // Create a varaible splits the lower word into an array, 
  // then use reverse method on the copied input array, 
  // then revert it back to a string using the join method
  const flippedInput = lowerWord.split('').reverse().join('');

  // Use an if statement to compare the input with the new flipped varaible to see if they equal eachother
  // Return true if they match and false if they do not
  if(lowerWord === flippedInput){
    return true;
  } else {
    return false;
  }
}

/* 
  1. Create a variable that lowercases the string and splits them into an array
  2. Create a varaible splits the lower word into an array, then use reverse method on the copied input array, then revert it back to a string using the join method
  3. Use an if statement to compare the input with the new flipped varaible to see if they equal eachother
  4. Return true if they match and false if they do not
*/

/*
  I store a lowercase version of the input to use for later
  I convert that stored word into an array and chain the reverse and join methods to reverse the elements in the array and turn it back into as string
  I then use a simple if statement to compare the stored lowercase input to the new flipped input and return true if they match and false if they do not
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
