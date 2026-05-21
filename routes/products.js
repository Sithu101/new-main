const express = require('express');
const router = express.Router();

module.exports = router;

let products = [{ name: 'phone', price: 500, id: 1, colors: ["red", "blue", "black"] },
{ name: 'laptop', price: 1000, id: 2, colors: ["gray", "silver"] },
{ name: 'tablet', price: 300, id: 3, colors: ["white", "black"] },
{ name: 'headphones', price: 100, id: 4, colors: ["black", "white"] }]


// Product routes

router.get('/', (req, res) => {
    res.json({ con: true, msg: "success", result: { products } });
})

router.post('/', (req, res) => {
    let newProduct = req.body;
    products.push(newProduct);
    res.json({ con: true, msg: "new product added", result: { products } })
})

router.patch('/:name', (req, res) => {

    let name = req.params.name;
    let newPrice = req.body.price;
    let nameProduct = products.find(p => p.name === name);
    if (nameProduct) {
        nameProduct.price = newPrice;
        res.json({ con: true, msg: "product updated", result: { nameProduct } })
    } else {
        res.json({ con: false, msg: "product not found", status: 404 })
    }
})

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let findId = products.find(p => p.id == id);

    if (findId) {
        products = products.filter(p => p.id != findId.id);
        res.json({ con: true, msg: "product deleted", result: { products } })
    } else {
        res.json({ con: false, msg: "product not found", status: 404 })
    }
})