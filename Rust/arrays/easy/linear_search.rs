/**
*   Given an array array and an integer B, find the number of occurrences of B in array.

    Problem Constraints:
            1 <= B, Ai <= 109
            1 <= length(array) <= 105

    Input Format
            Given an integer array array and an integer B.

    Output Format
            Return an integer, number of occurrences of B in array.

*/

// Solution:

fn linear_search(array: &mut[i32], target: i32) -> i32 {
    //loop through the array
    let mut count = 0i32;
    for i in 0..array.len() { 
        if array[i] == target {
            // increase the count if target is found
            count += 1;
        }
    } 
    return count;  
}

fn main() {

    // Please uncomment the function call for which you want to execute the code.

    // Actual function call
    linear_search(&mut[1, 2, 2, 2], 2);
}