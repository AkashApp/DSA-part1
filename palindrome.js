// An integaer is palindrome when it reads the same backwards as forwards.

// Input: x=12321
// Output: true

// Input: x=123
// Output: false

const isPalindrome1 = (x) => {
    return x === x.toString().split("").reverse().join("");
}
const res1 = isPalindrome1(12321);
console.log(res1);


// Optimized
const isPalindrome2 = (x) => {
    return x<0 ? false : x === x.toString().split("").reverse().join("");
}
const res2 = isPalindrome2(12321);
console.log(res2);