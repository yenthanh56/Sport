const express = require('express');
const router = express.Router();


const newsController = require('../app/controller/NewController');


router.get('/', newsController.new);


module.exports = router;