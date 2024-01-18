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

/*
-----------
pattern 12
-----------
1      1
12    21
123  321
12344321
*/

console.log();
console.log("-----------");
console.log("pattern 12");
console.log("-----------");
for (let i = 1; i < 5; i++) {
  for (let j = 1; j < 9; j++) {
    if (j <= i) {
      process.stdout.write(j.toString());
    } else if (j >= 9 - i) {
      process.stdout.write((9 - j).toString());
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}

/*
-----------
pattern 13
-----------
1
23
456
78910
1112131415
*/

console.log();
console.log("-----------");
console.log("pattern 13");
console.log("-----------");
for (let i = 0, n = 1; i < 5; i++) {
  for (let j = 0; j <= i; j++, n++) {
    process.stdout.write(n.toString());
  }
  console.log();
}

/*
-----------
pattern 14
-----------
A
AB
ABC
ABCD
ABCDE
*/

console.log();
console.log("-----------");
console.log("pattern 14");
console.log("-----------");
for (let i = 0, n = 65; i < 5; i++,n=65) {
  for (let j = 0; j <= i; j++, n++) {
    process.stdout.write(String.fromCharCode(n));
  }
  console.log();
}

/*
-----------
pattern 15
-----------
ABCDE
ABCD
ABC
AB
A
*/

console.log();
console.log("-----------");
console.log("pattern 15");
console.log("-----------");
for (let i = 4, n = 65; i>=0 ; i--,n=65) {
  for (let j = 0; j <= i; j++, n++) {
    process.stdout.write(String.fromCharCode(n));
  }
  console.log();
}

/*
-----------
pattern 16
-----------
A
BB
CCC
DDDD
EEEEE
*/

console.log();
console.log("-----------");
console.log("pattern 16");
console.log("-----------");
for (let i = 0, n = 65; i < 5; i++, n++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(String.fromCharCode(n));
  }
  console.log();
}

/*
-----------
pattern 17
-----------
   A   
  ABA  
 ABCBA 
ABCDCBA
*/

console.log();
console.log("-----------");
console.log("pattern 17");
console.log("-----------");
for (let i = 3; i >=0; i--) {
  for (let j = 0,n = 65; j < 7; j++) {
    if (j<i || j>(6-i)) {
      process.stdout.write(" ");
    }else if(j<3){
      process.stdout.write(String.fromCharCode(n));
      n++;
    }else {
       process.stdout.write(String.fromCharCode(n));
       n--;
    }
  }
  console.log();
}
/*
-----------
pattern 18
-----------
E
DE
CDE
BCDE
ABCDE
*/

console.log();
console.log("-----------");
console.log("pattern 18");
console.log("-----------");
for (let i = 0,n=69; i < 5; i++,n--) {
  for (let j = 0,m=n; j <= i; j++,m++) {
    process.stdout.write(String.fromCharCode(m));
  }
  console.log();
}
/*
-----------
pattern 19
-----------
##########
####  ####
###    ###
##      ##
#        #
#        #
##      ##
###    ###
####  ####
##########
*/
console.log();
console.log("-----------");
console.log("pattern 19");
console.log("-----------");
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < 10; j++) {
    if (j<i || j>=(10-i)){
      process.stdout.write("#");
    }else{
      process.stdout.write(" ");
    }
  }
  console.log();
}
for (let i = 1; i <=5; i++) {
  for (let j = 0; j < 10; j++) {
    if (j<i || j>=(10-i)){
      process.stdout.write("#");
    }else{
      process.stdout.write(" ");
    }
  }
  console.log();
}
/*
-----------
pattern 20
-----------
#        #
##      ##
###    ###
####  ####
##########
####  ####
###    ###
##      ##
#        #

*/
console.log();
console.log("-----------");
console.log("pattern 20");
console.log("-----------");
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < 10; j++) {
    if (j < i || j >= 10 - i) {
      process.stdout.write("#");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}
for (let i = 4; i > 0; i--) {
  for (let j = 0; j < 10; j++) {
    if (j<i || j>=(10-i)){
      process.stdout.write("#");
    }else{
      process.stdout.write(" ");
    }
  }
  console.log();
}
/*
-----------
pattern 21
-----------
####
#  #
#  #
####
*/
console.log();
console.log("-----------");
console.log("pattern 21");
console.log("-----------");
for (let i = 2; i > 0; i--) {
  for (let j = 0; j < 4; j++) {
    if (j<i || j>=(4-i)){
      process.stdout.write("#");
    }else{
      process.stdout.write(" ");
    }
  }
  console.log();
}
for (let i = 1; i <=2; i++) {
  for (let j = 0; j < 4; j++) {
    if (j<i || j>=(4-i)){
      process.stdout.write("#");
    }else{
      process.stdout.write(" ");
    }
  }
  console.log();
}
/*
-----------
pattern 22
-----------
4444444
4333334
4322234
4321234
4322234
4333334
4444444
*/
console.log();
console.log("-----------");
console.log("pattern 22");
console.log("-----------");
for (let i = 0,n=4; i < 4; i++,n=4) {
  for (let j = 0; j < 7; j++) {
    if (j<i){
      process.stdout.write(n.toString());
      n--
    }else if(j>=6-i){
      process.stdout.write(n.toString());
      n++
    }else{
      process.stdout.write(n.toString());
    }
  }
  console.log();
}
for (let i = 2,n=4; i >= 0; i--,n=4) {
  for (let j = 0; j < 7; j++) {
    if (j<i){
      process.stdout.write(n.toString());
      n--
    }else if(j>=6-i){
      process.stdout.write(n.toString());
      n++
    }else{
      process.stdout.write(n.toString());
    }
  }
  console.log();
}
