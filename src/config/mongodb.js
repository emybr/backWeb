const { MongoClient } = require('mongodb');
require('dotenv').config();
const DB = process.env.MONGO_DB_NAME;
const URI = process.env.MONGO_DB_URI;

// Definimos una clase llamada Database
class Database {
	constructor() {
		this.uri = URI;
		this.client = new MongoClient(this.uri, {			
		});
		this.db = null;
	}

	async connectToDatabase() {
		try {
			await this.client.connect();
			this.publicationCollection = this.client.db(DB).collection('publication');
			this.photoCollection = this.client.db(DB).collection('photo');
			this.portfolioCollection = this.client.db(DB).collection('portfolio');
			console.log('Connected to database');
		} catch (error) {
			console.error(error);
		}
	}

	// Método para desconectar del servidor de MongoDB
	async disconnect() {
		await this.client.close();
		console.log('Disconnected from database');
	}
}

// Exportamos la clase Database para que pueda ser utilizada en otros módulos
module.exports = Database;
