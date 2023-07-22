/*
 * Exercise 1:
 * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
 *
 * Test Case:
 *    Test Case 1: doubleValues([1,2,3])
 *    Test Case 2: doubleValues([5,1,2,3,10])
 *
 * Result:
 * Test Case 1:  [2,4,6]
 * Test Case 2: [10,2,4,6,20]
 *
 *
 */

function doubleValues(arr) {
  let newArr = [];
  arr.forEach((ele) => {
    newArr.push(ele * 2);
  });
  return newArr;
}
console.log(doubleValues([1, 2, 3]));
console.log(doubleValues([10, 2, 4, 6, 20]));
/*
 * Exercise 2:
 * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
 *
 * Test Cases:
 *   onlyEvenValues([1,2,3])
 *   onlyEvenValues([5,1,2,3,10])
 *
 * Result:
 *  Test Case 1:  [2]
 *  Test Case 2: [2,10]
 */
function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach((element) => {
    if (element % 2 == 0) {
      newArr.push(element);
    }
  });
  return newArr;
}
console.log(onlyEvenValues([1, 2, 3]));
console.log(onlyEvenValues([5, 1, 2, 3, 10]));
/*
 * Exercise 3:
 * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
 *
 * Test Case:
 *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])
 *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])
 *
 * Result:
 * Test Case 1: ["ct", "mt", "tm", "uy"]
 * Test Case 2: ['hi', 'ge', 'se']
 *
 */
function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach((element) => {
    let str = "";
    str += element[0] + element[element.length - 1];
    newArr.push(str);
  });
  return newArr;
}
console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"]));

/*
 * Exercise 4:
 * Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed
 * to the function with the new key and value added for each object
 *
 * Test Cases:
 *   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')
 *
 * Result:
 *   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
 *
 */

function addKeyAndValue(arr, key, value, i) {
  arr.forEach((element, indx) => {
    indx === i ? (element[key] = value) : "";
  });
  return arr;
}
let arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];
console.log(addKeyAndValue(arr, "title", "instractor", 1));
/*
 * Exercise 5:
 * Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the
 * values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
 *
 * Test Cases 1: vowelCount('Elie') // {e:2,i:1};
 * Test Cases 2:  vowelCount('Tim') // {i:1};
 * Test Cases 3:  vowelCount('Matt') // {a:1})
 * Test Cases 4:  vowelCount('hmmm') // {};
 * Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
 *
 *
 * Result:
 * Test Cases 1: {e:2,i:1};
 * Test Cases 2: {i:1};
 * Test Cases 3: {a:1})
 * Test Cases 4: {};
 * Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
 *
 */

function vowelCount(str) {
  let vowels = ["e", "i", "a", "o", "u"];
  let arr = {};
  str
    .split("")
    .forEach((element) => {
      element = element.toLowerCase();
      console.log(element);
      if (vowels.includes(element)) {
        if (arr.hasOwnProperty(element)) {
          arr[element]++;
        } else {
          arr[element] = 1;
        }
      }
    });
  return arr;
}
console.log(vowelCount("Elie"));
console.log(vowelCount("Tim"));
console.log(vowelCount("Matt"));
console.log(vowelCount("I Am awesome and so are you"));
//                                                          {i: 1, a: 4, e: 3, o: 3, u: 1};