//greatest common divisor

//brute force
let num1 = 4,
  num2 = 8;
let ans;

for (let i = 1; i <= Math.min(num1, num2); i++) {
  if (num1 % i === 0 && num2 % i === 0) {
    ans = i;
  }
}

console.log("The GCD of the two numbers is " + ans);

//Euclidean’s theorem: If a number is divided by both a and b, it is should be divided by (a-b) and b as well.
function gcd(a,b){
    if (a>b) return gcdHelper(a,b);
    else return gcdHelper(b, a);    // if ()
}
function gcdHelper(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}

console.log(gcd(40,64));