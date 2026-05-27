

// client request -> server -> process -> response -> client
//  request type-> (resful requests): get, post, put, delete , patch )
//                  options , head , link , unlink

const express = require('express');
app = express();
app.use(express.json());



const { connectDB, getConn } = require('./utils/db');

connectDB((err) => {
    if (!err) {
        console.log('Database connected successfully');
    } else {
        console.error('Database connection failed', err);
    }
});

app.listen(3000, () => {
    // console.clear();
    console.log('Server running...')
});



// app.get('/names',(req,res) => {
//     res.sendFile(path.join(__dirname,'/index.html'))
// })

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

const userRoute = require('./routes/users');
const productRoute = require('./routes/products');

// app.use('/users', userRoute);
// app.use('/products', productRoute);

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

app.get('/users', async (req, res) => {
    let users = []
    let db = getConn();
     await db.collection('username').find().forEach(user => users.push(user))
        .then(() => {
            console.log("database data", users);
            res.json({ con: true, msg: "success", result: { users } })
        })
        .catch((err) => {
            console.error('Error fetching users', err);
            res.json({ con: false, msg: "Error fetching users", status: 500 })
        })
})