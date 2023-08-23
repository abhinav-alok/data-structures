/**
*   You are given an integer array A. 
    You have to find the second largest element/value in the array or report that no such element exists.

    Problem Constraints:
            1 <= |A| <= 105
            0 <= A[i] <= 109

    Input Format
            The first argument is an integer array A.

    Output Format
            Return the second largest element. If no such element exist then return -1.

*/

// Solution:

function secondLargest(A){
    if(A.length === 1){
        return -1
    }
    let largest = 0
    let secondLargest = -1
    for(let i=0; i<=A.length-1; i++){
        if(A[i] >=  largest){
            largest = A[i]
        }
    }
    for(let i=0; i<=A.length-1; i++){
        if(A[i] > secondLargest && largest > A[i]){
            secondLargest = A[i]
        }
    }
    return Number(secondLargest)
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
// console.log(secondLargest([2, 1, 2]))

// Function Call 2:
console.log(secondLargest([2]))