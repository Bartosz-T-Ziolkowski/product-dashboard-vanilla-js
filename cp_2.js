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