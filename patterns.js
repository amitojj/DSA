/*
-----------
pattern 1
-----------
 ####
 ####
 ####
 ####
 */
console.log("-----------");
console.log("pattern 1");
console.log("-----------");

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    process.stdout.write("#");
  }
  console.log();
}

/*
-----------
pattern 2
-----------
#
##
###
####
*/
console.log();
console.log("-----------");
console.log("pattern 2");
console.log("-----------");

for (let i = 0, n = 1; i < 4; i++, n++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write("#");
  }
  console.log();
}

/*
-----------
pattern 3
-----------
1
12
123
1234
12345
*/
console.log();
console.log("-----------");
console.log("pattern 3");
console.log("-----------");
for (let i = 0, n = 1; i < 5; i++, n++) {
  for (let j = 1; j <= n; j++) {
    process.stdout.write(j.toString());
  }
  console.log();
}
/*
-----------
pattern 4
-----------
1
22
333
4444
55555
*/
console.log();
console.log("-----------");
console.log("pattern 4");
console.log("-----------");
for (let i = 1, n = 1; i < 6; i++, n++) {
  for (let j = 1; j <= n; j++) {
    process.stdout.write(i.toString());
  }
  console.log();
}

/*
-----------
pattern 5
-----------
#####
####
###
##
#
*/
console.log();
console.log("-----------");
console.log("pattern 5");
console.log("-----------");

for (let i = 0, n = 4; i < 5; i++, n--) {
  for (let j = n; j >= 0; j--) {
    process.stdout.write("#");
  }
  console.log();
}

/*
-----------
pattern 6
-----------
54321
4321
321
21
1
*/
console.log();
console.log("-----------");
console.log("pattern 6");
console.log("-----------");

for (let i = 0, n = 4; i < 5; i++, n--) {
  for (let j = n + 1; j > 0; j--) {
    process.stdout.write(j.toString());
  }
  console.log();
}

/*
    #    
   ###   
  #####  
 ####### 
#########
*/
console.log();
console.log("-----------");
console.log("pattern 7");
console.log("-----------");

for (let i = 0, n = 4; i < 10; i += 2, n--) {
  for (let j = 0; j < n; j++) {
    process.stdout.write(" ");
  }
  for (let k = 0; k <= i; k++) {
    process.stdout.write("#");
  }
  for (let l = 0; l < n; l++) {
    process.stdout.write(" ");
  }
  console.log();
}

/*
 -----------
pattern 8
-----------
#########
 ####### 
  #####  
   ###   
    #   
*/
console.log();
console.log("-----------");
console.log("pattern 8");
console.log("-----------");

for (let i = 9, n = 0; i > 0; i -= 2, n++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write(" ");
  }
  for (let k = 0; k < i; k++) {
    process.stdout.write("#");
  }
  for (let l = 0; l < n; l++) {
    process.stdout.write(" ");
  }
  console.log();
}

/*
-----------
pattern 9
-----------
    #    
   ###   
  #####  
 ####### 
#########
#########
 ####### 
  #####  
   ###   
    #  
*/
console.log();
console.log("-----------");
console.log("pattern 9");
console.log("-----------");

for (let i = 0, n = 4; i < 10; i += 2, n--) {
  for (let j = 0; j < n; j++) {
    process.stdout.write(" ");
  }
  for (let k = 0; k <= i; k++) {
    process.stdout.write("#");
  }
  for (let l = 0; l < n; l++) {
    process.stdout.write(" ");
  }
  console.log();
}
for (let i = 9, n = 0; i > 0; i -= 2, n++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write(" ");
  }
  for (let k = 0; k < i; k++) {
    process.stdout.write("#");
  }
  for (let l = 0; l < n; l++) {
    process.stdout.write(" ");
  }
  console.log();
}
/*
-----------
pattern 10
-----------
#    
##   
###  
#### 
#####
#####
#### 
###  
##   
#    
*/
console.log();
console.log("-----------");
console.log("pattern 10");
console.log("-----------");

for (let i = 0, n = 4; i < 5; i++, n--) {
  for (let k = 0; k <= i; k++) {
    process.stdout.write("#");
  }
  for (let l = 0; l < n; l++) {
    process.stdout.write(" ");
  }
  console.log();
}
for (let i = 5, n = 0; i > 0; i--, n++) {
  for (let k = 0; k < i; k++) {
    process.stdout.write("#");
  }
  for (let l = 0; l < n; l++) {
    process.stdout.write(" ");
  }
  console.log();
}

/*
-----------
pattern 11
-----------
1
01
101
0101
10101
*/

console.log();
console.log("-----------");
console.log("pattern 11");
console.log("-----------");

for (let i = 0, k = "1", l; i < 5; i++) {
  k === "0" ? (l = "1") : (l = "0");
  process.stdout.write(k);
  for (let j = 1; j <= i; j++) {
    process.stdout.write(l);
    l === "0" ? (l = "1") : (l = "0");
  }
  console.log();
  k === "0" ? (k = "1") : (k = "0");
}
console.log();
console.log("-----------");
console.log("pattern 11");
console.log("-----------");

for (let i = 0, k = 1, l; i < 5; i++) {
  i % 2 == 0 ? (k = 1) : (k = 0);
  for (let j = 0; j <= i; j++) {
    process.stdout.write(k.toString());
    k = 1 - k;
  }
  console.log();
}
