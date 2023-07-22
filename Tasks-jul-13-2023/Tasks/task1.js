var box = document.createElement('div');
var text = document.createElement('h3');
var textP = document.createTextNode('Hover Here...');

text.appendChild(textP);
box.appendChild(text);
document.body.appendChild(box);

box.style = "border: 1px solid black; background: yellow;display: inline-block;text-align: center;";
text.style = "font-size: 15px;width: 400px;";

box.setAttribute('id', 'box');
text.setAttribute('id', 'text');

function hover(){
    text.innerHTML = ("Hello World!");
}
function unhover(){
    text.innerHTML = ("Hover Here...");
}
box.addEventListener("mouseover", hover);
box.addEventListener("mouseleave", unhover);