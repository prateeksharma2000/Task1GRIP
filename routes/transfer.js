const express = require('express');
const router = express.Router();
const transferController = require("../controllers/transferCntrl");

router.get('/:id',transferController.display);
router.post('/',transferController.transfer);

module.exports = router;