const express = require('express');
const router = express.Router();
const transactionController = require("../controllers/transactionCntrl");

router.get('/',transactionController.display);

module.exports = router;