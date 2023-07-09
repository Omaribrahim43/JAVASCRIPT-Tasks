/*
let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %;
*/
let x = 250;
let zakat = 0;
zakat = x%2.5;
document.getElementById("answer-task1").innerHTML = "the zakat of a 250JDs is = " + zakat + "JDs";

/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

document.getElementById("answer-task2").innerHTML = "The Correct the syntax for the first array is [1, 7, 9, 45] <br> and The Correct the syntax for the second array is  ['Str', 'alex','moh', 'the','fox', 'over', 'lazy', 'dog']"

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

let fruits = ["Tomato", "Banana", "Watermelon"]
document.getElementById("answer-task3").innerHTML = "The index of Banana is " + fruits.indexOf("Banana") + "The index of Tomato is " + fruits.indexOf("Tomato")

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

let favorates = ["Beef Burgers", "Stakes", "GYM", "intersteller"]
document.getElementById("answer-task4").innerHTML = favorates;

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

let arr1 = [1,4,5]
let arr2 = ["t","u","g","x"]
document.getElementById("answer-task5").innerHTML = "the first element in [1,4,5] is " + arr1[0] + " the first element in ['t','u','g','x'] is " + arr2[0]

/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

let arr3 = [1,4,5]
let arr4 = ["t","u","g","x"]
document.getElementById("answer-task6").innerHTML = "the first element in [1,4,5] is " + arr3[arr3.length - 1] + " the first element in ['t','u','g','x'] is " + arr4[arr4.length - 1]

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

document.getElementById("answer-task7").innerHTML = "SEE THE CONSOLE"
let array = [0,5,7,9]
console.log(array)
console.log(array.pop())
console.log(array.pop())
console.log(array.pop())
console.log(array.pop())
console.log(array.push(1))
console.log(array.push(3))
console.log(array.push(4))
console.log(array.push(6))
console.log(array.push(8))
console.log(array.push(9))
console.log(array.push(10))
console.log(array)