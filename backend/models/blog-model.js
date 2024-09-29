const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    recipe: { type: String, required: true }
});

module.exports = mongoose.model("Blog", blogSchema);