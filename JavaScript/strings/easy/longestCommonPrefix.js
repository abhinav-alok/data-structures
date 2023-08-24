function longestCommonPrefix(array){
    // Edge Case 1
    if(array.length === 1){
        return array[0]
    }
     // Edge Case 2
    if(!array.length){
        return ""
    }
    let result = ''
    for(let i=0; i<=array[0].length; i++){
        result += compare(array[0].charAt(i), i, array)
    }
    return result
}

function compare(char, charIndex, array){
    let i=1;
    let count = 1
    while(i<array.length){
        if(array[i].charAt(charIndex) === char){
            count++
        }
        i++;
    }

    return count === array.length ? char : ''
}


// console.log(longestCommonPrefix(["abcdefgh", "aefghijk", "abcefgh"]), "longestCommonPrefix)")

console.log(longestCommonPrefix(["abab", "ab", "abcd"]))