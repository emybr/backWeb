const mongoose = require('mongoose');

const publicationScheme = new mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
	title: {
        type: String,
		required: true,
	},
	description: {
        type: String,
		required: true,
	},
    photos: {
        type: [String],
        required: true,
    },
});

const PublicationModel = mongoose.model('Publication', publicationScheme);

module.exports = PublicationModel;