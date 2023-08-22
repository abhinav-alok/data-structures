/**
 *  Problem Description:
            Given an array A of N integers and also given two integers B and C. 
            Reverse the elements of the array A within the given inclusive range [B, C].

    Problem Constraints:
            1 <= N <= 105
            1 <= A[i] <= 109
            0 <= B <= C <= N - 1

    Input Format
            The first argument A is an array of integer.
            The second and third arguments are integers B and C

    Output Format
            Return the array A after reversing in the given range.


*/

// Solution:

function rangeReverse(A, B){
    while(B < C) {
        let temp = A[B];
        A[B] = A[C];
        A[C] = temp;
        B++;
        C--
    }
    return A
}

// Please uncomment the function call for which you want to execute the code.

// Function Call 1:
console.log(rangeReverse([1,2,3,4], 7))

// Function Call 2:
// rangeReverse([1,2,4], 4)