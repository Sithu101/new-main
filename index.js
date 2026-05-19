

// client request -> server -> process -> response -> client
//  request type-> (resful requests): get, post, put, delete , patch )
//                  options , head , link , unlink

const e = require('express');
const { stat } = require('fs');

const express = require('express'),
    path = require('path'),
    app = express();
app.use(express.json());

// app.get('/names',(req,res) => {
//     res.sendFile(path.join(__dirname,'/index.html'))
// })

let staff = [{ name: 'John', age: 30, salary: 5000, id: 1, single: true },
{ name: 'Jane', age: 25, salary: 4000, id: 2, single: false },
{ name: 'Doe', age: 35, salary: 6000, id: 3, single: true },
{ name: 'Smith', age: 28, salary: 4500, id: 4, single: false }]

let products = [{ name: 'phone', price: 500, id: 1, colors: ["red", "blue", "black"] },
{ name: 'laptop', price: 1000, id: 2, colors: ["gray", "silver"] },
{ name: 'tablet', price: 300, id: 3, colors: ["white", "black"] },
{ name: 'headphones', price: 100, id: 4, colors: ["black", "white"] }]


            // User routes


app.get('/users', (req, res) => {
    res.json({ con: true, msg: "success", result: { staff } });
})

app.post('/user', (req, res) => {
    let newUser = req.body;
    staff.push(newUser);
    res.json({ con: true, msg: "new user added", result: { staff } })
});

app.patch('/user/:name', (req, res) => {
    let name = req.params.name;
    let newSalary = req.body.salary;
    let nameUser = staff.find(s => s.name === name);
    if (nameUser) {
        nameUser.salary = newSalary;
        res.json({ con: true, msg: "user updated", result: { nameUser } })
    } else {
        res.json({ con: false, msg: "user not found", status: 404 })
    }

})
app.delete('/user/:name', (req, res) => {
    let name = req.params.name;
    let findName = staff.find(s => s.name === name)
    if (findName) {
        staff = staff.filter(s => s.name !== findName.name);
        res.json({ con: true, msg: "user deleted", result: { staff } })
    } else {
        res.json({ con: false, msg: "user not found", status: 404 })
    }
});


                    // Product routes

app.get('/products', (req, res) => {
    res.json({ con: true, msg: "success", result: { products } });
}) 

app.post ('/product', (req, res) => {
    let newProduct = req.body;
    products.push(newProduct);
    res.json({ con: true, msg: "new product added", result: { products } })
})

app.patch('/product/:name', (req, res) => {

    let name = req.params.name;
    let newPrice = req.body.price;
    let nameProduct = products.find (p => p.name === name);
     if (nameProduct) {
        nameProduct.price = newPrice;
        res.json({ con: true, msg: "product updated", result: { nameProduct } })
     } else {
        res.json({ con: false, msg: "product not found", status: 404 })
     }
})

app.delete ('/product/:id', (req, res) => {
    let id = req.params.id;
    let findId = products.find(p => p.id == id);

    if (findId) {
        products = products.filter(p => p.id != findId.id);
        res.json({ con: true, msg: "product deleted", result: { products } })
    } else {
        res.json({ con: false, msg: "product not found", status: 404 })
    }
})

// app.get('/',(req,res) => {
//     res.json({con:true, msg:"success",result: {data:'data from server'}})
// });

// app.get('/users',(req,res) => {
//     res.json({con:true, msg:"success",result: {staff}});
// })

// app.post ('/users',(req,res) => {
//     let bodyData = req.body;
//     staff.push(bodyData);
//     res.json({con:true , msg: "success", result:{staff}})
// })

// app.get('/users/:name/:age',(req,res) => {
//     let name = req.params.name
//     let age= parseInt(req.params.age)
//     let user = staff.find((user) => user.name == name && user.age == age)

//     if (user) {
//         res.json({con:true, msg:"success",result: {user}})
//     } else {
//         res.json({con:false, msg:"user not found", status:404})
//     }
// })

// app.get('/users/:id',(req,res) => {
//     let id = req.params.id;
//     let user = staff.find((UserId) => UserId.id == id)
//     if (user) {
//         res.json({con:true, msg:"success",result: {user}})
//     } else {
//         res.json({con:false, msg:"user not found", status:404})
//     }
// })

// app.get('/users/:names', (req,res) => {
//     let names = staff.map (s => s.name)
//     let totalSalary = staff.reduce ((total,s) => total + s.salary,0)
//     res.json ({con:true, msg:"staff names",result: {names,total :totalSalary}})
// })

// app.post('/',(req,res) => {
//     let bodyData = req.body;
//     res.json({con:true, msg:"success",result: {bodyData}})
//     console.log(bodyData);
// })

// app.delete ('/users/:id',(req,res ) => {
//     let idQuery = parseInt(req.params.id);
//     let findId = staff.find(s => s. id === idQuery);
//     if (findId) {
//         staff = staff.filter (s => s.id !== findId.id);
//         res.json({con:true, msg:"Deleted",result: {staff}})
//     } else {
//         res.json({con:false, msg:"user not found", status:404})
//     }
// })

// app.delete ('/users/:name',(req,res) => {
//     let nameQuery = req.params.name;
//     let findName = staff.find (s => s.name == nameQuery)

//     if (findName) {
//         staff = staff.filter (s => s.name != findName.name);

//         res.json({con:true, msg:"Deleted",result: {staff}})
//     } else {
//         res.json({con:false, msg:"user not found", status:404})
//     }
// })

// app.patch ('/users/:id/:salary', (req,res) => {
//    let id = req.params.id;
//    let newSalary = parseInt(req.params.salary);

//    let userFind = staff.find(s => s.id == id)
//     if (userFind) {
//         userFind.salary = newSalary;
//         res.json({con:true, msg:"Updated",result: {userFind}})

//     } else {
//         res.json({con:false, msg:"user not found", status:404})
//     }
// })

// app.route('/users')
//     .get((req,res) => {
//         res.json({con:true, msg:"success",result: {staff}});
//     })

//     .post((req,res) => {
//         staff.push(req.body);
//         res.json({con:true, msg:"new user added",result: {staff}});
//     })

//     .patch((req,res,next) => {
//         let name = req.body.name;
//         let newSalary = req.body.salary;

//         let userFind = staff.find (s => s.name === name);
//         if (userFind) {
//             userFind.salary = newSalary;
//             res.json({con:true, msg:"Updated",result: {userFind}})
//         } else {
//             next(new Error("user not found"));
//         }
//     })
//     .delete((req,res,next) => {

//     })



app.listen(3000, () => {
    console.clear();
    console.log(__dirname);
    console.log('server running')
})
