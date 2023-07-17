let btn = document.getElementById("btn");
const x = new XMLHttpRequest();
x.open("GET", "data.json");

btn.onclick = function() {
    x.onload = function() {
        const Obj = JSON.parse(this.responseText);
        let table = document.getElementById("tableBody");
        for(let i = 0; i < Obj.length; i++){
            let newRow = document.createElement("tr");
            var nameCell = document.createElement("td");
            nameCell.innerHTML = Obj[i].name;
            newRow.appendChild(nameCell);

            var ageCell = document.createElement("td");
            ageCell.innerHTML = Obj[i].age;
            newRow.appendChild(ageCell);

            var majorCell = document.createElement("td");
            majorCell.innerHTML = Obj[i].major;
            newRow.appendChild(majorCell);

            var universityCell = document.createElement("td");
            universityCell.innerHTML = Obj[i].university;
            newRow.appendChild(universityCell);

            var imageCell = document.createElement("td");
            var image = document.createElement("img");
            image.src = Obj[i].Image;
            image.alt = Obj[i].name;
            imageCell.appendChild(image);
            newRow.appendChild(imageCell);
            table.appendChild(newRow);
        }
    }
    x.send();
}