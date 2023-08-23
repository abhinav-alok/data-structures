/**
 *  Problem Description:
            Given an array array and an integer num. array pair(i, j) 
            in the array is a good pair if i != j and (array[i] + array[j] == num). 
            Check if any good pair exist or not.

    Problem Constraints:
            1 <= array.size() <= 104
            1 <= array[i] <= 109
            1 <= num <= 109

    Input Format
            First argument is an integer array array.
            Second argument is an integer num.

    Output Format
            Return 1 if good pair exist otherwise return 0.

*/

// Solution:

function goodPairs(array: number[], num: number): number{
    for(let i=0; i<=array.length-1; i++){
        for(let j=i+1; j<=array.length-1; j++){
            if(array[i] + array[j] === num){
                return 1
            }
        }
    }
    return 0
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
console.log(goodPairs([1,2,3,4], 7))

// Function Call 2:
// goodPairs([1,2,4], 4)