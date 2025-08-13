function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let table = document.getElementById("cartTable");
    let total = 0;

    cart.forEach(item => {
        let row = table.insertRow();
        row.insertCell(0).innerText = item.name;
        row.insertCell(1).innerText = "$" + item.price.toFixed(2);
        total += item.price;
    });

    document.getElementById("total").innerText = "Total: $" + total.toFixed(2);
}

if (window.location.pathname.includes("cart.html")) {
    loadCart();
}
