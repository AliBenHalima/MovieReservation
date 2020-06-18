const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	type: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		required: true
	},
	duration: {
		type: String,
		required: true
	},
	rating: {
		type: String
	},
	prodName: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	file: {
		type: String,
		required: true
	},
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
		required: true
	},
	ReviewID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'reviews'
	},
	price: {
		type: Number,
		required: true
	},
	trailer: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('movies', movieSchema);
