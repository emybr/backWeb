const Database = require('../config/mongodb.js');
const {
	createDocument,
	getOneDocument,
	getAllDocuments,
	updateDocument,
	deleteDocument,
} = require('../config/factory.js');
const PorfolioModel = require('../models/portfolio.model.js');

class PortfolioManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
		this.deleteDocument = deleteDocument;
	}

	async createPorfolio(data) {
		try {
			const newPorfolio = new PorfolioModel(data);
			const result = await this.createDocument('portfolioCollection', newPorfolio);
			return result, newPorfolio;
		} catch (error) {
			throw error;
		}
	}

	async getOnePorfolio(query) {
		try {
			const Porfolio = await this.getAllDocuments('portfolioCollection', query);
			return Porfolio;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener la publicación: ${error.message}`);
		}
	}

	async getAllPorfolio(query) {
		try {
			// Se agrega filtro o query que llega desde el controller mediante un query params
			const Porfolios = await this.getAllDocuments('portfolioCollection', query);
			return Porfolios;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el publicación: ${error.message}`);
		}
	}

	async getPorfolioById(id) {
		try {
			const PorfolioId = await this.getOneDocument('portfolioCollection', id);
			return PorfolioId;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el publicación por id: ${error.message}`);
		}
	}

	async putUpdatePorfolio(filter, dataUpdate) {
		try {
			const Porfolios = await this.updateDocument('portfolioCollection', filter, dataUpdate);
			return Porfolios;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al actualizar publicación: ${error.message}`);
		}
	}

	async deletePorfolioById(id) {
		try {
			const PorfolioId = await this.deleteDocument('portfolioCollection', id);
			console.log(PorfolioId);
			return PorfolioId;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al eliminar el publicación por id: ${error.message}`);
		}
	}

	async putUpdatePorfolio(filter, dataUpdate) {
		try {
			const Porfolios = await this.updateDocument('portfolioCollection', filter, dataUpdate);
			return Porfolios;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al actualizar publicación: ${error.message}`);
		}
	}
	
}



module.exports = PortfolioManager;


