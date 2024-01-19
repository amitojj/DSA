// Problem Statement: Given a number, check whether it is prime or not. A prime number is a natural number that is only divisible by 1 and by itself.
function checkPrime(x) {
  for (let i = 2, n = Math.sqrt(x); i <= n; i++) {
    if (x % i === 0) {
      return false
    }
  }
  return true;
}

console.log(checkPrime(1000000007));