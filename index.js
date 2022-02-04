const express = require("express");
const ejs = require("ejs");
const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get('/product-detail', function(req, res) {
  res.render('../views/product-detail.ejs');
});

app.get('/products', function(req, res) {
  res.render('../views/products.ejs');
});

app.get('/search', function(req, res) {
  res.render('../views/search.ejs');
});

app.get('/contact_us', function(req, res) {
  res.render('../views/contact_us.ejs');
});

app.get('/cart', function(req, res) {
  res.render('../views/cart.ejs');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));