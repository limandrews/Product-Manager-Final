const mongoose = require('mongoose');
// how its supposed to look in the database. the attributes in the collection
const ProductSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: String },
    description: { type: String }
}, { timestamps: true });

module.exports.Product = mongoose.model("Product", ProductSchema);
