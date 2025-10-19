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
    container.innerHTML = "";
    products.slice(0, 5).forEach((p) => {
        const { name, price } = p.fields;
        const imageUrl = imageUrl(p.fields);
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
        <img class="product-image" src="${imageUrl}" alt="${escapeHtml(name)}>
        <div class="product-name">${escapeHtml(name)}</div>
        <div class="product-price>$${(price / 100).toFixed(2)}</div>
        `;
        container.appendChild(card);
    });
    statusEL.textContent = "Showing first 5 products.";
}

function handleError(error) {
    console.log("An error has occurrd:", error.message);
}