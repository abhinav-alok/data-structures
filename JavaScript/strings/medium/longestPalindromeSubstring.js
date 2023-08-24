/**
*  Problem Description:
        Given a string str, return the longest palindromic substring in str.

    Problem Constraints:
        1 <= s.length <= 1000

    Input Format
        Input: s = "babad"

    Output Format
        Output: "bab"
*/

// Solution:

/**
 *  In this question we need to consider two scenarios:
        1. Odd numbered Palindrome (consider any 1 index as center and expand both sides)
        2. Even numbered Palindrome (consider any 2 index as center and expand both sides)
         
        return the max of both
 */


function longestPalindrome(str) {
    let evenPalindrome = ''
    let oddPalindrome = ''

    // Odd Numbered Palindorme
    for (let i=0; i<str.length; i++) {
        let x = expand(i, i, str)
        if(x.length > oddPalindrome.length){
            oddPalindrome = x
        }
    }
    // Even Numbered Palindorme
    for (let i = 0; i<str.length; i++) {
        let x = expand(i, i+1, str)
        if(x.length > evenPalindrome.length){
            evenPalindrome = x
        }
    }
    return evenPalindrome.length >= oddPalindrome.length ? evenPalindrome : oddPalindrome
}
function expand(a, b, str) {
    let isPalindrome = false
    while (a>=0 && b<str.length && (str.charAt(b) === str.charAt(a))) {
        b++;
        a--;
        isPalindrome = true;
    }

    // We have add 1 to a, since we have already decrease the index even after though the condition
    // str.charAt(b) === str.charAt(a) failed mid loop. Dry Run 2nd example for understading it more.
    return isPalindrome ? str.substring(a+1, b) : ''
}

// console.log(longestPalindrome('abba'))

console.log(longestPalindrome('xbdyzzydbdyzyde'))
