const express = require('express');
const router = express.Router();

module.exports = router;


let users = [{ name: 'John', age: 30, salary: 5000, id: 1, single: true },
{ name: 'Jane', age: 25, salary: 4000, id: 2, single: false },
{ name: 'Doe', age: 35, salary: 6000, id: 3, single: true },
{ name: 'Smith', age: 28, salary: 4500, id: 4, single: false }]


router.get('/', (req, res) => {
    res.json({ con: true, msg: "success", result: { users } });
})

router.post('/', (req, res) => {
    let newUser = req.body;
    users.push(newUser);
    res.json({ con: true, msg: "new user added", result: { users } })
});

router.patch('/:name', (req, res) => {
    let name = req.params.name;
    let newSalary = req.body.salary;
    let nameUser = users.find(s => s.name === name);
    if (nameUser) {
        nameUser.salary = newSalary;
        res.json({ con: true, msg: "user updated", result: { nameUser } })
    } else {
        res.json({ con: false, msg: "user not found", status: 404 })
    }

})

router.delete('/:name', (req, res) => {
    let name = req.params.name;
    let findName = users.find(s => s.name === name)
    if (findName) {
        users = users.filter(s => s.name !== findName.name);
        res.json({ con: true, msg: "user deleted", result: { users } })
    } else {
        res.json({ con: false, msg: "user not found", status: 404 })
    }
});