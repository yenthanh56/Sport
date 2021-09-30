const express = require('express');
const router = express.Router();


const meController = require('../app/controller/MeController');

router.get('/tablist', meController.tablist);
router.get('/trash', meController.trash);

module.exports = router;