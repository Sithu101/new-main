const express = require('express');
const router = express.Router();
const Controller = require('../controller/user');
module.exports = router;

        // User routes

router.get('/', Controller.all);
router.post('/', Controller.add);
router.patch('/:name', Controller.update);
router.delete('/:name', Controller.drop);