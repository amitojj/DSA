function printNtimes(i,n){
    if ( i > n){
        return;
    }
    console.log(i);
    printNtimes(i+1,n);
}
printNtimes(1,6)