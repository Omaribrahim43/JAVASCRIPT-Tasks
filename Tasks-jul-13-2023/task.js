function createContainer(arrName,arrAge){
    var container = document.createElement('div');
    container.setAttribute('class', 'container');

    for(i = 0; i < arrName.length; i++){
        var card = document.createElement('div'),
        name = document.createElement('h2'),
        age = document.createElement('span'),
        image = document.createElement('img');
        image.src = "image.jpg";

        card.classList.add("card");
        name.classList.add("name");
        age.classList.add("age");
        image.classList.add("image");

        image.style = "width: 250px; display: block";
        card.style = "border: 1px black solid; display: inline-block; padding: 20px; margin: 10px;";

        var nameP = document.createTextNode(`${arrName[i]}`);
        var ageP = document.createTextNode(`${arrAge[i]}`);
        
        name.appendChild(nameP);
        age.appendChild(ageP);
        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(image);
        container.appendChild(card);
    }
    document.body.appendChild(container);
}


var arrNames = ["omar migdady", "Ahmad Al Tamimi", "Salam Al Tamimi", "Rania Taha", "omar yub"];
var arrAges = [21, 23, 25, 22];
createContainer(arrNames, arrAges);