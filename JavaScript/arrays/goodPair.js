/**
 *  Problem Description:
            Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B). Check if any good pair exist or not.

    Problem Constraints:
            1 <= A.size() <= 104
            1 <= A[i] <= 109

            1 <= B <= 109

    Input Format
            First argument is an integer array A.
            Second argument is an integer B.

    Output Format
            Return 1 if good pair exist otherwise return 0.

*/

// Solution:

function goodPair(A, B){
    for(let i=0; i<=A.length-1; i++){
        for(let j=i+1; j<=A.length-1; j++){
            if(A[i] + A[j] === B){
                return 1
            }
        }
    }
    return 0
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
console.log(goodPair([1,2,3,4], 7))

// Function Call 2:
// goodPair([1,2,4], 4)