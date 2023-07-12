/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

let grade = 68;
if(grade >= 90){
    console.log("A");
}
else if(grade >= 80){
    console.log("B");
}
else if(grade >= 70){
    console.log("C");
}
else if(grade <= 70 && grade > 60){
    console.log("D");
}
else if(grade < 60 && grade > 50){
    console.log("E");
}
else{
    console.log("Fail");
}