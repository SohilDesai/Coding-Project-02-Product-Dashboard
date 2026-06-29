console.log("Product Dashboard Loaded");
function fetchProductsThen() {

    fetch("https://www.course-api.com/javascript-store-products")
        .then(response => response.json())
        .then(products => {

            products.forEach(product => {
                console.log(product.fields.name);
            });

        })
        .catch(error => {
            console.log(error);
        });

}
function handleError(error) {

    console.log("An error occurred:", error.message);

}
function displayProducts(products) {

    let productContainer = document.getElementById("product-container");

    products.slice(0, 5).forEach(product => {

        let productCard = document.createElement("div");

        productCard.className = "product-card";

        productCard.innerHTML = `
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
            <h3>${product.fields.name}</h3>
            <p>$${(product.fields.price / 100).toFixed(2)}</p>
        `;

        productContainer.appendChild(productCard);

    });

}
async function fetchProductsAsync() {

    try {

        const response = await fetch(
            "https://www.course-api.com/javascript-store-products"
        );

        const products = await response.json();

        displayProducts(products);

    }
    catch (error) {

        handleError(error);

    }

}
fetchProductsThen();
fetchProductsAsync();
