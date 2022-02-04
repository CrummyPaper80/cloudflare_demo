let products = [
    {
        name: 'AMD Prebuilt 1',
        tag: "amdprebuilt1",
        prev_price: "600",
        curr_price: "500",
        inCart: 0
    },
    {
        name: 'AMD Prebuilt 2',
        tag: "amdprebuilt2",
        prev_price: '1000',
        curr_price: '900',
        inCart: 0
    },
    {
        name: 'Intel Prebuilt 1',
        tag: "intelprebuilt1",
        prev_price: "600",
        curr_price: "500",
        inCart: 0
    },
    {
        name: 'Intel Prebuilt 2',
        tag: "intelprebuilt2",
        prev_price: '1000',
        curr_price: '900',
        inCart: 0
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))
