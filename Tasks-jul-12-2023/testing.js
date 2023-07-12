function calculator(x=5,y=5,sign){
    let result = 0;
    if(sign == "+"){
        result = x+y;
    }
    else if(sign == "-"){
        result = x-y;
    }
    else if(sign == "*"){
        result = x*y;
    }
    else if(sign == "/"){
        result = x/y;
    }
    else if(sign == "**"){
        result = x**y;
    }
    else {
        result = "Choose from these opreators (+ , * , - , / , **)"
    }
    return result;
}

let add = calculator();
document.getElementById("test").innerHTML = add;

const car = {
    name:"BMW",
     id: "76348",
      color:"red",
       model:"2013",
       speed:"100",
       stop : function() {
        return this.speed = 0;
       }
    }

console.log(car.model = 2015)
console.log(car.speed)
car.stop()
console.log(car.speed)

const person = {
    firstName: "omar",
    lastName:"migdady",
    age: "21",
    eyes: "brown",
    
    set firstName(newName){
        this.firstName = newName;
    },
    get firstName(){
        return this.firstName;
    },
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    address : {
        street:"lkf",
        contact: {
            email:"oknedfo@lkansf.com",
            phone:"+9627777777"
        }
    }
}

person.name = "Ahmad"





