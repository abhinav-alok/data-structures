/**
*  Given an array array of size N. You need to find the sum of Maximum and Minimum element in the given array.

    Problem Constraints:
            1 <= N <= 105
            -109 <= array[i] <= 109

    Input Format
            The first argument array is an integer array.

    Output Format
            Return the sum of maximum and minimum element of the array

*/

// Solution:

function sumOfTheMinAndMax(array: number[]) : number{
    if(array.length === 1){
        return Number(array[0])+Number(array[0])
    }
    if(array.length === 2){
        return Number(array[0])+Number(array[1])
    }
    let max = array[0];
    let min = array[0];
    for (let i=0; i<=array.length-1; i++){
        if(array[i] > max){
            max = array[i]
        }
        if(array[i] < min){
            min = array[i]
        }
    }
    let sum = Number(max) + Number(min)
    return sum
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
// console.log(sumOfTheMinAndMax([1, 2, 3, 4]))

// Function Call 2:
console.log(sumOfTheMinAndMax([2, 5, 6, 3, 45, 1]))