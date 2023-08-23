/**
*   Given an array A and an integer B, find the number of occurrences of B in A.

    Problem Constraints:
            1 <= B, Ai <= 109
            1 <= length(A) <= 105

    Input Format
            Given an integer array A and an integer B.

    Output Format
            Return an integer, number of occurrences of B in A.

*/

// Solution:

function linearSearch(A, B){
    let count = 0;
    for(let i=0; i<=A.length-1; i++){
        if(A[i] == B){
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