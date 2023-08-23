/**
*   You are given an integer array array. 
    You have to find the second largest element/value in the array or report that no such element exists.

    Problem Constraints:
            1 <= |array| <= 105
            0 <= array[i] <= 109

    Input Format
            The first argument is an integer array array.

    Output Format
            Return the second largest element. If no such element exist then return -1.

*/

// Solution:

function secondLargest(array){
    if(array.length === 1){
        return -1
    }
    let largest = 0
    let secondLargest = -1
    for(let i=0; i<=array.length-1; i++){
        if(array[i] >=  largest){
            largest = array[i]
        }
    }
    for(let i=0; i<=array.length-1; i++){
        if(array[i] > secondLargest && largest > array[i]){
            secondLargest = array[i]
        }
    }
    return Number(secondLargest)
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
// console.log(secondLargest([2, 1, 2]))

// Function Call 2:
console.log(secondLargest([2]))