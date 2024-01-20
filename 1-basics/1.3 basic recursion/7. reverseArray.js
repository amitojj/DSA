function reverseArray(arr,s,e){
    if (s>e) return arr;
    let x= arr[s];
    arr[s] = arr[e];
    arr[e] = x;
    return reverseArray(arr,s+1,e-1);
}
let arr = [1,2,3,4,5]
console.log(reverseArray(arr,0,arr.length-1))