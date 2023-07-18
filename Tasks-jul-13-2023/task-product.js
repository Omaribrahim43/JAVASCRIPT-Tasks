for(let i = 0; i < 10; i++){
    let product = document.createElement("div");
    product.className = "product";
    let title = document.createElement("h3");
    let titleText = document.createTextNode("Heading");
    title.appendChild(titleText);

    let paragraph = document.createElement("p");
    let paragraphText = document.createTextNode("Lorem ipsum");
    paragraph.appendChild(paragraphText);

    product.appendChild(title);
    product.appendChild(paragraph);
    document.body.appendChild(product);
    
}

