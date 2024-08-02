function displayProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        productElement.appendChild(productName);
        productElement.appendChild(productPrice);
        productElement.appendChild(productDescription);

        productContainer.appendChild(productElement);
    });
}
