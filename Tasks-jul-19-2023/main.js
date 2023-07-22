/*
    Map
    - Swap Cases
    - Inverted Numbers
    - Ignore Boolean Value
*/ 


let swapCases = "oMAR mIGDADY";
let invertedNumbers = [-1, 32, -54, 75, 98, -6];
let ignoreNumbers = "o2425m5634a7r234";


// let sc = swapCases.split("").map(function(ele) {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// }).join("");

// console.log(sc);

// arrow function
let sc = swapCases
    .split("")
    .map((ele) => ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase())
    .join("");

console.log(sc);

// let inv = invertedNumbers.map(function(ele) {
//     return -ele;
// });

// console.log(inv);

// arrow function
let inv = invertedNumbers.map((ele) => -ele);
console.log(inv);

// let ign = ignoreNumbers.split("").map(function(ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
// }).join("");

// console.log(ign);

// arrow function
let ign = ignoreNumbers
    .split("")
    .map((ele) => isNaN(parseInt(ele)) ? ele : "")
    .join("");
console.log(ign);

/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
    .split(" ")
    .filter((ele) => ele.length <= 4)
    .join(" ");

console.log(smallWords);

// Ignore Numbers
let ignoreNumbersFilter = "Elz123er4o";

let ingF = ignoreNumbersFilter
    .split("")
    .filter((ele) => isNaN(parseInt(ele)))
    .join("");

console.log(ingF)

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
    .split('')
    .filter((ele) => !isNaN(parseInt(ele)))
    .map((ele) => ele * ele)
    .join("");

console.log(mixedContent);


/*
    Reduce
    - array addidtion
    - Longest Word
    - Remove Characters + Use Reduce
*/

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function(acc, current, index, array){
//     console.log(`Accomulator = ${acc}`)
//     console.log(`Current Element = ${current}`)
//     console.log(`Current Element Index = ${index}`)
//     console.log(`Array = ${array}`)
//     console.log(`##################`)
//     return acc+current;
// }, 15);

// console.log(add);

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

let check = theBiggest
    .reduce((acc,current) => acc.length > current.length ? acc : current);

console.log(check);


let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
    .filter((ele) => ! ele.startsWith("@"))
    .reduce((acc, current) => `${acc}${current}`);

console.log(finalString);














// class Person{
//     constructor(name,birthDate,gender){
//         this.name = name;
//         this.birthDate = birthDate;
//         this.gender = gender;
//     }
    

//     calcAge(){
//         let dob = new Date(this.birthDate);
//         let month_diff = Date.now() - dob.getTime();
//         let age_dt = new Date(month_diff);
//         let year = age_dt.getUTCFullYear();
//         let age = Math.abs(year - 1970);
//         return `${this.name} is ${age} years old.`;
//     }
// }

// let p1 = new Person("Omar","12/04/2001","male");
// console.log(p1.calcAge());
