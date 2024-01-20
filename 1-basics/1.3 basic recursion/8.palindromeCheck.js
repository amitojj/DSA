function isPalindrome(str, s = 0) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (s > str.length/2) return true;
  if (str[s] !== str[str.length-s-1]) {
    return false;
  }
  return isPalindrome(str, s + 1);
}
let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));