

// client request -> server -> process -> response -> client
//  request type-> (resful requests): get, post, put, delete , patch )
//                  options , head , link , unlink

const express = require('express');
app = express();
app.use(express.json());


const { connectDB } = require('./utils/db');

const init = () => {
    app.listen(3000, () => {
        console.log('Server running...')
    });
    const userRoute = require('./routes/users');
    const productRoute = require('./routes/products');

    app.use('/users', userRoute);
    app.use('/products', productRoute);

}

connectDB((err) => {
    if (!err) {
        init();
        console.log('Database connected successfully');
    } else {
        console.error('Database connection failed', err);
    }
});





// app.get('/users',async (req, res) => {

//     let db = getConn();
//     let users = await db.collection('username').find().toArray();
//     console.log("database data",users);
//     res.json({ con: true, msg: "success", result: { users } })
//     if (users) {
//         res.json({ con: true, msg: "success", result: { users } })
//     } else {
//         res.json({ con: false, msg: "users not found", status: 404 })
//     }
// })

