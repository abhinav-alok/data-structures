/**
*  Given an array A of size N. You need to find the sum of Maximum and Minimum element in the given array.

    Problem Constraints:
            1 <= N <= 105
            -109 <= A[i] <= 109

    Input Format
            The first argument A is an integer array.

    Output Format
            Return the sum of maximum and minimum element of the array

*/

// Solution:

function sumOfMinAndMax(A){
    if(A.length === 1){
        return Number(A[0])+Number(A[0])
    }
    if(A.length === 2){
        return Number(A[0])+Number(A[1])
    }
    let max = A[0];
    let min = A[0];
    for (let i=0; i<=A.length-1; i++){
        if(A[i] > max){
            max = A[i]
        }
        if(A[i] < min){
            min = A[i]
        }
    }
    let sum = Number(max) + Number(min)
    return sum
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
// console.log(sumOfMinAndMax([1, 2, 3, 4]))

// Function Call 2:
console.log(sumOfMinAndMax([2, 5, 6, 3, 45, 1]))