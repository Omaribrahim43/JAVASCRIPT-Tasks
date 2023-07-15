var container = document.createElement('div');
var card = document.createElement('div');
var p = document.createElement("p")
var text = document.createTextNode("Mohammad")
var age =document.createElement("p")
var numb=document.createTextNode("23")



p.setAttribute("class" ,"text")
container.setAttribute('class', 'container')
card.setAttribute('class','card')

p.appendChild(text);
card.appendChild(p);
container.appendChild(card);
document.body.appendChild(container);
