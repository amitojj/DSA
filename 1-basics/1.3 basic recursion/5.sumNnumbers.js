function sumNnumbers(n,sum = 0){
    if (n===0) {
        return sum;
    }
    sum += n
    sumNnumbers(n-1,sum)
}

console.log(sumNnumbers(6));