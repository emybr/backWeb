const PortfolioManager = require('../dao/managerPortfolio');
const portfolioManager = new PortfolioManager
const {PortfolioModel} = require('../models')

async function postPortfolioController(req, res){
    try {
        const data = req.body;
        const validateModels = PortfolioModel(data).validateSync();
        if (validateModels){
            throw validateModels;
        }

        const newPorfolio = await portfolioManager.createPorfolio(data);
        return res.status(200).send(newPorfolio);
    } catch (error) {
        console.error('Error al crear porfolio', error);
		return res.status(400).send(error);
    }
}

async function getPortfolio(req, res){
res.header("Access-Control-Allow-Origin", "*");
const { location } = req.query;
try {
	let filter = {};
    const Portfolio = await portfolioManager.getAllPorfolio(filter);
	return res.status(200).send(Portfolio);
	} catch (error) {
	console.error('Error al obtener el porfolio', error);
	return res.status(400).send(error);
	}
}

module.exports = {
    postPortfolioController,
    getPortfolio,
}