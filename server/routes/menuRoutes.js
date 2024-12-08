const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// routes
router.get('/', menuController.getMenus);
router.get('/:id', menuController.getMenuDetail);

module.exports = router;