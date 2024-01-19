// Problem Statement: Given a number, print all the divisors of the number. A divisor is a number that gives the remainder as zero when divided.

//optimal aproach:

function divisors(x){
    let result  = ''
    for (let i = 1, n= Math.sqrt(x); i <=n; i++) {
      if (x%i ===0){
        result+= i + " ";
        if(i!== x/i){
            result+=x/i + " ";
        }
      }
    }
    return result;
}

console.log(divisors(1000000003));