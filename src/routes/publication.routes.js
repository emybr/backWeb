const express = require('express');
const router = express.Router();
const { PublicationController } = require('../controllers');


router.get('/', PublicationController.getAllPublicationController);

router.post('/', PublicationController.postPublicationController);


module.exports = router;