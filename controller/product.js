

let products = [{ name: 'phone', price: 500, id: 1, colors: ["red", "blue", "black"] },
{ name: 'laptop', price: 1000, id: 2, colors: ["gray", "silver"] },
{ name: 'tablet', price: 300, id: 3, colors: ["white", "black"] },
{ name: 'headphones', price: 100, id: 4, colors: ["black", "white"] }]

const all = (req, res) => {
    res.json({ con: true, msg: "success", result: { products } });
}

const add = (req, res) => {
   let newProduct = req.body;
   products.push(newProduct);
   res.json({ conn: true , mesg: "product added", result: products})
}

const update = (req, res) => {
    let name = req.params.name;
    let newPrice = req.body.price;
    let namedProduct = products.find( f => f.name === name);
    if (namedProduct) {
        namedProduct.price = newPrice;
        res.json({ con: true, msg: "product updated", result: { namedProduct } });
    } else {
        res.json({ con: false, msg: "product not found", status: 404 });
    }
}

const drop = (req, res) => {
    let id = req.params.id;
    let findId = products.find (f => f.id == id);
    if (findId) {
        products = products.filter ( f => f.id != findId.id);
        res.json({ con: true, msg: "product deleted", result: { products } });
    } else {
        res.json({ con: false, msg: "product not found", status: 404 });
    }
}

module.exports = {
    all,
    add,
    update,
    drop
}