// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// var reverse = function (x) {
//     let reversed='';
//     let xs;
//     if (x<0){
//         reversed+= '-'
//         xs = Math.abs(x).toString()
//     }else{
//         xs = x.toString();
//     }
    
//     for (let i = xs.length-1; i >=0; i--) {
//       reversed += xs[i]
//     }
    
    
//     if (Number(reversed) < (-2) ** 31 || Number(reversed) > (2 ** 31)-1) {
//         return 0;
//     }
//     return Number(reversed);

// };
// let x = 2147483648;
//approach 2
var reverse = function (x) {
  let xa = Math.abs(x);
  let reversed = 0;
  while (xa > 0) {
    reversed = reversed * 10 + (xa % 10);
    xa = Math.floor(xa / 10);
  }
  if (reversed > 2 ** 31 - 1) {
    return 0;
  }
  if (x < 0) {
    reversed *= -1;
  }
  return reversed;
};
let x = -147;
console.log(reverse(x));