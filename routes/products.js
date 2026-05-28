const express = require('express');
const router = express.Router();
const Controller = require('../controller/product')

module.exports = router;

// Product routes

router.get('/', Controller.all);
router.post('/', Controller.add);
router.patch('/:id', Controller.update);
router.delete('/:id', Controller.drop);
