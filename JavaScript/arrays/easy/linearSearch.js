/**
*   Given an array array and an integer num, find the number of occurrences of num in array.

    Problem Constraints:
            1 <= num, Ai <= 109
            1 <= length(array) <= 105

    Input Format
            Given an integer array array and an integer num.

    Output Format
            Return an integer, number of occurrences of num in array.

*/

// Solution:

function linearSearch(array, num){
    let count = 0;
    for(let i=0; i<=array.length-1; i++){
        if(array[i] == num){
            count++
        }
    }
    return count
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
// console.log(linearSearch([1, 2, 1], 3))

// Function Call 2:
console.log(linearSearch([1, 2, 2], 2 ))