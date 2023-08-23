/**
 *  Problem Description:   
 *          Given an array A of N integers. 
            Count the number of elements that have at least 1 elements greater than itself.

    Problem Constraints:
            1 <= N <= 105
            1 <= A[i] <= 109

    Input Format:
            First and only argument is an array of integers A.

    Output Format:
            Return the count of elements.

 */

// Solution:

function countsOfElement(A: number[]): number{
    let maxElement = 0
    for(let i=0; i<=A.length-1; i++){
        if(A[i]> maxElement){
            maxElement = A[i]
        }
    }
    let countOfMaxElement = 0;
    for(let i=0; i<=A.length-1; i++){
        if(A[i] === maxElement){
            countOfMaxElement ++
        }
    }
    let ans = A.length - countOfMaxElement;
    return ans
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
// countsOfElement([3, 1, 2])

// Function Call 2:
countsOfElement([5, 5, 3])