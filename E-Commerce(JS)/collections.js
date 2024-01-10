let search = document.getElementById("search");
let Container = document.querySelector(".products");
let products = Container.querySelectorAll("div");

search.addEventListener("keyup", (event) => {
    let enteredValue = event.target.value.toLowerCase();  

    for (let count = 0; count < products.length; count++) {
        let productName = products[count].querySelector("p").textContent.toLowerCase();

        if (productName.indexOf(enteredValue) < 0) {
            products[count].style.display = "none";
        } else {
            products[count].style.display = "block";
        }
    }

    if (!enteredValue) {
        products.forEach(product => {
            product.style.display = "block";
        });
    }
});