const express = require('express');
const router = express.Router();
const {portfolioControler} = require('../controllers')

router.get('/', portfolioControler.getPortfolio);

router.post('/', portfolioControler.postPortfolioController);

module.exports = router;