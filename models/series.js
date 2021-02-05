const mongoose = require("mongoose");

const serieSchema = new mongoose.Schema({
    title : String,
    content: String,
    image: String,
});

const serie = mongoose.model('serie', serieSchema)

module.exports = serie