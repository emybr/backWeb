const mongoose = require('mongoose');

const PortfolioScheme = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	apellido: {
        type: String,
		required: true,
	},
	edad: {
        type: String,
		required: true,
	},
    photosPerfil: {
        type: [String],
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    perfil: {
        type: String,
        required: true,
    },
    experiencia: {
        type: String,
        required: true,
    },
    tecnologias: {
        type: [String],
        required: true,
    },
    imgTecnologias: {
        type: [String],
        required: true,  
    },
    photosTrabajos: {
        type: [String],
        required: true,
    },
    linkTrabajos: {
        type: [String],
        required: true,
    },
    linkedin: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    idioma: {
        type: [String],
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
});

const PortfolioModel = mongoose.model('Portfolio', PortfolioScheme);

module.exports = PortfolioModel;