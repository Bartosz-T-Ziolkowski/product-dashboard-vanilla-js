function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            console.log(product.fields.name);
        });
    })
    .catch(error => {
        console.log("An error has occurred:", error.message);
    });
}

async function fetchProductsAsync() {
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        const products = await response.json();
        displayProducts(products);
    }   catch (error) {
        handleError(error);
    }
}

function displayProducts(products) {
    const container = document.getElementById("product-container");
    const firstFive = products.slice(0, 5);
    firstFive.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        const img = document.createElement("img");
        img.src = product.fields.image[0].url;

        const name = document.createElement("h3");
        name.textContent = product.fields.name;

        const price = document.createElement("p");
        price.textContent = `$${product.fields.price / 100}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        container.appendChild(card);
    });
}

function handleError(error) {
    console.log("An error has occurrd:", error.message);
}

fetchProductsThen();
fetchProductsAsync();