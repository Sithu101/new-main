const db = require('../utils/db').getConn();
const { ObjectId } = require('mongodb');

const all = (req, res) => {
    let products = []
    db.collection('products')


       .find({price:{$not:{$in:[1000, 3000]}}}).forEach(product => products.push(product))


        .then(() => {
            res.status(201).json({ conn: true, mesg: "product added", result: { products: products } })
        })
        .catch((err) => {
            console.error('Error fetching products', err);
            res.json({ con: false, msg: "Error fetching products", status: 500 })
        });
}

const add = async (req, res) => {
    let ojb = req.body;
    ojb.createDate = new Date();
    await db.collection('products').insertMany(req.body.products)
        .then(() => {
            res.status(201).json({ conn: true, mesg: "product added", result: {} })
        })
        .catch((err) => {
            console.error('Error adding product', err);
            res.json({ con: false, msg: "Error adding product", status: 500 })
        });

}

const update = (req, res) => {

    let findPrice = Number(req.params.price);
    let obj = req.body;

    db.collection("products").updateMany({ price: findPrice }, { $set: obj })
        .then(() => {
            res.status(201).json({ conn: true, mesg: "product updated" })
        })
        .catch((err) => {
            console.error('Error updating product', err);
            res.json({ con: false, msg: "Error updating product", status: 500 })
        });

}

const drop = (req, res) => {
    // let id = ObjectId.createFromHexString(req.params.id);
    let findPrice = Number(req.params.price);
    db.collection("products").deleteMany({ price: findPrice })
        .then(() => {
            res.status(201).json({ conn: true, mesg: "product deleted" })
        })
        .catch((err) => {
            console.error('Error deleting product', err);
            res.json({ con: false, msg: "Error deleting product", status: 500 })
        });
}

module.exports = {
    all,
    add,
    update,
    drop
}
