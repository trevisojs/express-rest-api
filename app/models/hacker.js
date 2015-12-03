var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HackerSchema = new Schema({
    name: String,
    alias: String
});

module.exports = mongoose.model('Hacker', HackerSchema);
