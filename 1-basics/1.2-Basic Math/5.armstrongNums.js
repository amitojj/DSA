// Armstrong Numbers are the numbers having the sum of digits raised to power no. of digits is equal to a given number. Examples- 0, 1, 153, 370, 371, 407, and 1634 are some of the Armstrong Numbers.
// Problem Statement: Given a number, check if it is Armstrong Number or Not.
function isArmstrong(x) {
  let len = Math.floor(Math.log10(x)) + 1;
  let sum = 0;
  let xt = x;
  while (xt != 0) {
    sum += (xt % 10) ** len;
    xt = Math.floor(xt / 10);
  }
  if (sum === x) {
    return true;
  } else {
    return false;
  }
}
console.log(isArmstrong(1634));
