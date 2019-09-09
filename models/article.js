const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Article Schema
const ArticleSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true}
});

module.exports = User = mongoose.model('Article', ArticleSchema);