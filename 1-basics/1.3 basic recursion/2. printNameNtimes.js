function printNtimes(n) {
  if (n === 0) {
    return;
  }
  console.log("Amit");
  printNtimes(n - 1);
}
printNtimes(6);
