document.write('<h1>Here is : ', 'Reduce & Filter</h1>');
document.write("<hr>");
//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/

let avgAge = (array) => {
  const sum = array.reduce((acc, curr) => acc + curr);
  return sum/array.length
};
let agesArr = persons.map(person => person.age);
document.write(avgAge(agesArr));
document.write("<hr>");
/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longest full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
let longestName = (array) => {
  return array.reduce((acc, curr) => acc.length > curr.length ? acc : curr);
}
let namesArr = persons.map((person) => `${person.name.first} ${person.name.last}`);

document.write(longestName(namesArr));
document.write("<hr>");
/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
let maxNumber = (array) => {
  return array.reduce((acc, curr) => acc > curr ? acc : curr);
}
document.write(maxNumber([1,2,4,9]));
document.write("<hr>");
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
function repeatChar(string, char){
  return string.split("").filter((ele) => ele === char).length;
}
document.write(repeatChar("hello world","o"));
document.write("<hr>");
/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/
function usAndNumberBeetweenUs(x, y){
  let resultArray = Array.from({ length: y - x + 1 }).reduce((acc, curr, index) => {
    acc.push(x + index);
    return acc;
  }, []);
  return resultArray;
}
document.write(usAndNumberBeetweenUs(2,5));
document.write("<hr>");
//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
let evenOnly = (array) => {
  return array.filter((ele) => ele % 2 == 0);
}
document.write(evenOnly([1,8,6,4]));
document.write("<hr>");

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
let multiFour = (array) => {
  return array.filter((ele) => ele % 4 == 0);
}
document.write(multiFour([1,8,6,4]));
document.write("<hr>");
/*
8
**this question not that easy maybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
let containChar = (array, char) => {
  return array.filter((ele) => ele.includes(char));
}
document.write(containChar(["hello","world"],"w"));
document.write(containChar(["hello","world"],"l"));
document.write("<hr>");
/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
let evenIndexOddLength = (array) => {
  return array.filter((ele, i) => ele.length % 2 == 1 && i % 2 == 0);
}
strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
document.write(evenIndexOddLength(strings));
document.write("<hr>");
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
let olderThan = (array, num) => {
  return array.filter(function(ele) {
    return ele > num;
  });
};
document.write(olderThan(agesArr, 56));
document.write("<hr>");
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
let shorterThan = (array, num) => {
  return array.filter((ele) => ele.length < num);
}
var strings = ["alex","mercer","madrasa","rashed2","emad","hala"];
document.write(shorterThan(strings,5));
document.write("<hr>");
// if you finish the exercises review the material of the week and help your classmate
