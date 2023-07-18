let container = document.getElementsByClassName("container");

async function fetchMovies() {
    const response = await fetch('https://fakestoreapi.com/products');
    const element = await response.json();
    for(let i = 0; i < element.length; i++){
        let category = document.createElement('div');
        let img = document.createElement('img');
        img.src = element[i].image;
        category.appendChild(img);
        

        let categoryType = document.createElement('p');
        categoryType.innerHTML = element[i].category;
        category.appendChild(categoryType);

        let price = document.createElement('h4');
        price.innerHTML = element[i].price + "$";
        category.appendChild(price);

        container[0].appendChild(category);
    }
}
fetchMovies();