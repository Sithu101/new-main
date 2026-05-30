const express = require('express');
const router = express.Router();
const Controller = require('../controller/product')

module.exports = router;

// Product routes

router.get('/', Controller.all);
router.post('/', Controller.add);
router.patch('/:price', Controller.update);
router.delete('/:price', Controller.drop);
