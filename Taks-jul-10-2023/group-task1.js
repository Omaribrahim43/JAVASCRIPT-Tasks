/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  
let x = prompt("enter the first integer :")
let y = prompt("enter the second integer :")
if(x>y){
    console.log(x + " is bigger")
} else{
    console.log(y + " is bigger")
}

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

let A=3
let B=-7
let Z=2
if(A*B*Z > 0){
    window.alert("the sign is +");
} else {
    window.alert("the sign is -");
}

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  let x1 = 0
  let x2 = -1
  let x3 = 4
  if(x1>x2 && x1>x3){
    if(x2>x3){
        window.alert(x1+" "+x2+" "+x3)
    } else {
        window.alert(x1+" "+x3+" "+x2)
    }
  }
  else if(x2>x1 && x2>x3){
    if(x1>x3){
        window.alert(x2+" "+x1+" "+x3)
    } else {
        window.alert(x2+" "+x3+" "+x1)
    }
  }else if(x3>x1 && x3>x2){
    if(x1>x2){
        window.alert(x3+" "+x1+" "+x2)
    } else {
        window.alert(x3+" "+x2+" "+x1)
    }
  }

/******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
a=-5;
b=-2;
c=-6;
d= 0;
f=-1;
if (a>b && a>c && a>d && a>f)
{
    window.alert(a);
}
else if (b>a && b>c && b>d && b>f)
{
    window.alert(b);
}
else if (c>a && c>b && c>d && c>f)
{
    window.alert(c);
}
else if (d>a && d>c && d>b && d>f)
{
    window.alert(d);
}
else
{
    window.alert(f);
}
  
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
let xn = prompt("enter the x :")
let yn = prompt("enter the y :")
if(x>y){
    console.log("Hello World")
} else{
    console.log("Goodbye")
}
 /******* End Your Code ********* */
