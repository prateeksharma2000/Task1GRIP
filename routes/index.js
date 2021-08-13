const express = require('express');
const router = express.Router();

router.use('/',require('./home'));
router.use('/addcustomer',require('./addcustomer'));
router.use('/customers',require('./customers'));
router.use('/transaction',require('./transaction'));
router.use('/transfer',require('./transfer'));

module.exports = router;