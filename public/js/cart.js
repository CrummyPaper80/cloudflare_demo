let carts = document.querySelectorAll('.bxs-cart-add');

let compProducts = [
    {
        name: 'AMD Prebuilt 1',
        tag: "amdprebuilt1",
        prev_price: "600",
        curr_price: 500,
        inCart: 0
    },
    {
        name: 'AMD Prebuilt 2',
        tag: "amdprebuilt2",
        prev_price: '1000',
        curr_price: 900,
        inCart: 0
    },
    {
        name: 'Intel Prebuilt 1',
        tag: "intelprebuilt1",
        prev_price: "600",
        curr_price: 500,
        inCart: 0
    },
    {
        name: 'Intel Prebuilt 2',
        tag: "intelprebuilt2",
        prev_price: '1000',
        curr_price: 900,
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(compProducts[i]);
        totalCost(compProducts[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(compProducts) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } 
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(compProducts);
}

function setItems(compProducts) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null) {
        if(cartItems[compProducts.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [compProducts.tag]: compProducts
            }
        }
        cartItems[compProducts.tag].inCart += 1;
    }
    else{
        compProducts.inCart = 1;
        cartItems = {
            [compProducts.tag]: compProducts
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(compProducts) {
   let cartCost = localStorage.getItem("totalCost");
    
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + compProducts.curr_price);
    }
    else{
        localStorage.setItem("totalCost", compProducts.curr_price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");
    
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                
                <img src="../public/media/images/new/${item.tag}.jpg" style="width:50px; height:50px;">
                <span style="width:150px; height:50px;">${item.name}</span>
            </div>
            <div class="price">$${item.curr_price}.00</div>
            <div class="quantity"> 
                
                <span>${item.inCart}</span>
                 
            </div>
            <div class="total">
                $${item.inCart * item.curr_price}.00
            </div>
            `;
        });
        productContainer.innerHTML += `
            <div class="basketTotalContainer>
                <h4 class="basketTotalTitle>
                    Cart Total
                </h4>
                <h4 class="basketTotal>
                    $${cartCost}.00
                </h4>
            </div>
        `
    }
}

onLoadCartNumbers();
displayCart();