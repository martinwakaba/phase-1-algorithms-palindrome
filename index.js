function isPalindrome(word) {
  // Write your algorithm here

  word = word.replace(/[^a-z]/g, '').toLowerCase();


  const reversedWord = word.split('').reverse().join('');

  
  return word === reversedWord;
}

/* 
  Add your pseudocode here

  function isPalindrome(word):
    # Remove non-alphabet characters and convert to lowercase
    word = word.replace(/[^a-z]/g, '').toLowerCase()

    # Initialize a variable to store the reversed word
    reversedWord = ""

    # Loop through the characters of the word in reverse order
    for i from length(word) - 1 down to 0:
        # Append the current character to the reversedWord
        reversedWord += word[i]

    # Compare the original word with the reversed word
    if word == reversedWord:
        return true
    else:
        return false
*/

/*
  Add written explanation of your solution here

  Pseudocode Explanation:

Function Definition: The function is defined as isPalindrome(word) where word is the input string we want to check for palindromic properties.

Preprocessing the Input:

word = word.replace(/[^a-z]/g, '').toLowerCase(): This line first removes any non-alphabet characters from the input string, ensuring that the check is case-insensitive and only considers lowercase letters. It also converts the string to all lowercase characters to further standardize the comparison.
Initialize Reversed Word:

reversedWord = "": Here, we initialize an empty string called reversedWord to store the reversed version of the input word.
Reverse the Word:

for i from length(word) - 1 down to 0: This loop iterates through the characters of the original word in reverse order, starting from the last character and going backwards.
reversedWord += word[i]: Inside the loop, each character is appended to the reversedWord, effectively reversing the original word.
Check for Palindrome:

if word == reversedWord: After reversing the word, we compare the original word with the reversed word. If they are the same, it means the input is a palindrome.
Return the Result:

If the comparison in the previous step is true, the function returns true, indicating that the input is a palindrome. Otherwise, it returns false.
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
