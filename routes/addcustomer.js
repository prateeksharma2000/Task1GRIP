const express = require('express');
const router = express.Router();
const addCustomerController = require('../controllers/addCustomerContrl');

router.get('/',addCustomerController.display);
router.post('/',addCustomerController.create);

module.exports = router;