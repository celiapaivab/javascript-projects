
// function reverse(str) {
//    return str.split('').reverse().join('');
// }

// function isPalindrome(str) {
//    return reverse(str) === str;
// }


function isPalindrome(str) {
   let reversed = str.split('').reverse().join('');
    console.log (reversed)
    return reversed === str;
  
}

console.log(isPalindrome('macaco'))