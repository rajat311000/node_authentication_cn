const express = require('express');

const router = express.Router();

//------------ Importing Controller ------------//
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/', homeController.home);
router.use('/users', require('./users'));








module.exports = router;