const db = require('../utils/db').getConn();


const all =  (req, res) => {
    let products = []
     db.collection('products').find()
        .forEach(product => products.push(product))
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
    await db.collection('products').insertOne(ojb)
        .then(() => {
            res.status(201).json({ conn: true, mesg: "product added", result: {} })
        })
        .catch((err) => {
            console.error('Error adding product', err);
            res.json({ con: false, msg: "Error adding product", status: 500 })
        });

}

const update = (req, res) => {


}

const drop = (req, res) => {

}

module.exports = {
    all,
    add,
    update,
    drop
}