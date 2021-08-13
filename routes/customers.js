const express = require('express');
const router = express.Router();
const customerController = require("../controllers/customersCntrl"); 

router.get('/',customerController.display);

module.exports = router;