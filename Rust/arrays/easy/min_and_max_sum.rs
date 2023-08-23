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

fn sum_min_max(array: &mut[i32]) -> i32 {
    if array.len() == 1 {
        return array[0]+ array[0];
    }
    if array.len() == 2 {
        return array[0] + array[1];
    }
    let mut max = array[0];
    let mut min = array[0];
    for i in 0..array.len() { 
        if array[i] > max {
            max = array[i];
        }
        if array[i] < min {
            min = array[i];
        }
    }
    let sum = max + min;
    println!("Guess the number! {sum}");
    return sum
}

fn main() {
    // Actual function call
    sum_min_max(&mut[2, 5, 6, 3, 45, 1]);
}