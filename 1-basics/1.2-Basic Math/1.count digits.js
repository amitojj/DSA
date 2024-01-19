// Given an integer N, write a program to count the number of digits in N.
const numberOfDigits = (n) => {
    return Math.floor(Math.log10(n))+1;
}

// const numberOfDigits = (n) => {
//     let digits = 0;
//     let r = n;
//    while(r/10 > 0){
//     r = Math.floor(r/10);
//     digits++;
//    }
//    return digits;
// }

//or use n.toString().length;

console.log(numberOfDigits(12345));