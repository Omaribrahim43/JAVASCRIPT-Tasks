// let swapCases = "oMAR mIGDADY";

// let sc = swapCases
//   .split("")
//   .map(function (ele) {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// console.log(sc);

// let invertedNumbers = [-1, 32, -54, 75, 98, -6];

// let inv = invertedNumbers.map(function (ele) {
//     return -ele;
// });

// console.log(inv);

// let ignoreNumbers = "o2425m5634a7r234";

// let ign = ignoreNumbers
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");

// console.log(ign);

// let arr = [2, 7, 9, 32, 57, 21];
// let double = arr.map((ele) => ele * 2);
// console.log(double);

// let arr = [2, 5, 100];
// let str = arr.map(function(ele){
//     return ele.toString();
// })

// let sentence = "I Love Foood Code Too Playing Much";

// let se = sentence.split(" ").filter((ele) => {
//   return ele.length <= 4;
// });

// console.log(se);

// let ignoreNumbers = "o2425m5634a7r234";

// let ign = ignoreNumbers
//   .split("")
//   .filter(function (ele) {
//     return isNaN(parseInt(ele));
//   })
//   .join("");

// console.log(ign);

// let mix = "A13BS2ZX";

// let mixed = mix
//   .split("")
//   .filter((ele) => {
//     return !isNaN(parseInt(ele));
//   })
//   .map((ele) => {
//     return ele * ele;
//   });

// console.log(mixed);

function repeatedChar(word, char) {
  return word.split("").filter((ele) =>  ele === char).length;
}

console.log("hello world".split("").filter((ele) =>  ele === "o"));
console.log(repeatedChar("hello world", "o"));
