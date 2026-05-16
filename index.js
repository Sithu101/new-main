

// client request -> server -> process -> response -> client
//  request type-> (resful requests): get, post, put, delete , patch )
//                  options , head , link , unlink

const e = require('express');
const { stat } = require('fs');

const express = require ('express'),
path = require('path'),
app = express();
app.use(express.json());

// app.get('/names',(req,res) => {
//     res.sendFile(path.join(__dirname,'/index.html'))
// })

let staff = [{name:'John', age:30, salary: 5000, id:1}, 
             {name:'Jane', age:25, salary: 4000, id:2},
             {name:'Doe', age:35, salary: 6000, id:3},
             {name:'Smith', age:28, salary: 4500, id:4}]

app.get('/',(req,res) => {
    res.json({con:true, msg:"success",result: {data:'data from server'}})
});

app.get('/users',(req,res) => {
    res.json({con:true, msg:"success",result: {staff}});
})

app.post ('/users',(req,res) => {
    let bodyData = req.body;
    staff.push(bodyData);
    res.json({con:true , msg: "success", result:{staff}})
})

app.get('/users/:name/:age',(req,res) => {
    let name = req.params.name
    let age= parseInt(req.params.age)
    let user = staff.find((user) => user.name == name && user.age == age)

    if (user) {
        res.json({con:true, msg:"success",result: {user}})
    } else {
        res.json({con:false, msg:"user not found", status:404})
    }
})

app.get('/users/:id',(req,res) => {
    let id = req.params.id;
    let user = staff.find((UserId) => UserId.id == id)
    if (user) {
        res.json({con:true, msg:"success",result: {user}})
    } else {
        res.json({con:false, msg:"user not found", status:404})
    }
})

app.post('/',(req,res) => {
    let bodyData = req.body;
    res.json({con:true, msg:"success",result: {bodyData}})
    console.log(bodyData);
})

app.listen(3000,() => {
    console.clear();
    console.log(__dirname);
    console.log('server running')
})
