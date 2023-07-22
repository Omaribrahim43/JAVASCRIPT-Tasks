// 1. Write a JS code to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
let arr = [13, 23, 12, 45, 22, 48, 66, 100];
for (const evennum of arr) {
  if (evennum % 2 == 0) {
    console.log(evennum);
  }
}
/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/
let n = 8;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += j + " ";
  }
  string += "\n";
}
console.log(string);
/* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
let str = prompt("enter the string :");
for (letter of str) {
  if (letter == "y") {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
