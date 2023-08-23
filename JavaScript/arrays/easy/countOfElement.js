/**
 *  Problem Description:   
 *          Given an array array of N integers. 
            Count the number of elements that have at least 1 elements greater than itself.

    Problem Constraints:
            1 <= N <= 105
            1 <= array[i] <= 109

    Input Format:
            First and only argument is an array of integers array.

    Output Format:
            Return the count of elements.

 */

// Solution:

function countOfElement(array){
    let maxElement = 0
    for(let i=0; i<=array.length-1; i++){
        if(array[i]> maxElement){
            maxElement = array[i]
        }
    }
    let countOfMaxElement = 0;
    for(let i=0; i<=array.length-1; i++){
        if(array[i] === maxElement){
            countOfMaxElement ++
        }
    }
    let ans = array.length - countOfMaxElement;
    return ans
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
// countOfElement([3, 1, 2])

// Function Call 2:
// countOfElement([5, 5, 3])