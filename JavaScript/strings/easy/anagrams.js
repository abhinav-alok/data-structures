function anagram (A, B){
   if(A.length !== B.length){
    return 0
   }

   let str1 = A.split('').sort().join('')
   let str2 = B.split('').sort().join('')

    return str1 === str2 ? 1 : 0
}

// console.log(anagram('wwezdaudbq', 'dezwbdaqwu'))
console.log(anagram("anagram","nagaram"))
