// Write a Function that takes a string as input and returns the count of vowels in that string Consider 'a','e','i','o','u' as vowels (both lowercase and uppercase).

let countVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  console.log(arr);
  let count = 0;
  for (let char of arr) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
};

// Example usage:
console.log(countVowels("Hello world")); // Output: 4
console.log(countVowels("ThE quIck brOwn fOx")); // Output: 5
console.log(countVowels("Brrrp")); // Output: 0
